"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { ProductFormSchema } from "@/lib/validators/product";

type ProductFormData = z.infer<typeof ProductFormSchema>;

export default function AddProductForm() {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(ProductFormSchema),
  });

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  async function onSubmit(data: ProductFormData) {
    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    try {
      const fd = new FormData();
      fd.append("file", imageFile);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const uploadData = await uploadRes.json();

      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          image: uploadData.url,
        }),
      });

      reset();
      setImageFile(null);
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to add product. Check console for details.");
    }
  }

  return (
    <div className="mb-6 w-full max-w-2xl">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Add Product</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Name</label>
            <input
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-zinc-100 placeholder:text-zinc-500 transition"
              placeholder="Product name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Price</label>
              <input
                type="number"
                step="0.01"
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-zinc-100 placeholder:text-zinc-500 transition"
                placeholder="Price"
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price && (
                <p className="text-xs text-rose-400 mt-1">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-1">Stock</label>
              <input
                type="number"
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-zinc-100 placeholder:text-zinc-500 transition"
                placeholder="Stock"
                {...register("stock", { valueAsNumber: true })}
              />
              {errors.stock && (
                <p className="text-xs text-rose-400 mt-1">{errors.stock.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
            <div className="sm:col-span-2">
              <label className="block text-sm text-zinc-300 mb-2">Image</label>

              <label className="flex items-center gap-3 p-3 border-2 border-dashed border-zinc-700 rounded cursor-pointer bg-zinc-900 hover:border-zinc-600">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
                <span className="text-sm text-zinc-400">Click to upload or drag image</span>
              </label>
              {/* image validation is handled via state (alert) — no form field error */}
            </div>

            <div className="sm:col-span-1 self-start">
              <div className="w-24 h-24 bg-zinc-800 rounded overflow-hidden border border-zinc-700 flex items-center justify-center">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="block object-contain"
                    style={{ width: 150, height: 150, maxWidth: 150, maxHeight: 150 }}
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded shadow-sm"
            >
              Add Product
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setImageFile(null);
              }}
              className="px-3 py-2 border border-zinc-700 rounded text-zinc-200 hover:border-zinc-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
