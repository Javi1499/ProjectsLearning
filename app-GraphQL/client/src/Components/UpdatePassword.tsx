import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutations";
import { useMutation } from "@apollo/client";
function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        onChange={(e) => setCurrentPassword(e.target.value)}
        placeholder="current password"
      />
      <input
        type="text"
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="password"
      />
      <button
        onClick={() =>
          updatePassword({
            variables: {
              userName: username,
              oldPassword: currentPassword,
              newPassword,
            },
          })
        }
      >
        Update password
      </button>
    </div>
  );
}

export default UpdatePassword;
