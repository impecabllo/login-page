import { useForm, SubmitHandler } from "react-hook-form"
import { Link, Navigate } from "react-router"

import { PROFILE_ROUTE, RESET_ROUTE } from "@/routes"

import { useState, type FC } from "react"
import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material"

type Props = {
  isLogin: boolean
  changeLoginState: (isLogin: boolean) => void
}

type FormInput = {
  username: string
  password: string
}

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "admin"

const Login: FC<Props> = ({ isLogin, changeLoginState }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>()

  const [isLoginError, setLoginError] = useState<boolean>(false)

  const onSubmit: SubmitHandler<FormInput> = data => {
    if (data.username === ADMIN_USERNAME && data.password === ADMIN_PASSWORD) {
      changeLoginState(true)

      return
    }

    setLoginError(true)

    setTimeout(() => {
      setLoginError(false)
    }, 2000)
  }

  if (isLogin) {
    return <Navigate to={PROFILE_ROUTE} />
  }

  return (
    <Container maxWidth="xs">
      <Paper sx={{ marginTop: 4, padding: 2 }} elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack rowGap={2}>
            <Typography variant="h5">Вход в аккаунт</Typography>
            <TextField
              {...register("username", {
                required: true,
              })}
              fullWidth
              error={!!errors.username}
              size="small"
              label="Логин"
              placeholder="Логин"
            />
            <TextField
              {...register("password", {
                required: true,
              })}
              fullWidth
              error={!!errors.password}
              size="small"
              label="Пароль"
              placeholder="Пароль"
              type="password"
            />
            <Button variant="contained" type="submit">
              Войти
            </Button>
            <Typography>
              Не помните пароль? <Link to={RESET_ROUTE}>Сброс пароля</Link>
            </Typography>
            {isLoginError && <Typography color="error">Данные не верные!</Typography>}
            {errors.username && <Typography color="error">Поле Логин обязательно</Typography>}
            {errors.password && <Typography color="error">Поле Пароль обязательно</Typography>}
            <Typography>Данные для входа: admin/admin</Typography>
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}

export default Login
