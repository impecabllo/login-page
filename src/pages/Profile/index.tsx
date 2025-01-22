import { Container, Typography } from "@mui/material"
import { Navigate } from "react-router-dom"

import { HOME_ROUTE } from "@/routes"

import type { FC } from "react"

type Props = {
  isLogin: boolean
}

const Profile: FC<Props> = ({ isLogin }) => {
  if (!isLogin) {
    return <Navigate to={HOME_ROUTE} />
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography>Мой профиль</Typography>
    </Container>
  )
}

export default Profile
