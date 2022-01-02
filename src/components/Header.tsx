import Image from "next/image"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Header = () => {
  return (
    <div>
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
      <Typography variant="h1">
        Revealed: The Hidden System That Any Badminton Player Can Use To
        Skyrocket Their Progress
      </Typography>
    </div>
  )
}

export default Header
