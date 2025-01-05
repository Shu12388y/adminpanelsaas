import { NextResponse } from "next/server";
import { prisma } from "@/config/db";

export const GET = async (request) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get("date");  

    if (!date) {
      return NextResponse.json(
        { message: "Date query parameter is required" },
        { status: 400 }
      );
    }

    const parsedDate = new Date(date);

    if (isNaN(parsedDate)) {
      return NextResponse.json(
        { message: "Invalid date format. Please use YYYY-MM-DD format." },
        { status: 400 }
      );
    }

    const data = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: parsedDate,
        }
      },
      select:{
        product:{
            select:{
                name:true,
                price: true,
                rating: true,
                image: true,
            }
        }
      }
    });

    return NextResponse.json(
      { data: data},  
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error.message }, { status: 500 });
  }
};
