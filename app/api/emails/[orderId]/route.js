import { connectToDatabase } from "@/helper/db";
import { usersEmail } from "@/models/email";

export const GET = async (req) => {
  try {
    await connectToDatabase();

    const pathname = req.nextUrl.pathname;
    console.log("Pathname:", pathname);
    const orderId = pathname.split("/").pop();
    console.log("Extracted orderId:", orderId);

    const emails = await usersEmail
      .find({ orderId })
      .sort({ createdAt: -1 })
      .lean();

    if (emails.length === 0) {
      return Response.json({
        success: false,
        status: 404,
        message: "OrderId not found",
      });
    }

    return Response.json({
      success: true,
      status: 200,
      data: emails,
      message: "Order fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal server error",
    });
  }
};

export const DELETE = async (req) => {
  try {
    await connectToDatabase();

    const { id } = await req.json();

    const deletedUser = await usersEmail.findByIdAndDelete(id);

    return Response.json({
      success: true,
      status: 200,
      data: deletedUser,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal server error",
    });
  }
};
