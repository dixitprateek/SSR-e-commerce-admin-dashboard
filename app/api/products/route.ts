import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import {
  ProductCreateSchema,
  ProductUpdateSchema,
} from "@/lib/validators/product";


export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const parsed = ProductCreateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const product = await Product.create(parsed.data);
  return NextResponse.json(product);
}



export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();

  await Product.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: Request) {
  await connectDB();
  const body = await req.json();
  const { id, ...data } = body;

  if (!id) {
    return NextResponse.json(
      { error: "Product ID required" },
      { status: 400 }
    );
  }

  const parsed = ProductUpdateSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const updated = await Product.findByIdAndUpdate(
    id,
    parsed.data,
    { new: true }
  );

  return NextResponse.json(updated);
}
