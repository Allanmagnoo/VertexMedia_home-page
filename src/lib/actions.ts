"use server";

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    message?: string[];
    _form?: string[];
  };
}

export async function sendContactRequest(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, company, message } = validatedFields.data;

  // Simulate sending an email
  console.log("New Contact Request:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Company:", company || "N/A");
  console.log("Message:", message);

  // In a real app, you would integrate with an email service here (e.g., SendGrid, Resend)
  // For example:
  // try {
  //   await sendEmail({ to: "sales@vertexmedia.com", subject: "New Contact Form Submission", html: `...` });
  //   return { success: true, message: "Your message has been sent successfully!" };
  // } catch (error) {
  //   console.error("Email sending error:", error);
  //   return { success: false, message: "Failed to send message. Please try again later." };
  // }

  return { success: true, message: "Your message has been sent successfully!" };
}
