"use server"

import bcrypt, { hash } from "bcrypt";
import * as z from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";

import { revalidatePath, revalidateTag } from "next/cache";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email); 

    if (existingUser) {
        return { error: "Email already in use!" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    // TODO: send verification token email

    return { success: "User Created!" };
};