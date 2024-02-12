import React, { useState } from "react"
import { wrapTextInput } from "@/utils/inputWrappers"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"
import { store } from "@/store"
import { setUser } from "@/store/slices/userSlice"
import { Link, useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material"

const RegistrationPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigation = useNavigate()

  async function handleSubmit() {
    const result = await axios.post(backendUrl + "/users", {
      name,
      email,
      password,
    })

    setEmail("")
    setPassword("")
    store.dispatch(setUser(result.data))
    navigation("/room")
  }

  return (
    <div className="h-full flex items-center gap-7 flex-col">
      <h1 className="text-4xl">Авторизация</h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/3 bg-card-bg rounded-2xl p-4 flex gap-5 flex-col"
      >
        <label className="text-xl flex flex-col">
          Имя
          <TextField
            value={name}
            onChange={wrapTextInput(setName)}
            type="email"
          />
        </label>
        <label className="text-xl flex flex-col">
          Адрес электронной почты
          <TextField
            value={email}
            onChange={wrapTextInput(setEmail)}
            type="email"
          />
        </label>
        <label className="text-xl flex flex-col">
          Пароль
          <TextField
            value={password}
            onChange={wrapTextInput(setPassword)}
            type="password"
          />
        </label>
        <Button variant="contained" onClick={handleSubmit}>
          Создать пользователя
        </Button>
        <div className="flex gap-4">
          Уже есть аккаунт?<Link to="/login">Войти</Link>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage
