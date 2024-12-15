import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    try {
        const data = await request.json();
        if(!data){
            return NextResponse.json({messsage:"Empty Data response"},{status:404})
        }
        await prisma.product.update({
            where:{
                id:data.id
            },data:{
                ...data
            }
        });
        return NextResponse.json({message:"Product updated"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Server Error" + error},{status:500})
    }
}