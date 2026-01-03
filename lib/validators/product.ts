import { z } from "zod";

/**
 * Frontend form (before upload)
 */
export const ProductFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be greater than 0"),
  stock: z.number().int().min(0),
});

/**
 * DB-safe schema (CREATE)
 */
export const ProductCreateSchema = ProductFormSchema.extend({
  image: z.string().url("Image is required"),
});

/**
 * DB-safe schema (PATCH / EDIT)
 */
export const ProductUpdateSchema = ProductFormSchema.partial();
