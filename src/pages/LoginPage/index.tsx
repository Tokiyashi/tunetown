import React, { useState } from "react"
import { wrapTextInput } from "@/utils/inputWrappers"
import axios from "axios"
import { backendUrl } from "@/common/constants/url"
import { store } from "@/store"
import { setUser } from "@/store/slices/userSlice"
import { Button, Link, TextField } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"

const LoginPage = () => {
  const { from } = useParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSubmit() {
    const result = await axios.post(backendUrl + "/users/login", {
      email,
      password,
    })

    setEmail("")
    setPassword("")
    store.dispatch(setUser(result.data))
    navigate(`/room/${from || ""}`)
  }

  return (
    <div className="h-full flex items-center gap-7 flex-col">
      <h1 className="text-4xl">Авторизация</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/3 bg-card-bg p-5 rounded-2xl flex gap-5 flex-col"
      >
        <label className="text-xl flex flex-col">
          Адрес электронной почты
          <TextField
            sx={{ input: { color: "white" } }}
            color="primary"
            variant="outlined"
            value={email}
            onChange={wrapTextInput(setEmail)}
            type="email"
          />
        </label>
        <label className="text-xl flex flex-col">
          Пароль
          <TextField
            sx={{ input: { color: "white" } }}
            color="primary"
            variant="outlined"
            value={password}
            onChange={wrapTextInput(setPassword)}
            type="password"
          />
        </label>
        <Button variant="contained" onClick={handleSubmit}>
          Войти
        </Button>
        <Link href="../registration">Создать пользователя</Link>
      </form>
    </div>
  )
}

export default LoginPage
