const express = require ('express')
const {ApolloServer, gql}=require('apollo-server-express')
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')
const mongoose= require ('mongoose')
const cors = require('cors');

async function startServer() {
    const app = express();
    app.use(cors());}
async function startServer() {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app: app, path:'/SingleEndPoint'})
    app.use((req,res) => {
        res.send("EXPRESS AND APOLLO HAVE SHOOK HANDS!!")
    })
    await mongoose.connect('mongodb://localhost:27017/GraphQL', {
        useUnifiedTopology :true,
        useNewUrlParser : true
    })
console.log('MONGOOSE CONNECTED -> GraphQL')
    app.listen(4000, ()=> console.log('*SERVER ON PORT 4000*'))
}
startServer();