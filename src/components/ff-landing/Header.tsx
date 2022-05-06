import Image from "next/image"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "15%",
          marginTop: "2vh",
        }}
      >
        <Image
          src={"/images/stars.png"}
          width={290}
          height={46}
          alt="5 stars"
          layout="responsive"
        />
      </Box>
      <Typography
        variant="h1"
        sx={{
          mb: "30px",
          fontSize: {
            xs: "1.5rem",
            sm: "2.5rem",
          },
        }}
      >
        Revealed: The Hidden System That Any Badminton Player Can Use To
        Skyrocket Their Progress
      </Typography>
    </Box>
  )
}

export default Header
