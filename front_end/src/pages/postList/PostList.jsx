import React, { useState } from "react";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./postList.css";

const PostList = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="postList">
      <div className="productHeader">
        <h4 className="chartTitle">Recent Posts</h4>
        <Link to="/newpost">
          <button className="productAddButton">New</button>
        </Link>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>Post Goes Here</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default PostList;
