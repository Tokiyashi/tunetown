'use client';
import React, { useState } from 'react';
import { wrapTextInput } from '@/utils/inputWrappers';
import axios from 'axios';
import { backendUrl } from '@/common/constants/url';
import { store } from '@/store';
import { setUser } from '@/store/slices/userSlice';
import {Button, Input, Link} from "@mui/material";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit() {
    const result = await axios.post(backendUrl + '/users/login', {
      email,
      password,
    });

    setEmail('');
    setPassword('');
    store.dispatch(setUser(result.data));
    navigate('/room');
  }

  return (
    <div className="h-full flex items-center gap-7 flex-col">
      <h1 className="text-4xl">Авторизация</h1>
      <form onSubmit={handleSubmit} className="w-1/3 flex gap-5 flex-col">
        <label className="text-xl">
          Адрес электронной почты
          <Input
            value={email}
            onChange={wrapTextInput(setEmail)}
            type="email"
          />
        </label>
        <label className="text-xl">
          Пароль
          <Input
            value={password}
            onChange={wrapTextInput(setPassword)}
            type="password"
          />
        </label>
        <Button onClick={handleSubmit}>Войти</Button>
        <Link href="../registration">Создать чела</Link>
      </form>
    </div>
  );
};

export default LoginPage
