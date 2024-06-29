const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ApiUrl = require("./enum/api-url.enum");
const ErrorMessages = require("./enum/errMessages.enum");
const connectToDB = require("./dbConnection/db");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const db = connectToDB();
const Order = db.models.Order;

const getOrderId = async (currentTime, venueStartTime, venueEndTime) => {
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
    const orderCount = await Order.count();
    return orderCount + 1;
  } else {
    return null;
  }
};

app.post(ApiUrl.apiOrder, async (req, res) => {
  const { amount, currentTime, venueStartTime, venueEndTime } = req.body;
  const orderTime = new Date(currentTime);

  try {
    const orderId = await getOrderId(orderTime, venueStartTime, venueEndTime);
    if (orderId) {
      const order = await Order.create({
        amount: amount,
        order_time: orderTime
      });
      res.status(201).send(order);
    } else {
      res.status(400).send({ message: ErrorMessages.venueClosed });
    }
  } catch (err) {
    res.status(500).send({ message: ErrorMessages.serverError });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
