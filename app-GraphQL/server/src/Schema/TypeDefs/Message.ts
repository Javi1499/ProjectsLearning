import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";



export const MESSAGE_TYPE = new GraphQLObjectType({
    name: "Message",
    fields: () => ({
        successful: { type: GraphQLBoolean },
        message: { type: GraphQLString }
    })
}) 