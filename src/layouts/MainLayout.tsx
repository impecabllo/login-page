import { Outlet } from "react-router"

import { Header } from "@/shared/Header"

import type { FC } from "react"

type Props = {
  isLogin: boolean
  logOut: () => void
}

export const MainLayout: FC<Props> = ({ isLogin, logOut }) => {
  return (
    <div>
      <Header isLogin={isLogin} logOut={logOut} />

      <Outlet />
    </div>
  )
}
