import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { MESSAGE_TYPE } from "../TypeDefs/Message";
import { UserType } from "../TypeDefs/User";



export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        userName: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { name, userName, password } = args;
        await Users.insert({ name, userName, password })
        return args;
    }
};

export const UPDATE_PASSWORD = {
    type: MESSAGE_TYPE,
    args: {
        userName: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { userName, oldPassword, newPassword } = args;
        const user = await Users.findOne({ userName })
        if (!user) {
            throw new Error("USERNAME DOESNT EXIST")
        }
        const userPassword = user?.password;
        if (oldPassword === userPassword) {
            await Users.update({ userName }, { password: newPassword });
            return { successsful: true, message: "UPDATE PASSWORD DONE" }

        } else {
            throw new Error("PASSWORDS DONT MATCH")
        }
    }
}
export const DELETE_USER = {
    type: MESSAGE_TYPE,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        await Users.delete(id);

        return { successful: true, message: "Delete done" }
    }
}