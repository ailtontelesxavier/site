"use server";

import { optIn } from "@/lib/newsletter";

import * as z from "zod";
 
const newsletterSchema = z.object({
  email: z.string().email("E-mail requerido."),
})

export async function signUpNewsletter(formData: FormData) {
  console.log("server action");
  const email = formData.get("email")?.toString();
  /*const newsletter = {
    email
  }

  console.log(newsletter);

  const data = newsletterSchema.safeParse(newsletter);
  
  console.log(data);
  if(data.success) {
    optIn(newsletter);
  }
  */
  const data = newsletterSchema.safeParse({email});
  
  if(data.success && email) {
    optIn(email);
  }


}
