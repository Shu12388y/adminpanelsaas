import { NextResponse } from "next/server";
import { prisma } from "@/config/db";

export const GET = async () => {
  try {
    const orderInfo = await prisma.order.count();
    console.log(orderInfo);
    return NextResponse.json({ message: orderInfo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" + error}, { status: 500 });
  }
};
