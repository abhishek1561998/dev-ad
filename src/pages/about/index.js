import React from "react";
import "./index.css";
import { Box, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            alignItems: "center",
            display: "flex",
            p: {
              xs: 1,
              sm: 10,
            },
          }}
        >
          <Box>
            <h1 sx={{ color: "inherit" }}>
              About <span style={{ color: "#F59E0B" }}>Dev AD</span>{" "}
            </h1>
            <p className="about-content">
              Hello there, I'm Abhishek Dandriyal, a passionate Front-End
              Developer specializing in React JS. I excel as a software
              engineer, developer, designer, and coder, delivering top-notch
              solutions for various projects.
              <br />
              <br />
              With a solid foundation in technologies such as HTML, CSS, and
              JavaScript, I have mastered the art of crafting immersive user
              experiences. React JS and React Native are my go-to frameworks for
              building dynamic and responsive web and mobile applications.
              <br />
              <br />
              In addition to my expertise in development, I possess extra skills
              in UI/UX design, leveraging tools like Photoshop, Adobe XD, Figma,
              and WordPress. This allows me to create visually stunning
              interfaces that seamlessly blend aesthetics and functionality.{" "}
              <br />
              <br />
              One of my greatest strengths lies in my ability to start from
              scratch and transform ideas into tangible realities. I take great
              joy in breathing life into concepts and bringing them to fruition
              within the browser.
              <br /> <br />
              As a dedicated professional, I am continuously seeking new
              opportunities to expand my horizons and tackle exciting
              challenges. I am a true workaholic, always striving for excellence
              and eager to explore countless possibilities in the ever-evolving
              world of technology.
              <br />
              <br />
              <br /> Let's connect and collaborate to turn your vision into a
              remarkable reality!
            </p>
            <Button
              className="btn-connected"
              disableElevation
              endIcon={<ArrowForwardIcon />}
              target="_blank"
              href="https://in.linkedin.com/in/abhishek-dandriyal-a73085170?original_referer=https%3A%2F%2Fwww.google.com%2F"
            >
              Get Connected
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <motion.div
            animate={{
              scale: [1, 1.2, 0.8, 1.1, 1],
              transition: { duration: 5 },
            }}
            whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.8 }}
          >
            <img
              width={"100%"}
              src={process.env.PUBLIC_URL + "/about-devad.png"}
              alt="profile-img"
            />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
