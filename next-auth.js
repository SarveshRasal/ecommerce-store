import NextAuth from "next-auth";
import {  MongoDBAdapter } from '@next-auth/mongodb-adapter'

export default NextAuth({
    providers: [],
    session: {
        jwt: true,
    },
    callbacks: {
        async signIn(user, account, profile) {
            return '/store'
        },
    },
    adapter: MongoDBAdapter(process.env.MONGODB_URI)
})