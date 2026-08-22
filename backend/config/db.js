import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://<db_username>:<db_password>@cluster0.bqgvguj.mongodb.net/"
    )
    .then(() => console.log("DB Connected"));
};
// add your mongoDB connection string above.
// Do not use '@' symbol in your database user's password else it will show an error.
