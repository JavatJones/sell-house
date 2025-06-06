"use server"

import * as z from "zod";
import { SendInfoCustomerSchema } from "@/schemas/index"

const UserHouseInfo = async (values: z.infer<typeof SendInfoCustomerSchema>) => {

    const validatedFields = SendInfoCustomerSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Something went wrong!" }
    }

    const { name, email, address, phone } = validatedFields.data;

    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    if (!zapierWebhookUrl) {
        console.error('Error Zapier.');
        return { error: "Something went wrong!" };
    }


    try {
        const response = await fetch(zapierWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                address,
                phone,
                lead_from: "WEBSITE_LEADS"
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Datos enviados a Zapier:', result);

        return { success: '¡Datos enviados correctamente!' };

    } catch (error) {
        console.error('No se pudo enviar los datos a Zapier:', error);
        return { success: 'No se pudieron enviar los datos.' };
    }
    return { success: `Saved info: ${name}, ${email}, ${address}, ${phone}` }

}

export default UserHouseInfo