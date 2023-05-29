import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Blog({ posts }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <React.Fragment>
      <Grid container p={3}>
        <Grid item sm={12} pt={4} pb={4}>
          <Typography
            variant="span"
            sx={{ fontSize: "16px", fontWeight: 700, color: "orange" }}
            pb={2}
          >
            Blog
          </Typography>
          <Typography variant="h1" sx={{ fontSize: "25px", fontWeight: 700 }}>
            The latest about Dev AD
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} sm={4} key={post.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
                      AD
                    </Avatar>
                  }
                  title={post.title}
                  subheader={post.date}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={toggleFavorite}
                  >
                    {isFavorite ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon color="red" />
                    )}
                  </IconButton>
                  <IconButton
                    aria-label="share"
                    component={Link}
                    to="https://www.linkedin.com/"
                    target="_blank"
                  >
                    <ShareIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: "auto",
                      borderRadius: 8,
                      backgroundColor: "orange",
                    }}
                    component={Link}
                    to={`/blog/${post.id}`}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
