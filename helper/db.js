import { usersEmail } from "@/models/email";
import mongoose from "mongoose"

export const connectToDatabase = async () => {
  // Database connection logic here
  try{
    const {connection} = await mongoose.connect(process.env.DATABASE_URL, {
        dbName : "intercom_sim"
    });

    console.log("Connected to database:", connection.host);
    const check = usersEmail
    console.log("Model check:", check);

    const userEmailData =  new usersEmail({
      email : "joy@gmail.com",
      name : "joy"
    })
    await userEmailData.save();
    console.log("User email data saved:", userEmailData);

  }
  catch(error){

    console.error("Error connecting to database:", error)
  }
}   