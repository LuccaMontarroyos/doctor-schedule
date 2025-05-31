export const POST = async (request: Request) => {
    if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("Stripe secret key not found");
    }
}