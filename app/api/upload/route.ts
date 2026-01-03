import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("🔥 /api/upload HIT");

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    console.log("❌ No file received");
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  console.log("✅ File received:", file.name);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadResult = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "products" },
      (error, result) => {
        if (error) reject(error);
        resolve(result);
      }
    ).end(buffer);
  });

  console.log("✅ Uploaded:", uploadResult.secure_url);

  return NextResponse.json({ url: uploadResult.secure_url });
}
