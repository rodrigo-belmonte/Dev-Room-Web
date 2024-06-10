import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./post.module.scss";
import { Chip } from "@mui/material";
import Link from "next/link";

function Post(props: any) {
  return (
    <Card sx={{ p: 3, mb: 4, maxWidth: "100%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.post.datePublish}
        </Typography>
        <Link href="/article">
          <Typography gutterBottom variant="h5" component="div">
            {props.post.title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {props.post.subTitle}
        </Typography>
      </CardContent>
      <CardActions>
        {props.post.tags.map((tag: string) => (
          <Link href="/tag/tagName">
            <Chip sx={{ m: 1 }} label={tag} className="chip-tag" />
          </Link>
        ))}
      </CardActions>
    </Card>
  );
}

export default Post;
