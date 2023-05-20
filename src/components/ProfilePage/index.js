import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles.css";
import MainScreen from "../MainScreen";

const Profile = () => {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState();
  const [openScreen, setOpenScreen] = useState({
    profile: true,
    post: false,
    gallery: false,
    todo: false,
  });

  const arrowPointer = () => {
    return (
      <div
        style={{
          background: "white",
          width: "30px",
          // height: "20px",
          color: "black",
          borderRadius: "12rem 0 0 12rem",
          right: -24,
          position: "absolute",
        }}
      >
        {">"}
      </div>
    );
  };

  const users = useSelector((state) => state);
  useEffect(() => {
    EffectHandler();
  }, [users, id]);

  const EffectHandler = async () => {
    const main_user =
      users?.usersList?.length > 0 &&
      (await users?.usersList?.find((item) => item.id == id));
    setSelectedUser(main_user);
  };
  return (
    <div className="main-outer">
      <div className="side-bar">
        <div className="list">
          <p
            onClick={() =>
              setOpenScreen({
                post: false,
                gallery: false,
                todo: false,
                profile: true,
              })
            }
            style={{ color: openScreen.profile ? "" : "#898DDC" }}
          >
            Profile {openScreen.profile ? arrowPointer() : ""}
          </p>
          <p
            onClick={() =>
              setOpenScreen({
                post: true,
                gallery: false,
                todo: false,
                profile: false,
              })
            }
            style={{ color: openScreen.post ? "" : "#898DDC" }}
          >
            Post {openScreen.post ? arrowPointer() : ""}
          </p>
          <p
            onClick={() =>
              setOpenScreen({
                post: false,
                gallery: true,
                todo: false,
                profile: false,
              })
            }
            style={{ color: openScreen.gallery ? "" : "#898DDC" }}
          >
            Gallery {openScreen.gallery ? arrowPointer() : ""}
          </p>
          <p
            onClick={() =>
              setOpenScreen({
                post: false,
                gallery: false,
                todo: true,
                profile: false,
              })
            }
            style={{ color: openScreen.todo ? "" : "#898DDC" }}
          >
            Todo {openScreen.todo ? arrowPointer() : ""}
          </p>
        </div>
      </div>

      <MainScreen
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        openScreen={openScreen}
        setOpenScreen={setOpenScreen}
      />
    </div>
  );
};

export default Profile;
