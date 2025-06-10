"use server"

import * as z from "zod";
import { SendInfoCustomerSchema } from "@/schemas/index"

const UserHouseInfo = async (values: z.infer<typeof SendInfoCustomerSchema>) => {

    const validatedFields = SendInfoCustomerSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Something went wrong!" }
    }

    const { address, phone } = validatedFields.data;

    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    if (!zapierWebhookUrl) {
        return { error: "Something went wrong!" };
    }


    try {
        const response = await fetch(zapierWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({       
                address,
                phone,
                lead_from: "WEBSITE_LEADS"
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        await response.json();
        return { success: 'Thank you, we will contact you soon!' };

    } catch (error) {
        console.error('No se pudo enviar los datos a Zapier:', error);
        return { success: 'No se pudieron enviar los datos.' };
    }
    // return { success: `Form dev: ${address}, ${phone}, success` }

}

export default UserHouseInfo