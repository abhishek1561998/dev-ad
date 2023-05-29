import React from "react";
import "./index.css";
import { Box, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
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
              <motion.span
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 5,
                  delay: 0.3,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                Hello DevAD{" "}
              </motion.span>
              <span style={{ color: "#F59E0B" }}>Front-End Developer</span> and{" "}
              <motion.span
                style={{ color: "#8B5CF6" }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 5,
                  delay: 0.3,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                React JS
              </motion.span>
            </h1>
            <p>
              Hi, I am Abhishek Dandriyal I work professionally as a software
              engineer, developer, designer and coder. I have worked using many
              technology about which you'll be reading further. I am a
              work-a-holic person searching for many more opportunities to
              counter my way.
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
        <Grid item xs={12} sm={6}>
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
              transition: { duration: 5 },
            }}
            // whileHover={{ scale: [1, 0.5, 1], transition: { duration: 5 } }}
          >
            <img
              width={"100%"}
              src={process.env.PUBLIC_URL + "/Saly-13.png"}
              alt="profile-img"
            />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}
