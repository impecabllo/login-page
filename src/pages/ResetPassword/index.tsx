import { useForm, SubmitHandler } from "react-hook-form"
import { Navigate } from "react-router"

import { PROFILE_ROUTE } from "@/routes"

import { useState, type FC } from "react"
import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material"

type Props = {
  isLogin: boolean
}

type FormInput = {
  username: string
}

const ResetPassword: FC<Props> = ({ isLogin }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInput>()

  const [successUsername, setSuccessUsername] = useState<string | null>(null)

  const onSubmit: SubmitHandler<FormInput> = data => {
    reset()

    setSuccessUsername(data.username)

    setTimeout(() => {
      setSuccessUsername(null)
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
            <Typography variant="h5">Восстановление пароля</Typography>
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
            <Button variant="contained" type="submit">
              Сброс
            </Button>
            {successUsername && (
              <Typography color="success">
                Письмо для восстановления пароля отправлено на почту {successUsername}
              </Typography>
            )}
            {errors.username && <Typography color="error">Поле Логин обязательно</Typography>}
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}

export default ResetPassword
