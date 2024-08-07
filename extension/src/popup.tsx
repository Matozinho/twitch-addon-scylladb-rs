import "~style.css"

import { ThemeProvider } from "@Components/app/theme-provide"
import { Auth } from "@Pages/auth"
import Profile from "@Pages/profile"
import { useEffect, useState } from "react"

import type { TwitchUser } from "~types/types"

function IndexPopup() {
  let [user, setUser] = useState(null)

  async function getUser() {
    return browser.storage.local.get("user")
  }

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.user as TwitchUser)
    })
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-w-[350px]">
        {user ? <Profile user={user} /> : <Auth />}
      </div>
    </ThemeProvider>
  )
}

export default IndexPopup
