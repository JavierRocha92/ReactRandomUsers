import "./App.css";
import { useUsers } from "./hooks/useUsers.js";
import { Card } from "./components/Card.jsx";
import { useState } from "react";

function App() {
  const [fetchUsers, users] = useUsers();

  const [usernumber, setUsernumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usernumber != "") fetchUsers(usernumber);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setUsernumber(value);
  };

  return (
    <div className="d-flex flex-wrap p-5 justify-content-center">
      <div className=" w-25">
        <form className="d-flex justify-content-around" onSubmit={handleSubmit} action="">
          <input
            type="number"
            value={usernumber}
            onChange={handleChange}
            placeholder="Number Of users"
          />
          <button className="btn bg-primary text-light">Search</button>
        </form>
      </div>
      <div className="d-flex flex-wrap p-5 justify-content-center">
        {users &&
          users.map((user) => (
            <Card
              key={user.login.uuid}
              name={user.name.first}
              user={user.login.username}
              image={user.picture.large}
              age={user.dob.age}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
