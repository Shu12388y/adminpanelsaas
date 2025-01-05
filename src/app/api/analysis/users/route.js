import { NextResponse } from "next/server";
import { prisma } from "@/config/db";

export const GET = async () => {
  try {
    const userData = await prisma.user.count();
    return NextResponse.json({ message: userData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
