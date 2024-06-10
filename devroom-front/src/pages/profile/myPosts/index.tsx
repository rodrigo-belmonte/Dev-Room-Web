import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";

type Post = {
  id: number;
  title: string;
  tags: string[];
  status: number;
  datePublish: string;
  dateCreated: string;
};

const myPosts: Post[] = [
  {
    id: 0,
    title:
      "The No-Code Pandas Alternative That Data Scientists Have Been Waiting For",
    tags: ["Machine Learning", "IA"],
    status: 1,
    datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
    dateCreated: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
  {
    id: 1,
    title: "8 Reasons Why Forecasting Is Hard",
    tags: ["Artificial Intelligence", "Machine Learning"],
    status: 1,
    datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
    dateCreated: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
  {
    id: 2,
    title:
      "Test",
    tags: ["Artificial Intelligence", "Dev", "No-Code"],
    status: 2,
    datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
    dateCreated: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
];

function MyPosts() {
  const [tabValue, setTabValue] = useState("draft");
  const [displayDraft, setDisplayDraft] = useState("block");
  const [displayPublished, setDisplayPublished] = useState("none");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    if (newValue == "draft") {
      setDisplayDraft("block");
      setDisplayPublished("none");
    } else {
      setDisplayDraft("none");
      setDisplayPublished("block");
    }
  };

  return (
    <Grid>
      <Typography variant="h2" component="div" fontWeight={"bolder"} mb={2}>
        Your Posts
      </Typography>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab value="draft" label="Draft" />
        <Tab value="published" label="Published" />
      </Tabs>
      <Draft display={displayDraft} />
      <Published display={displayPublished} />
    </Grid>
  );
}

function ListItemPost(props: any) {
  return (
    <>
      <Grid container>
        <ListItem>
          <Grid item sm={6}>
            <Typography
              variant="h6"
              component="div"
              fontWeight={"bolder"}
              mb={2}
            >
              {props.post.title}
            </Typography>
            <Box>
              {props.post.tags.map((tag: string) => (
                <Typography variant="overline" color="text.secondary">
                  #{tag} &nbsp;
                </Typography>
              ))}
            </Box>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Last edited on {props.post.dateCreated}
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <ButtonGroup size="small">
              <Button key="edit">Edit</Button>
              <Button key="delete">Delete</Button>
            </ButtonGroup>
          </Grid>
        </ListItem>
      </Grid>
      <Divider />
    </>
  );
}

function Draft(props: any) {
  return (
    <Container disableGutters maxWidth="md" sx={{ml:0, display:props.display}} >
      <List component="nav" aria-label="mailbox folders">
        {myPosts
          .filter((post) => post.status == 1)
          .map((post: Post) => (
            <ListItemPost post={post} />
          ))}
      </List>
    </Container>
  );
}

function Published(props: any) {
  return (
    <Container disableGutters  maxWidth="md" sx={{ml:0, display:props.display}} >
      <List component="nav" aria-label="mailbox folders">
        {myPosts
          .filter((post) => post.status == 2)
          .map((post: Post) => (
            <ListItemPost post={post} />
          ))}
      </List>
    </Container>
  );
}

export default MyPosts;
