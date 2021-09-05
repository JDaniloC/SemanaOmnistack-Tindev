import React, { useState } from 'react';
import api from 'services/api';
import './styles.css';

import logo from 'assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [inputClass, setInputClass] = useState("");
  
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await api.post(
        '/devs/', { username });
      
      history.push({
        pathname: `/main/${data._id}`,
        state: { 
          avatar: data.avatar,
          username: data.user
        }
      });
    } catch (err) {
      setInputClass("error-input");
    }
  }

  function handleChangeUsername(event) {
    setUsername(event.target.value)
  }

  function setDefaultInputClass() {
    setInputClass("");
  }

  return (
    <div className="login-container">
        <form onSubmit = {handleSubmit}>
          <img src = {logo} alt = "TinDev" />
          <input 
            type="text" 
            placeholder = "Digite seu usuário no Github"
            className = {inputClass}
            onChange = {handleChangeUsername}
            onAnimationEnd = {setDefaultInputClass}
          />
          <button type = "submit"> Enviar </button>
        </form>
    </div>
  );
}
