import Image from "next/image"
import Typography from "@mui/material/Typography"

const img = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "15%",
  marginTop: "2vh",
}

const Header = () => {
  return (
    <div>
      <img
        style={img}
        src="https://epicreact.dev/static/c233779c8f663ee1edbd3b8293132b23/0ed73/five-stars%402x.webp"
      />
      <Image src={"/images/stars.png"} width={100} height={20} />
      <Typography variant="h1">
        Revealed: The Hidden System That Any Badminton Player Can Use To
        Skyrocket Their Progress
      </Typography>
    </div>
  )
}

export default Header
