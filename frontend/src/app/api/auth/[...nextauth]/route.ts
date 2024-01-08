import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const res = await axios.post("http://localhost:3333/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (res && res.data.status === 200) {
            console.log(res.data, "pukesss");
            return res.data;
          }
          return null;
        } catch (err: any) {
          throw new Error(err.response.data.error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log(user, "please");
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
