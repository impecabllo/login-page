import { Navigate, Route, Routes } from "react-router"

import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, RESET_ROUTE } from "@/routes"
import { MainLayout } from "@/layouts/MainLayout"

import Home from "../Home"
import Login from "../Login"
import Profile from "../Profile"
import ResetPassword from "../ResetPassword"

import { useState, type FC } from "react"

const App: FC = () => {
  const [isLogin, setLogin] = useState(false)

  const changeLoginState = (value: boolean) => {
    setLogin(value)
  }

  const logOut = () => {
    changeLoginState(false)
  }

  return (
    <Routes>
      <Route path="*" element={<Navigate to={HOME_ROUTE} />} />

      <Route element={<MainLayout isLogin={isLogin} logOut={logOut} />}>
        <Route path={HOME_ROUTE} element={<Home isLogin={isLogin} />} />
        <Route path={PROFILE_ROUTE} element={<Profile isLogin={isLogin} />} />
        <Route path={LOGIN_ROUTE} element={<Login isLogin={isLogin} changeLoginState={changeLoginState} />} />
        <Route path={RESET_ROUTE} element={<ResetPassword isLogin={isLogin} />} />
      </Route>
    </Routes>
  )
}

export default App
