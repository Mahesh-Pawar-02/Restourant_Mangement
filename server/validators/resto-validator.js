
const { z } = require('zod')

const hotelSchema = z.object({
    id: z,

    name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 chars. " })
    .max(255, { message: "Name must not be more than 255 chars. " }),

    address: z
    .string({ required_error: "address is required" })
    .trim(),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 chars. " })
    .max(255, { message: "Email must not be more than 255 chars. " }),

    services: z
    .string({ required_error: "services is required" }),

    mobile: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, { message: "Message must be at least of 10 chars. " })
    .max(10, { message: "Message must not be more than 10 chars. " })
})

module.exports = hotelSchema