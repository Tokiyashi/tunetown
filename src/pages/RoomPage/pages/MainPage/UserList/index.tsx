import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import UserItem from "./UserItem"

const UserList = () => {
  const { room } = useSelector((state: RootState) => state.room)

  return (
    <div className="w-1/3 flex overflow-auto max-h-full flex-col gap-3">
      <h3>Сейчас слушают:</h3>
      {room?.usersOnline.map((user, index) => (
        <UserItem key={index} item={user} />
      ))}
    </div>
  )
}

export default UserList
