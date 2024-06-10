import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Header from "../components/header";
import {
  Box,
  Card,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";


import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import "../styles/globals.scss";

const tags = [
  "Artificial Intelligence",
  "Dev",
  "No-Code",
  "Machine Learning",
  "IA",
];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [widthMainGrid, setwidthMainGrid] = useState(12);

  useEffect(() => {
    if (router.pathname.startsWith("/profile")) {
      setwidthMainGrid(12);
    } else if (router.pathname == "/tag") {
      setwidthMainGrid(10);
    } else if(router.pathname == "/login") {
      setwidthMainGrid(12);
    }
      else {
      setwidthMainGrid(7);
    }
  }, [router]);

  return (
    <div>
      <Header />
      <Box sx={{ px: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <LeftSideBox />
            <Grid item xs={widthMainGrid} sx={{ mt: 4 }} alignItems="center">
              <Component {...pageProps} />
            </Grid>
            <RightSideBox />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

function RightSideBox() {
  const router = useRouter();

  if (router.pathname.startsWith("/profile")) return null;
  if (router.pathname == "/tag") return null;
  if (router.pathname == "/login") return null;

  return (
    <Grid item xs={3} sx={{ mt: 4 }}>
      <TagBox />
      <TipsBox />
    </Grid>
  );
}

function LeftSideBox() {
  const router = useRouter();

  if (router.pathname.startsWith("/profile")) return null;
  if (router.pathname == "/login") return null;

  return (
    <Grid item xs={2} sx={{ mt: 4 }}>
      <Menu />
    </Grid>
  );
}

function TagBox() {
  return (
    <Box>
      <Typography variant="h5" color={"black"} sx={{ mb: 2 }}>
        Recomended Tags
      </Typography>

      {tags.map((tag: string) => (
        <Link href="/tag/tagName">
          <Chip sx={{ m: 1 }} label={tag} className="chip-tag" />
        </Link>
      ))}
    </Box>
  );
}

type Tip = {
  tag: string;
  text: string;
};

function TipsBox() {
  const tip: Tip = {
    tag: "Dev",
    text: "Não use PHP",
  };
  return (
    <Box sx={{ mt: 5 }}>
      <Card sx={{ p: 3, mb: 4, maxWidth: "100%" }}>
        <Typography variant="h4" component="div" fontWeight={"bolder"} mb={2}>
          Free Tips
        </Typography>
        <Typography variant="overline" component="div" mb={2}>
          #{tip.tag}
        </Typography>
        <Typography variant="body1">{tip.text}</Typography>
      </Card>
    </Box>
  );
}

function Menu() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };
  const goToTags = () => {
    router.push("/tag");
  };
  return (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={goToHome}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={goToTags}>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary="Tags" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
