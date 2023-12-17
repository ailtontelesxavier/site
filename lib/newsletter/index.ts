import { Newsletter } from "../types";
import prisma from "@/prisma/db";

export async function optIn(email: string) {
  console.log("optIn");
  try {
    const hasEmail = await prisma.newletter.findUnique({
      where: {
        email,
      },
    });
    if (!hasEmail) {
      const optIn = await prisma.newletter.create({
        data: {
          email,
        },
      });
    }
  } catch (error) {
    console.log("deu error");
    console.log(error);
  }
}

export async function optOut(Newsletter: Newsletter) {}
