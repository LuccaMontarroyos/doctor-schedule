import { customSessionClient } from "better-auth/plugins";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";
export const authClient = createAuthClient({
    plugins: [customSessionClient<typeof auth>()],
});