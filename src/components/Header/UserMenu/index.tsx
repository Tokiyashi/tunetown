import React from "react"
import { Button, Link } from "@mui/material"
import { RootState, store } from "@/store"
import { setUser } from "@/store/slices/userSlice"
import { DEFAULT_USER } from "@/common/constants/defaultUser"
import { useSelector } from "react-redux"

const UserMenu = () => {
  const { currentUser } = useSelector((state: RootState) => state.user)
  console.log(currentUser)
  return (
    <>
      {currentUser._id ? (
        <div className="flex items-center gap-4">
          <h2>{currentUser.name}</h2>
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
