import z from "zod";

export const signupSchema = z
    .object({
      first_name: z
        .string()
        .min(1, { message: "first Name is required" })
        .max(25, { message: "max letters is 25" }),
      last_name: z
        .string()
        .min(1, { message: "last Name is required" })
        .max(25, { message: "max letters is 25" }),
      email: z
        .string()
        .email({ message: "it should be valid email" })
        .min(1, { message: "email is required" }),
      password: z
        .string()
        .min(6, { message: "password must be more than 6 letters" })
        .max(30, { message: "password must be less than 30 letters" }),
      confirm_password: z
        .string()
        .min(6, { message: "confirm password must be more than 6 letters" })
        .max(30, { message: "confirm password must be less than 30 letters" }),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "password don't match",
      path: ["confirm_password"],
    });
    
export  type ISignup = z.infer<typeof signupSchema>;