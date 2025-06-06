import * as z from "zod";

export const SendInfoCustomerSchema = z.object({
    // --- CAMPO DE TELÉFONO MODIFICADO ---
    phone: z.string()
        .nonempty("Phone number required") // Primero, nos aseguramos que no esté vacío
        .regex(/^\d+$/, "Invalid phone")
        .length(10, "Phone number must be 10 digits long."),

    address: z.string().nonempty("Home address required"),

});
