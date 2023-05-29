const mongoose = require("mongoose");
const Dishes = require("./models/dishes");
const assert = require("assert");

const url = "mongodb://127.0.0.1:27017/conFusion";
const dbName = "conFusion";
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log("Connected");
  let newDish = Dishes({
    name: "Uthazz",
    description: "test",
  });
  newDish
    .save()
    .then((dish) => {
      console.log(dish);
      return Dishes.findByIdAndUpdate(
        dish._id,
        { $set: { description: "Updated test" } },
        { new: true }
      ).exec();
    })
    .then((dish) => {
      console.log(dish);
      dish.comments.push({
        rating: 5,
        comment: "damn sinking felling",
        author: "leornardo",
      });
      return dish.save();
    })
    .then((dish) => {
      console.log(dish);
      return Dishes.deleteOne({ name: "Uthazz" });
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
