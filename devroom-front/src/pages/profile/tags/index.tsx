import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  ListItemText,
  Modal,
  OutlinedInput,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import styles from "../profile.module.scss";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import EditorQuill from "../../../components/EditorQuillComponent/editorQuill";

type Tag = {
  id: number;
  name: string;
  description: string;
  status: number;
  datePublish: string;
  dateCreated: string;
};

const tags: Tag[] = [
  {
    id: 0,
    name: "C#",
    description: "test asdsadsa sdsaddsadsadasd dsdasd ddsadsadsadsad as dsdsadasdsa dsa dsadas dsad sa",
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
    name: "Full Cycle",
    description: "lalala",
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
    name: "React",
    description: "buiatchaka",
    status: 2,
    datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
    dateCreated: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
];

function Tags() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.tags}>
      <Box>
        <Typography variant="h2" component="div" fontWeight={"bolder"} mb={2}>
          Your Tags
        </Typography>
        <Button
          className="buttonCreatePost"
          variant="outlined"
          sx={{ mr: 1, mb: 3 }}
          color="success"
          onClick={handleOpen}
        >
          Create Tag
        </Button>

        <TagsList />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateEditTag />
        </Box>
      </Modal>
    </div>
  );
}

function ListItemTip(props: any) {
  const tag = props.tag;
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
              {tag.name}
            </Typography>

            <Typography variant="overline" color="text.secondary">
              {tag.description}
            </Typography>

            <Typography variant="caption" color="text.secondary" gutterBottom>
              Last edited on {tag.dateCreated}
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

function TagCard(props: any) {
  const tag = props.tag;

  return (
    <Card
      sx={{
        p: 1,
        maxWidth: "100%",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" fontWeight={"bolder"}>
          {tag.name}
        </Typography>
        <Typography noWrap variant="body2" color="text.secondary">
          {tag.description}
        </Typography>
      </CardContent>
      <CardActions>
          <Button variant="contained"  size="small">Edit</Button>
          <Button variant="outlined"  size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
function TagsList(props: any) {
  return (
    <Grid container spacing={3} rowSpacing={3}>
      {tags.map((tag: Tag) => (
        <Grid item sm={2}>
          <TagCard tag={tag} />
        </Grid>
      ))}
    </Grid>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function CreateEditTag(props: any) {
  const [tagValues, setTagValues] = useState<Tag>({
    id: 0,
    name: "",
    description: "",
    status: 1,
    dateCreated: Date(),
    datePublish: Date(),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTagValues({
      ...tagValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", mb: 2, boxShadow: "none" }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bolder"}
              sx={{ color: "black", textAlign: "center" }}
            >
              Create Tag
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              disableFocusRipple
              sx={{ mr: 1, textTransform: "none" }}
              color="success"
            >
              Publish
            </Button>
            <Button
              variant="contained"
              disableRipple
              sx={{ mr: 1, textTransform: "none", bgcolor: "#8e9297" }}
            >
              Draft
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ mr: 1, textTransform: "none" }}
              color="error"
            >
              Discard
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <TextField
        fullWidth
        label="name"
        name="name"
        value={tagValues.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="description"
        name="description"
        value={tagValues.description}
        onChange={handleChange}
      />
    </Box>
  );
}

export default Tags;
