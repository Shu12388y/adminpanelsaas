import { NextResponse } from "next/server";
import {prisma} from "@/config/db";

export const POST = async(request) =>{
    try {
        const data =  await request.json();
        if(!data){
            return NextResponse.json({message:"Empty Data Response"},{status:404})
        }
        await prisma.product.create({
            data
        });
        return NextResponse.json({message:"Created"},{status:201})
    } catch (error) {
        return NextResponse.json({message:"Server Error"+ error},{status:500})
    }
}