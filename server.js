require("dotenv").config();
import {ApolloServer} from "apollo-server";
import schema from "./schema";

const PORT = process.env.PORT;
const server = new ApolloServer({
    schema,
    context: {
        token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjIzNTU1OTI5fQ.xkCLb66oj4mEz8JWDnO2jgX-G5BfVqduYAZet2PxvGM",
    },
});

server
    .listen(PORT)
    .then(() =>
        console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
    );