import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const users = [
    {
      id: "u1",
      name: "Mayur Shivakumar",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/dwayne-johnson-attends-the-warner-bros-black-adam-photo-news-photo-1690379141.jpg?crop=1xw:0.84364xh;center,top",
      placeCount: 16,
    }
  ];

  return <UsersList items={users} />;
}

export default Users;
