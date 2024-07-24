// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//     }),
//   ],
// });

// export { handler as GET, handler as POST };

import { authOption } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import getServerSession from "next-auth";
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";
// import * as schema from "@/db/schema";

// const sql = neon(process.env.DATABASE_URL as string);
// const db = drizzle(sql, { schema });

// const handler = NextAuth({
//   adapter: DrizzleAdapter(db),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
