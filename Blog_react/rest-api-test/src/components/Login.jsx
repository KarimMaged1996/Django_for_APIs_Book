import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let username, email, pass;
  let navigate = useNavigate();
  function getUName(e) {
    username = e.target.value;
  }
  function getEmail(e) {
    email = e.target.value;
  }
  function getPass(e) {
    pass = e.target.value;
  }
  function postToDjango(e) {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8000/api/dj-rest-auth/login/', {
        username: username,
        email: email,
        password: pass,
      })
      .then((response) => {
        console.log(response.data.key);
        document.cookie = `token=${response.data.key}`;
        navigate('/home');
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

        <input type="submit" />
      </form>
    </div>
  );
}
