import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage";
import Profile from "./components/ProfilePage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
function App() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json", {})
      .then(function (response) {
        setUsers(response.data.users);
        // console.log(users, response.data.users);
        // console.log(response.data);
        dispatch({
          type: "ADD_USER",
          payload: response.data.users,
        });
      });
  }, []);
  return (
    <div className="App">
      <div>
        <Routes>
          {users.length > 0 && <Route path="/" exact element={<Home />} />}
          <Route path="/:id" exact element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
