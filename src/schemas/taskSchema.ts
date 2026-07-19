import { z } from "zod";


export const taskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .min(5, "Description must be at least 5 characters"),

  priority: z.enum(["High", "Medium", "Low"]),

  assignee: z
    .string()
    .min(2, "Assignee is required"),
});

export type TaskFormData = z.infer<typeof taskSchema>;