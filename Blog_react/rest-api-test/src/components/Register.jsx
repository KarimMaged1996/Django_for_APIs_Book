import React from 'react';
import axios from 'axios';

export default function Register() {
  let username, email, pass, confirm;

  function getUName(e) {
    username = e.target.value;
  }
  function getEmail(e) {
    email = e.target.value;
  }
  function getPass(e) {
    pass = e.target.value;
  }
  function getConf(e) {
    confirm = e.target.value;
  }

  function postToDjango(e) {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8000/api/dj-rest-auth/registration/', {
        username: username,
        email: email,
        password1: pass,
        password2: confirm,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form method="post" onSubmit={postToDjango}>
        <div>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={getUName}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={getEmail} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" onChange={getPass} />
        </div>

        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="text"
            id="confirm-password"
            name="confirm-password"
            onChange={getConf}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
