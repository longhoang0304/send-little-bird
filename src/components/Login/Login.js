import React, { useState, useCallback } from 'react';

const Login = ({ login }) => {
  const [username, setUserName] = useState("");
  const loginFn = useCallback(
    () => {
      login(username)
    },
    [username],
  );

  return (
    <div>
      <input
        name="username"
        type="text"
        value={username}
        onChange={e => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={loginFn}>Login</button>
    </div>
  )
};

export default Login;
