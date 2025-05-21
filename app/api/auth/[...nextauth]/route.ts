import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }  // <-- FIXED HERE
            },
            async authorize(credentials, req) {
                // Dummy user returned
                return {
                    username: "vikash",
                    id: "1",
                    email: "vvaibhaw6@gmail.com"
                };
            }
        })
    ]
});

export const GET = handler;
export const POST = handler;
