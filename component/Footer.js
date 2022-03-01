import { Typography, Stack } from "@mui/material";
import {
  Instagram,
  YouTube,
  Facebook,
  Spotify,
  Iono,
} from "@mui/icons-material";
export default function Footer() {
  function FooterItem({ field, value }) {
    return (
      <Typography
        variant="p"
        sx={{
          fontSize: "13px",
          fontWeight: "900",
        }}
      >
        {field} :
        <span
          style={{
            fontWeight: "400",
            marginLeft: "8px",
            opacity: "0.8",
            fontSize: "13px",
          }}
        >
          {value}
        </span>
      </Typography>
    );
  }
  return (
    <div
      style={{
        height: "30vh",
        paddingTop: "16px",
        paddingLeft: "16px",
        paddingRight: "16px",
        fontSize: "16px",
      }}
    >
      <div
        style={{
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50px 50px 0px 0px",
          padding: "32px",
          color: "#eee",
        }}
      >
        <Stack sx={{ marginBottom: "8px" }}>
          <FooterItem field={"Tel"} value={"08765432123"} />
        </Stack>
        <Stack sx={{ marginBottom: "8px" }}>
          <FooterItem field={"Email"} value={"activefm@activemi.co.za"} />
        </Stack>
        <Stack sx={{ marginBottom: "8px" }}>
          <FooterItem
            field={"Address"}
            value={"26A Loveday Street South Selby, Johannesburg South Africa"}
          />
        </Stack>
        <div
          style={{
            display: "flex",
            justifyContent:'space-evenly',
            alignItems:'center',
            width: "20%",
            height: "30px",
          }}
        >
          <Instagram />
          <YouTube />
          <Facebook />

          <img
            src="https://www.activefm.co.za/icons/spotify-logo.svg"
            alt=""
            width="20px"
            height="30px"
            style={{
              filter:'brightness(100%)'
            }}
          />
          <img
            src="https://www.activefm.co.za/icons/podcast.png"
            alt=""
            width="20px"
            height="30px"
             style={{
              filter:'brightness(100%)',
              objectFit:'contain'
            }}
          />
        </div>
        <div   style={{
            display: "flex",
            justifyContent:'space-evenly',
            alignItems:'flex-end',
            fontSize:'10px',
            height: "30px",
          }} >
        Copyright © 2022 Active FM. All rights reserved
        </div>
      </div>
    </div>
  );
}
