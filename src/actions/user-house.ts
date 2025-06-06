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

        const result = await response.json();
        return { success: '¡We will contact you soon!!' };

    } catch (error) {
        return { success: 'Something went wrong!' };
    }
    // return { success: `Form dev: ${address}, ${phone}, success` }

}

export default UserHouseInfo