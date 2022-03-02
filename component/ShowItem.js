import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function ShowItem({ img, description, title, link }) {
  return (
    <Link href={link}>
      <a target="_blank">
        <Paper
          elevation={0}
          sx={{
            background: "rgba(0, 0, 0, 0.1)",
            width: "200px",
            height: "250px",
            padding: "8px",
            marginRight: "5px",
            marginTop: "24px",
            marginBottom: "24px",
            "&:hover":{
            background: "rgba(0, 0, 0, 0.5)",
            }
          }}
        >
          <div
            style={{
              height: "60%",
              width: "100%",
              backgroundImage: `url("https://www.activefm.co.za/shows/${img}")`,
              backgroundSize: "cover",
            }}
          ></div>
          <Typography
            variant="h5"
            sx={{
              color: "#ddd",
              fontSize: "14px",
              fontWeight: "900",
              // background:'pink',
              height: "16%",
              display: "flex",
              alignItems: "center",
            }}
          >
            {title}
          </Typography>
          <Typography
            noWrap
            sx={{
              color: "#fff",
              opacity: "0.5",
              fontSize: "13px",
            }}
          >
            {description}
          </Typography>
        </Paper>
      </a>
    </Link>
  );
}
