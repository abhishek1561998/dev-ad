import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ReplyIcon from "@mui/icons-material/Reply";

const Article = ({ posts }) => {
  const { id } = useParams();

  // Filter the posts data to find the article with the matching ID
  const article = posts.find((post) => post.id === parseInt(id));

  if (!article) {
    return <div>Loading...</div>; // Show a loading indicator or handle the case when the article is not found
  }

  return (
    <React.Fragment>
      <Grid container p={3}>
        <Grid item sm={12} pt={4} pb={4}>
          <Typography
            variant="span"
            sx={{ fontSize: "16px", fontWeight: 700, color: "orange" }}
            pb={2}
          >
            Latest Blog Post
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
                  AD
                </Avatar>
              }
              title={article.title}
              subheader={article.date}
            />
            {/* <CardMedia
              component="img"
              height="194"
              image={article.image}
              alt={article.title}
            /> */}
            <CardContent>
              <Typography variant="h6" color={{ color: "skyblue" }}>
                {article.title}
              </Typography>
              <br />
              <br />
              <Typography variant="body2" color="text.secondary">
                {article.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton
                aria-label="share"
                component={Link}
                to="https://www.linkedin.com/"
                target="_blank"
              >
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share" component={Link} to="/blog">
                <ReplyIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Article;
