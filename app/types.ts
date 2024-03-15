import { z } from "zod";

export const newsletterSchema = z.object({
    email: z.string().min(1, { message: "Email is required." }).email({ message: "Please insert a valid email."}),
});

export type TNewsletterSchema = z.infer<typeof newsletterSchema>;