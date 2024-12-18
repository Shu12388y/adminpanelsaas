import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        const data = await prisma.product.findMany({});
        if(!data){
            return NextResponse.json({message:"No Product Listed"},{status:404})
        }
        return NextResponse.json({data:data},{status:200})
    } catch (error) {
        return NextResponse.json({message:error},{status:500})
    }
}