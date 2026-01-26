import { connectToDatabase } from "@/helper/db";
import { usersEmail } from "@/models/email";

export const GET = async()=>{
    try{
        await connectToDatabase();
        const emails = await usersEmail.find({}).sort({ createdAt : -1 }).lean();

        return Response.json({
           success : true ,
           status : 200,
           data : emails,
           message : "Emails fetched successfullly "
        })

    }
    catch(error){
        console.log(error)

        return Response.json({
          success : false,
          message : "Internal server error , emails not fetched",
          status : 500
        })
    }
} 