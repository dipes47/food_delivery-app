import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://adamgomez4784_db_user:Qdf73yUaHG7@cluster0.bqgvguj.mongodb.net/food-del-app"
    )
    .then(() => console.log("DB Connected"));
};
// add your mongoDB connection string above.
// Do not use '@' symbol in your database user's password else it will show an error.
