"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductActions({ product }: { product: any }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  async function deleteProduct() {
    if (!confirm("Delete this product?")) return;
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product._id }),
    });
    router.refresh();
  }

  async function save() {
    await fetch("/api/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: product._id,
        name,
        price: Number(price),
        stock: Number(stock),
      }),
    });

    setEditing(false);
    router.refresh();
  }

  if (editing) {
    return (
      <div className="flex items-center gap-2">
        <input
          aria-label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-36 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm text-zinc-100"
        />

        <input
          aria-label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-20 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm text-zinc-100"
        />

        <input
          aria-label="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-16 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm text-zinc-100"
        />

        <button
          onClick={save}
          className="inline-flex items-center px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded"
        >
          Save
        </button>

        <button
          onClick={() => {
            setEditing(false);
            setName(product.name);
            setPrice(product.price);
            setStock(product.stock);
          }}
          className="px-2 py-1 border border-zinc-700 rounded text-sm text-zinc-200 hover:border-zinc-600"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setEditing(true)}
        className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-sm rounded text-zinc-100"
      >
        Edit
      </button>

      <button
        onClick={deleteProduct}
        className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-sm rounded text-white"
      >
        Delete
      </button>
    </div>
  );
}
