import { Container, Typography } from "@mui/material"

import type { FC } from "react"

type Props = {
  isLogin: boolean
}

const Home: FC<Props> = ({ isLogin }) => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography>Главная страница сайта</Typography>
      <Typography mt={2}>{isLogin ? "Вы авторизованы" : "Вы не авторизованы"}</Typography>
    </Container>
  )
}

export default Home
