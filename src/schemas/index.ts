import * as z from "zod";

export const SendInfoCustomerSchema = z.object({
    // --- CAMPO DE TELÉFONO MODIFICADO ---
    phone: z.string()
        .nonempty("Phone number required")// Primero, nos aseguramos que no esté vacío
        .length(12, "A valid phone number is required."),
    address: z.string().nonempty("Home address required"),

});
