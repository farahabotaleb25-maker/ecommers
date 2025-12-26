import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rePassword: z.string(),
    dateOfBirth: z.string().nonempty('Date of Birth is required'),
    gender: z.string().nonempty('Gender is required'),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ['rePassword'],
  });