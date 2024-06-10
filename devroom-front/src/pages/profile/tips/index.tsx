import {
    AppBar,
  Autocomplete,
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
  Modal,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "../profile.module.scss";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import EditorQuill from "../../../components/EditorQuillComponent/editorQuill";

type Tip = {
  id: number;
  tags: string[];
  text: string;
  status: number;
  datePublish: string;
  dateCreated: string;
};

const tips: Tip[] = [
  {
    id: 0,
    text: "The No-Code Pandas Alternative That Data Scientists Have Been Waiting For",
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
    text: "8 Reasons Why Forecasting Is Hard",
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
    text: "Test",
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

function Tips() {
  const [tabValue, setTabValue] = useState("draft");
  const [displayDraft, setDisplayDraft] = useState("block");
  const [displayPublished, setDisplayPublished] = useState("none");
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.tips}>
      <Box>
        <Typography variant="h2" component="div" fontWeight={"bolder"} mb={2}>
          Your Tips
        </Typography>
        <Button
          className="buttonCreatePost"
          variant="outlined"
          sx={{ mr: 1 }}
          color="success"
          onClick={handleOpen}
        >
          Create Tip
        </Button>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab value="draft" label="Draft" />
          <Tab value="published" label="Published" />
        </Tabs>
        <Draft display={displayDraft} />
        <Published display={displayPublished} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateEditTip />
        </Box>
      </Modal>
    </div>
  );
}

function ListItemTip(props: any) {
  const tip = props.tip;
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
              {tip.text}
            </Typography>
            <Box>
              {tip.tags.map((tag: string) => (
                <Typography variant="overline" color="text.secondary">
                  #{tag} &nbsp;
                </Typography>
              ))}
            </Box>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Last edited on {props.tip.dateCreated}
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
    <Container
      disableGutters
      maxWidth="md"
      sx={{ ml: 0, display: props.display }}
    >
      <List component="nav" aria-label="mailbox folders">
        {tips
          .filter((tip) => tip.status == 1)
          .map((tip: Tip) => (
            <ListItemTip tip={tip} />
          ))}
      </List>
    </Container>
  );
}

function Published(props: any) {
  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{ ml: 0, display: props.display }}
    >
      <List component="nav" aria-label="mailbox folders">
        {tips
          .filter((tip) => tip.status == 2)
          .map((tip: Tip) => (
            <ListItemTip tip={tip} />
          ))}
      </List>
    </Container>
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

const tags = [
  "Artificial Intelligence",
  "Dev",
  "No-Code",
  "IA",
  "JS",
  "C#",
  "TS",
];

function CreateEditTip(props: any) {
  const [tipValues, setTipValues] = useState<any>({
    tags: [],
    text: "",
  });
  const [text, setText] = useState("");

  const handleChangeAutoComplete = (
    e: React.ChangeEvent<{}>,
    value: string[]
  ) => {
    setTipValues({
      ...tipValues,
      tags: value,
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
              Create Tip
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
      <Autocomplete
        sx={{ m: 2 }}
        multiple
        id="tags-standard"
        options={tags}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={handleChangeAutoComplete}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Tags" />
        )}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Tip"
        multiline
        maxRows={4}
        rows={4}
        fullWidth
      />
    </Box>
  );
}

export default Tips;
