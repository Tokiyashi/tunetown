import MenuButton from "./MenuButton"
import React from "react"

const menuItems = {
  ["Меню"]: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Начать слушать вместе!",
      href: "/room",
    },
  ],
  ["Коллекции"]: [
    {
      label: "Мои Комнаты",
      href: "/my-rooms",
    },
    {
      label: "Плейлисты",
      href: "/playlists",
    },
  ],
  ["Общее"]: [
    {
      label: "Настройки",
      href: "/settings",
    },
  ],
}

const Buttons = () => {
  return (
    <div className="flex p-1 flex-col gap-4">
      {Object.entries(menuItems).map((item) => {
        const [menuTitle, menuButtons] = item
        return (
          <div className="flex flex-col gap-4" key={menuTitle}>
            <div>{menuTitle}</div>
            <div>
              {menuButtons.map((button) => (
                <MenuButton key={button.href} item={button} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Buttons
