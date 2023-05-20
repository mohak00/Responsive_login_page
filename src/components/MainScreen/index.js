import React, { useEffect, useState } from "react";
import ProfilePopup from "../ProfilePopup";
import { useParams } from "react-router-dom";
import ComingSoon from "../ComingSoon";

const MainScreen = ({
  selectedUser,
  setSelectedUser,
  openScreen,
  setOpenScreen,
}) => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div
      className="main-screen-area"
      onClick={() => (openProfile ? setOpenProfile(false) : "")}
    >
      {" "}
      <div className="right-bar">
        <div className="header">
          <h3>
            <b> Profile</b>
          </h3>
          <span onClick={() => setOpenProfile(true)}>
            <img src={selectedUser?.profilepicture} alt="" />{" "}
            {selectedUser?.name}
          </span>
          {openProfile && (
            <ProfilePopup
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          )}
        </div>
        <div className="main-div">
          {openScreen.profile ? (
            <div className="inner-main-div">
              <div className="left-main-div">
                <div className="upper-left-main-div">
                  <img src={selectedUser?.profilepicture} alt="" />
                  <span>{selectedUser?.name}</span>
                  <div>
                    Username : <span> {selectedUser?.username}</span>
                  </div>
                  <div>
                    Email : <span> {selectedUser?.email}</span>
                  </div>
                  <div>
                    Phone : <span> {selectedUser?.phone?.split(" ")[0]}</span>
                  </div>
                  <div>
                    Website : <span> {selectedUser?.website}</span>
                  </div>
                </div>
                <div className="lower-left-main-div">
                  <span>Company</span>
                  <div className="details">
                    Name: <span>{selectedUser?.company?.name}</span>
                  </div>
                  <div className="details">
                    Catch Phrase:{" "}
                    <span className="catchPhrase">
                      {selectedUser?.company?.catchPhrase}
                    </span>
                  </div>
                  <div className="details">
                    Bs:{" "}
                    <span className="catchPhrase">
                      {selectedUser?.company?.bs}
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-main-div">
                <p>Address</p>
                <div className="address">
                  <div>
                    Street : <span>{selectedUser?.address?.street}</span>
                  </div>
                  <div>
                    Suite : <span>{selectedUser?.address?.suite}</span>
                  </div>
                  <div>
                    City : <span>{selectedUser?.address?.city}</span>
                  </div>
                  <div>
                    Zip code : <span>{selectedUser?.address?.zipcode}</span>
                  </div>
                  <div className="maps-image">
                    <img src="/google_maps.jpg" alt="" />
                  </div>
                  <div className="location">
                    <div> lat:{selectedUser?.address?.geo?.lat} </div>
                    <div>
                      long:
                      {selectedUser?.address?.geo?.lng}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ComingSoon />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
