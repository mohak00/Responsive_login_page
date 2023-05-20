import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [users, setUsers] = useState([]);
  const all_users = useSelector((state) => state);
  useEffect(() => {
    setUsers(all_users.usersList);
  }, [users]);

  const linkStyle = { textDecoration: "none", color: "grey" };
  return (
    <div className="main">
      <div>
        <img
          src="/wave.png"
          alt="iwave"
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            bottom: -1,
            // zIndex: -1,
          }}
        />
      </div>
      <div className="card">
        {users.length > 0 ? (
          <div className="card-headinng">
            <div div className="heading">
              select the account
            </div>
            {users?.map((item, index) => {
              return (
                <Link to={`${item.id}`} style={linkStyle}>
                  <div className="users-list">
                    <img src={item.profilepicture} alt="user-icon" />
                    <p>{item.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          "Please wait while we are fetching the users"
        )}
      </div>
    </div>
  );
};

export default Home;
