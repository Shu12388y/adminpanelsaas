import { NextResponse } from "next/server";
import AWS from "aws-sdk";


const s3 =  new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,

})

export const POST = async(request) =>{

    try {
        const data =  await request.formData();
        const file =  data.get('file');
        const prefix = data.get('prefix');
        console.log(file,prefix)

        if(!file || !prefix){
            return NextResponse.json({message:"File and prefix is requried"})
        }

        // convert to array buffer
        const buffer = Buffer.from( await file.arrayBuffer());
        // create params object
        const params = {
            Bucket:process.env.S3_BUCKET_NAME,
            Key:`${prefix}/${file.name}`,
            Body:buffer,
            ContentType:file.type
        }
        await s3.upload(params).promise();
        return NextResponse.json({message:`https://d1520l0f8yvbpl.cloudfront.net/${prefix}/${file.name}`},{status:201})
    } catch (error) {
        return NextResponse.json({message:error},{status:500})
        
    }

}