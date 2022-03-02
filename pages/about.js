import Footer from "../component/Footer";
import SectionHeader from "../component/SectionHeader";
import { Typography, Box, Stack } from "@mui/material";

export default function about() {
  return (
    <>
      <main
        style={{
          lineHeight: "1.6rem",
          padding: "16px",
        }}
      >
        <SectionHeader text={"the Active FM Story"} />

        <Box
          style={{
            height: "60vh",
            width: "100%",
            background: "black",
            margin: "32px auto",
          }}
        >
          <iframe
            src="https://activefm.co.za/promo.mp4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ height: "100%", width: "100%" }}
          ></iframe>
        </Box>

        <Stack
          sx={{
            margin: "16px 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#eee",
              fontWeight: "600",
              fontSize: "18px",
              marginBottom: "24px",
            }}
          >
            Who Are We?
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#eee",
              opacity: "0.8",
              fontSize: "16px",
            }}
          >
            Active FM is an international online podcasting radio station
            operating from the south of Johannesburg. <br />
            We release 5 shows a day - Mondays to Fridays. <br />
            We release 5 shows a day - Mondays to Fridays. We have all your
            favourite shows and the greatest variety of topics to match all your
            interests - from sports to trends, philosophy, astronomy, comedy,
            love, movies and so much more. <br />
            We talk about handling day to day obstacles, enjoying life, world
            events and its impact on us. <br />
          </Typography>
        </Stack>

        <Stack
          sx={{
            margin: "16px 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#eee",
              fontWeight: "600",
              fontSize: "18px",
              marginBottom: "24px",
            }}
          >
            Why Choose Active FM?
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#eee",
              opacity: "0.8",
            }}
          >
            Our presenters bring amusing fresh perspectives.
            <br />
            Active FM focuses on producing quality shows with unique content and
            lively radio DJ`s. Active FM is more than just a radio station -
            it`s a family. A community of people uniting to discuss the issues
            of life and share common interests / hobbies.
            <br />
            You are guaranteed to learn new life skills, feel great after
            listening to our shows and we`ll keep you updated.
            <br />
            Get the truth and stay connected. Become a part of the family today.
            <br />
          </Typography>
        </Stack>

        <Stack
          sx={{
            margin: "16px 0",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#eee",
              fontWeight: "600",
              fontSize: "18px",
              marginBottom: "16px",
            }}
          >
            Active FM Milestones / Achievements:
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#eee",
              opacity: "0.8",
            }}
          >
            <ul>
              <li>
                Active FM is in over 100 countries with a 50% increase in
                listenership annually.
              </li>
              <li>
                De Mode has ranked number 1 in the category “Fashion and Beauty”
                in Yemen and number 12 in category “Arts” in Yemen.
                Philosophically Poetic ranked in the top listened to shows on
                iTunes in Kenya.
              </li>
              <li>
                We have distinguished interviews with great artists and
                businessmen / women all over the world.
              </li>
              <li>
                <b>Link:</b> https://iono.fm/c/4178
              </li>
            </ul>

          </Typography>
        </Stack>
      <Footer />
      </main>
    </>
  );
}
