import './Users.css';
import {getUsers} from "../../api/usersAPI";
import React from "react";
import ReactDOM from "react-dom";

function Users() {
  return (
      <div id="userContainer">
          <section>
              <h1>Users registered on the Website</h1>
              <table className="table" id="usersTable">
                  <thead>
                  <tr>
                      <th scope="col">Thumbnail</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone number</th>
                      <th scope="col">Country</th>
                  </tr>
                  </thead>
                    <tbody id="tableInfo">
                  </tbody>
              </table>
              <div className="userInput">
                  <label>
                      <input type="number" placeholder="users amount" id="totalUsers" min="0" required/>
                  </label>
                  <button id="btnUser" onClick={fillUsers}>Get users</button>
              </div>
              <div className="clear"/>
          </section>
      </div>
  );
}

async function fillUsers() {
    const usersAmount = document.getElementById('totalUsers').value;
    const response = await getUsers(usersAmount);
    if(response.results) {
        ReactDOM.render(addUsersToTable(response.results), document.getElementById('tableInfo'));
    } else {
        const errorMessage = React.createElement('h1', {className: "alert alert-danger"}, "There was an error, try later");
        ReactDOM.render(errorMessage, document.getElementById('userContainer'));
    }
}

function addUsersToTable(data) {
    return data.map(userInfo => {
        return (<UserRow user={userInfo} />)
    });
}

function UserRow(props) {
    return (
        <tr key={props.user.id.name}>
            <UserCell img={props.user.picture.thumbnail} alt="missing"/>
            <UserCell value={props.user.name.first + props.user.name.last} />
            <UserCell value={props.user.email} />
            <UserCell value={props.user.phone} />
            <UserCell value={props.user.location.country} />
        </tr>
    )
}

function UserCell(props) {
    if(props.img) {
        return (
            <td><img src={props.img} alt={props.alt}  className="img-thumbnail"/></td>
        )
    } else {
        return <td>{props.value}</td>
    }
}

export default Users;
