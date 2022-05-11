import {
  Box,
  Container,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import LoginForm from "../../components/forms/LoginForm"

export default function App() {
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading && <LinearProgress />}
      <Container maxWidth="xs">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2">Log in</Typography>
        </Box>

        <Divider sx={{ color: "text.secondary", mb: 2 }}>
          or continue with email
        </Divider>
        <LoginForm setLoading={setLoading} />

        <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
          <Link href="/forgot-password">Forgot password?</Link>
          {" · "}
          <Link href="/signup">Sign up for an account</Link>
        </Typography>
      </Container>
    </>
  )
}
