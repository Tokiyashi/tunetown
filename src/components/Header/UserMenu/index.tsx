import React from "react"
import { Button, Link, Typography, Switch, styled } from "@mui/material"
import { RootState, store } from "@/store"
import { setUser } from "@/store/slices/userSlice"
import { DEFAULT_USER } from "@/common/constants/defaultUser"
import { useSelector } from "react-redux"
import { ChangeMode } from "@/utils/modeActions/ChangeMode"
import { ThemeSwitch } from "@/components/ThemeSwitch"

const UserMenu = () => {
  const { currentUser } = useSelector((state: RootState) => state.user)

  return (
    <>
      {currentUser._id ? (
        <div className="flex items-center gap-4">
          <ThemeSwitch defaultChecked onChange={() => ChangeMode()}></ThemeSwitch>
          <Typography component="h2">{currentUser.name}</Typography>
          <Button onClick={() => store.dispatch(setUser(DEFAULT_USER))}>
            Выйти
          </Button>
        </div>
      ) : (
        <Link href="/login">Войти</Link>
      )}
    </>
  )
}

export default UserMenu
