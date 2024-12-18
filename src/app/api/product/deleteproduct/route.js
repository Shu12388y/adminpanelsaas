import { prisma } from "@/config/db";
import { NextResponse } from "next/server";


export const POST = async(request)=>{
    try {
        const {id}  = await request.json();
        console.log(id)
        if(!id){
            return NextResponse.json({message:"Id is required"},{status:404})
        }
        await prisma.product.delete({
            where:{
                id:parseInt(id)
            }
        })

        return NextResponse.json({message:"Deletd"},{status:200})

    } catch (error) {
        return NextResponse.json({message:error},{status:500})
    }


}