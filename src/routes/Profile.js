import React from "react";
import { auth } from "fbase";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};
export default Profile;
