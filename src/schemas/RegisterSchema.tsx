import z from "zod";

export const formRegisterSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 character    ",
    }),
    email: z.email({
      message: "Enter a valid email",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters!",
    })
      .regex(/[A - Z]/, {
        message: "Password must have a uppercase letter",
      })
      .regex(/[a - z]/, {
        message: "Password must have a lowercase letter",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character!",
      })
      .regex(/[[0 - 9]]/, {
        message: "Password must contain at least one number!",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
