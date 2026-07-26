import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://workdipesh17_db_user:UypJDVCzUVals9OK@cluster0.dxnswtl.mongodb.net/",
    )
    .then(() => console.log("DB Connected"));
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your database user's password else it will show an error.
