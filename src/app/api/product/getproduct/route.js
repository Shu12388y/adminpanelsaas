import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    try {
        const {data} =  await request.json();
        console.log(data)
        if(!data){
            return NextResponse.json({
                message:"Product id not got"
            },{
                status:404
            })
        }

        const productInfo = await prisma.product.findUnique({
            where:{
                id:parseInt(data)
            }
        });

        if(!productInfo){
            return NextResponse.json({message:"Product not found"},{status:404})
        }

        return NextResponse.json({message:productInfo},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Server Error"+ error},{status:500})
    }
}