import React, { useState, useEffect } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/login")
      .then((data) => data.json())
      .then((res) => setUserList(res))
      .catch((err) => console.log("err : ", err));
  }, []);

  return (
    <div>
      <div>
        <h2 className="container">User List :</h2>
        <div
          className="container border shadow col-10 p-4 users table my-4"
          style={{ height: "100%" }}
        >
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">role</th>
              </tr>
            </thead>
            <tbody>
              {userList.length > 0
                ? userList.data?.map((ele, i) => (
                    <tr key={i + 1}>
                      <th scope="row">{i + 1}</th>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.role}</td>
                    </tr>
                  ))
                : "Loading..."}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
