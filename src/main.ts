import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import { connect } from './utils/db'
import { router as routes } from './routes'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../node_modules/@generated/type-graphql'
import { PrismaClient } from '@prisma/client'

interface MyContext {
    token?: String;
    prisma: PrismaClient;

}

const prisma = new PrismaClient()

const bootstrap = async () => {
    const app = express()
    const httpServer = http.createServer(app);
    const schema = await buildSchema({
        resolvers: resolvers
    })
    const server = new ApolloServer<MyContext>({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })

    connect()

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    await server.start()
    app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server, { context: async ({ req }) => ({ token: req.headers.authorization, prisma }) }))

    const port = process.env.PORT || 3000
    await new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve)).then(
        () => {
            if (process.env.NODE_ENV !== 'production') {
                console.log(`🚀 Server ready at http://localhost:${port}/graphql`); // eslint-disable-line no-console
                console.log(`⭐️ See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`); // eslint-disable-line no-console


            } else {
                console.log(`🚀 Server ready at http://localhost:${port}/graphql`); // eslint-disable-line no-console
            }
        }
    );

}
bootstrap()