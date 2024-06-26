const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ApiUrl = require("./enum/api-url.enum");
const db = require("./dbConnection/dbConnection");
const ErrorMessages = require("./enum/errMessages.enum");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const getOrderId = (currentTime, venueStartTime, venueEndTime, callback) => {
  const start = new Date(currentTime);
  const [startHour, startMinute] = venueStartTime.split(":").map(Number);
  start.setHours(startHour, startMinute, 0, 0);

  const end = new Date(start);
  const [endHour, endMinute] = venueEndTime.split(":").map(Number);
  end.setHours(endHour, endMinute, 0, 0);
  if (endHour < startHour) {
    end.setDate(end.getDate() + 1);
  }

  if (currentTime >= start && currentTime <= end) {
    db.query("SELECT COUNT(*) AS count FROM orders", (err, result) => {
      if (err) {
        return callback(err, null);
      }
      const orderId = result[0].count + 1;
      callback(null, orderId);
    });
  } else {
    callback(null, null);
  }
};

app.post(ApiUrl.apiOrder, (req, res) => {
  const { amount, currentTime, venueStartTime, venueEndTime, customerName, customerEmail, customerPhone, notes } = req.body;
  const orderTime = new Date(currentTime);

  getOrderId(orderTime, venueStartTime, venueEndTime, (err, orderId) => {
    if (err) {
      return res.status(500).send({ message: ErrorMessages.serverError });
    }

    if (orderId) {
      const order = { id: orderId, amount, order_time: orderTime, customer_name: customerName, customer_email: customerEmail, customer_phone: customerPhone, notes };
      db.query("INSERT INTO orders SET ?", order, (err, result) => {
        if (err) {
          return res.status(500).send({ message: ErrorMessages.serverError });
        }
        res.status(201).send(order);
      });
    } else {
      res.status(400).send({ message: ErrorMessages.venueClosed });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
