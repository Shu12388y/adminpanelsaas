import { prisma } from "@/config/db";
import { NextResponse } from "next/server";


export const POST = async(request) =>{
    try {
        const data = await request.json();
        console.log(data)
        if(!data){
            return NextResponse.json({message:"Empty request body"},{status:404})
        }
        await prisma.product.update({
            data,
            where:{
                id:data.id
            }
        })

        return NextResponse.json({message:"Updated"},{status:200})

    } catch (error) {
        return NextResponse.json({message:error},{status:500})
    }
}