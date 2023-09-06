### Apollo Graphql Server with Express, MongoDB, Typegraphql and prisma 
1. prisma init with mongodb and typegraphql
2. migrate mongoose schema and model into prisma schema
3. generate prisma client and typegraphql schema
4. create graphql server with express and apollo server version 4




### cmd
1. `pnpm install`
2. start mongodb docker container
3. ```npx prisma db pull --force```   generate schema.prisma from mongodb model
4. ```npx prisma generate``` generate prisma client and typegraphql schema
5. ```pnpm run dev``` migrate prisma schema to mongodb