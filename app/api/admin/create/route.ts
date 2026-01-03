import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const exists = await Admin.findOne({ email: "admin@test.com" });
  if (exists) {
    return NextResponse.json({ message: "Admin already exists" });
  }

  const hashed = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@test.com",
    password: hashed,
    role: "admin"
  });

  return NextResponse.json({
    email: "admin@test.com",
    password: "admin123"
  });
}
