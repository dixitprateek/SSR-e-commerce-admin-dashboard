import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import AddProductForm from "./AddProductForm";
import ProductActions from "./ProductActions";
import Charts from "./Charts";
export const metadata = {
  title: "Dashboard | Admin Panel",
};

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== "admin") {
    redirect("/login");
  }

  await connectDB();
  const products = (await Product.find().lean()).map((p: any) => ({
    _id: p._id.toString(),
    name: p.name,
    price: p.price,
    stock: p.stock,
    image: p.image,
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* ADD PRODUCT FORM */}
      <div className="mb-10">
        <AddProductForm />
      </div>
      {/* CHARTS */}
      <Charts products={products} />
      


      {/* PRODUCT LIST (SMALL IMAGE LIST VIEW) */}
      <ul className="space-y-3">
      {products.map((p) => (
        <li
          key={p._id}
          className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-md p-3"
        >
          <div className="w-6 h-6 overflow-hidden rounded bg-zinc-800 flex-shrink-0">
            <img
              src={p.image}
              alt={p.name}
              width={450}
              height={250}
              className="w-6 h-6 block object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-medium">{p.name}</h3>
            <p className="text-xs text-zinc-400">
              ₹{p.price} · Stock: {p.stock}
            </p>
          </div>

          <ProductActions product={p} />
        </li>
      ))}
    </ul>

    </div>
  );
}
