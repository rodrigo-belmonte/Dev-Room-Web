import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import EditorQuill from "../../../../components/EditorQuillComponent/EditorQuill";
import styles from "../myPosts.module.scss";

const tags = [
  "Artificial Intelligence",
  "Dev",
  "No-Code",
  "IA",
  "JS",
  "C#",
  "TS",
];

type Post = {
  title: string;
  tags: string[];
  status: Status;
  text: string;
};

enum Status {
Draft=0,
Published=1
}

function NewPost() {
  const router = useRouter();
  const [postValues, setPostValues] = useState<Post>({
    title: "",
    tags: [],
    status: 0,
    text: "",
  });
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostValues({
      ...postValues,
      [event.target.name]: event.target.value,
    });
  };

const handleChangeAutoComplete = (
  e: React.ChangeEvent<{}>,
  value: string[]
) => {
  setPostValues({
    ...postValues,
    tags: value,
  });
};
  
  const Publish = () => {
    
    var post = postValues;
    post.text = text;
    post.status = Status.Published;
    console.log(post);
    // router.push("/profile/myPosts");
  };

  const Draft = () => {
    var post = postValues;
    post.text = text;
    post.status = Status.Draft;
    console.log(post);
    // router.push("/profile/myPosts");
  };

  const Discard = () => {
    router.push("/profile/myPosts");
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", mb: 2, boxShadow: "none" }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            <img src="/DevRoom-Black.svg" alt="logo" className={styles.logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bolder"}
              sx={{ color: "black", textAlign: "center" }}
            >
              Create Post
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              disableFocusRipple
              sx={{ mr: 1, textTransform: "none" }}
              color="success"
              onClick={Publish}
            >
              Publish
            </Button>
            <Button
              variant="contained"
              disableRipple
              sx={{ mr: 1, textTransform: "none", bgcolor: "#8e9297" }}
              onClick={Draft}
            >
              Draft
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ mr: 1, textTransform: "none" }}
              color="error"
              onClick={Discard}
            >
              Discard
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item sx={{ mr: 10, ml: 10, width: "100%" }}>
          <Box sx={{ backgroundColor: "white" }}>
            <FormControl fullWidth>
              <OutlinedInput
              name="title"
                placeholder="Post Title"
                value={postValues.title}
                onChange={handleChange}
              />
            </FormControl>
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
            <EditorQuill value={text} onChange={setText} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewPost;
