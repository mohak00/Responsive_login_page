import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProfilePopup = ({ setSelectedUser, selectedUser }) => {
  const [users, setUsers] = useState([]);
  const all_users = useSelector((state) => state);
  useEffect(() => {
    console.log(all_users.usersList, "demo");
    let index = all_users.usersList.findIndex(
      (obj) => obj.id === selectedUser.id
    );
    if (index !== -1) {
      all_users.usersList.splice(index, 1);
    }
    console.log(all_users.usersList, "demo");

    setUsers(all_users.usersList);
  }, [users]);

  return (
    <div className="main-screen">
      <div className="inner-screen">
        <div className="card-popup">
          <img
            src={selectedUser.profilepicture}
            className="popup-image"
            alt=""
          />
          <p>{selectedUser.name}</p>
          <p className="email">{selectedUser.email}</p>

          {users?.map((item, index) => {
            return (
              <div
                className="users-list"
                onClick={() => setSelectedUser(users[index])}
              >
                <img src={item.profilepicture} alt="user-icon" />
                <p>{item.name}</p>
              </div>
            );
          })}
          <Link to="/">
            <button className="sign-out">Sign Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
