import { connectToDatabase } from "@/helper/db";
import { usersEmail } from "@/models/email";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const { orderId } = await params;

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

export const DELETE = async (req, { params }) => {
  console.log("Params received:", params);
  try {
    await connectToDatabase();

    const { orderId } = await params;

    const deletedUser = await usersEmail.findByIdAndDelete(orderId);

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

export const PATCH = async (req, { params }) => {
  try {
    await connectToDatabase();

    const { orderId } = await params;

    const { status } = await req.json();

    const updatedOrder = await usersEmail.findOneAndUpdate(
      { orderId },
      { status },
      { new: true },
    );

    return Response.json({
      success: true,
      status: 200,
      data: updatedOrder,
      message: "Order updated successfully",
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
