import { connectToDatabase } from "@/helper/db"

connectToDatabase()

export const GET = async () => {
  try {
    const data = {
      title : "This is title ",
      des : "This is title des "
    }

    return Response.json({
       success : true ,
       status : 200,
       data
    })
  }
  catch (error) {
    console.log(error)

    return Response.json({
      success : false,
      message : "Internal server error",
      status : 500
    })
  }
}