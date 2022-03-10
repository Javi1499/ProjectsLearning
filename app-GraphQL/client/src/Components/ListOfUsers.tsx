import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutations";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      <li>
        {data &&
          data.getAllUsers.map((user: any) => (
            <ul key={`user-${user.id}`}>
              <div>{`${user.name}/${user.userName}`}</div>
              <button
                onClick={() => deleteUser({ variables: { id: user.id } })}
              >
                Delete User
              </button>
            </ul>
          ))}
      </li>
    </div>
  );
}

export default ListOfUsers;
