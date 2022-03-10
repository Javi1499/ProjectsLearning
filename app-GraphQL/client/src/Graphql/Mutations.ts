import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation createUser($name:String!,$userName: String!, $password:String! ){
    createUser(name:$name, userName:$userName, password: $password){
        id
        name
        userName
    }
}
`
export const UPDATE_PASSWORD = gql`
mutation updatePassword($userName: String!, $oldPassword:String!, $newPassword:String! ){
    updatePassword(userName:$userName, oldPassword:$oldPassword, newPassword:$newPassword){
       message
    }
}
`

export const DELETE_USER = gql`
mutation deleteUser($id:ID!){
    deleteUser(id:$id){
       message
    }
}
`

