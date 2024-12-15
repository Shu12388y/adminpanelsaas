import { NextResponse } from "next/server";

export const POST = async(request)=>{
    try {
        return NextResponse.json({message:"uploaded"},{status:201})
    } catch (error) {
        return NextResponse.json({message:"Server Error"},{status:500})
    }


}