import * as z from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const SendInfoCustomerSchema = z.object({
    // --- CAMPO DE TELÉFONO MODIFICADO ---
    phone: z.string()
        .nonempty("Phone number required") // Primero, nos aseguramos que no esté vacío
        .regex(/^\d+$/, "Invalid phone")
        .length(10, "Phone number must be 10 digits long."),

    address: z.string().nonempty("Home address required"),

});
