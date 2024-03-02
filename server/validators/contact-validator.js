
const { z } = require('zod')

const contactSchema = z.object({
    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 chars. " })
    .max(255, { message: "Name must not be more than 255 chars. " }),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 chars. " })
    .max(255, { message: "Email must not be more than 255 chars. " }),

    message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(20, { message: "Message must be at least of 20 chars. " })
    .max(1024, { message: "Message must not be more than 1024 chars. " })
})

module.exports = contactSchema