import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check the credentials against stored user data
        const user = await checkCredentials(
          credentials.email,
          credentials.password
        );
        if (user) {
          return {
            email: user.email,
            image: user.password,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session(session, token) {
      session.user = token.user;
      return session;
    },
  },
});

async function checkCredentials(email, password) {
  //by email can fetch the user in the db
  return {
    password: password,
    email: email,
  };
}
