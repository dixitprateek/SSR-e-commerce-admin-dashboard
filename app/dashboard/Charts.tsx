"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Product = {
  name: string;
  price: number;
  stock: number;
};

const truncate = (text: string, max = 24) =>
  text.length > max ? text.slice(0, max) + "…" : text;

export default function Charts({ products }: { products: Product[] }) {
  // Top 10 by stock
  const topStock = [...products]
    .sort((a, b) => b.stock - a.stock)
    .slice(0, 10);

  // Top 10 by price
  const topPrice = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 10);

  return (
    <div className="space-y-8 mb-12">

      {/* TOP STOCK */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">
          Top 10 Products by Stock
        </h2>

        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={topStock} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis type="number" stroke="#aaa" />
            <YAxis
              type="category"
              dataKey="name"
              width={320}            // 🔥 IMPORTANT
              stroke="#aaa"
              tickFormatter={(v) => truncate(v)}
            />
            <Tooltip />
            <Bar dataKey="stock" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* TOP PRICE */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">
          Top 10 Products by Price
        </h2>

        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={topPrice} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis type="number" stroke="#aaa" />
            <YAxis
              type="category"
              dataKey="name"
              width={320}            // 🔥 IMPORTANT
              stroke="#aaa"
              tickFormatter={(v) => truncate(v)}
            />
            <Tooltip />
            <Bar dataKey="price" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
