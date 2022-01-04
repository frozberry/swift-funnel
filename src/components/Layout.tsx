import Container from "@mui/material/Container"

type BgProps = {
  color: string
}

export const ThinDiv: React.FC = ({ children }) => (
  <Container maxWidth={false} sx={{ maxWidth: "800px" }}>
    {children}
  </Container>
)

export const MediumDiv: React.FC = ({ children }) => (
  <Container maxWidth="md">{children}</Container>
)

export const Background: React.FC<BgProps> = ({ color, children }) => (
  <Container
    maxWidth={false}
    disableGutters
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: color,
      py: {
        xs: "20px",
        sm: "50px",
      },
    }}
  >
    {children}
  </Container>
)
