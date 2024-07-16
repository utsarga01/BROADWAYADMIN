import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://regmiutsarga7:Nipani321@cluster0.kpjiesk.mongodb.net/kEC_BROADWAY?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("DB connection established....");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
    process.exit();
  }
};
export default connectDB;
