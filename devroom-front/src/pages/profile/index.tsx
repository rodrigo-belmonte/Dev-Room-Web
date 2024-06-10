import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect, ChangeEvent } from "react";

function Profile() {
  const [tabValue, setTabValue] = useState("home");
  const [displayHome, setDisplayHome] = useState("block");
  const [displayAbout, setDisplayAbout] = useState("none");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    if (newValue == "home") {
      setDisplayHome("block");
      setDisplayAbout("none");
    } else {
      setDisplayHome("none");
      setDisplayAbout("block");
    }
  };

  return (
    <Grid>
      <Typography variant="h2" component="div" fontWeight={"bolder"} mb={2}>
        Rodrigo Belmonte de Oliveira
      </Typography>
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab value="home" label="Home" />
        <Tab value="about" label="About" />
      </Tabs>
      <Home display={displayHome} />
      <About display={displayAbout} />
    </Grid>
  );
}

function Home(props: any) {
  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{ ml: 0, display: props.display }}
    >
      <ReadingListCard />
      <MyPostsCard />
    </Container>
  );
}

function ReadingListCard() {
  return (
    <Card sx={{ p: 1, my: 3, maxWidth: "100%" }}>
      <Grid container>
        <Grid
          item
          sm={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "wrap",
            alignContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h4" component="div" fontWeight={"bolder"}>
              Reading List
            </Typography>
            <Typography variant="h6" component="div"></Typography>
          </CardContent>
          <CardActions sx={{ flexGrow: "1" }}>
            <Button variant="outlined">View List</Button>
            <Typography variant="overline" component="div" sx={{ ml: 2 }}>
              10 articles
            </Typography>
          </CardActions>
        </Grid>
        <Grid item sm={5}>
          <CardMedia
            component="img"
            height="200"
            image={"https://picsum.photos/500"}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

function MyPostsCard() {
  return (
    <Card sx={{ p: 1, my: 3, maxWidth: "100%" }}>
      <Grid container>
        <Grid
          item
          sm={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "wrap",
            alignContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h4" component="div" fontWeight={"bolder"}>
              My Posts
            </Typography>
            <Typography variant="h6" component="div"></Typography>
          </CardContent>
          <CardActions sx={{ flexGrow: "1" }}>
            <Button variant="outlined">View List</Button>
            <Typography variant="overline" component="div" sx={{ ml: 2 }}>
              10 articles
            </Typography>
          </CardActions>
        </Grid>
        <Grid item sm={5}>
          <CardMedia
            component="img"
            height="200"
            image={"https://picsum.photos/500"}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

const tecnologies = ["C#", "JS", "HTML", "IA", "TS"];

function About(props: any) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
  });

  const [coding, setCoding] = useState({
    skills_Languages: [""],
    currentlyLearning: [""],
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSkillsLanguages = (
    event: React.SyntheticEvent<Element, Event>,
    value: string[]
  ) => {
    setCoding({
      ...coding,
      skills_Languages: value,
    });
  };
  const handleChangeCurrentlyLearning = (
    event: React.SyntheticEvent<Element, Event>,
    value: string[]
  ) => {
    setCoding({
      ...coding,
      currentlyLearning: value,
    });
  };

  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{ ml: 0, my: 3, display: props.display }}
    >
      <Box sx={{ bgcolor: "white", borderRadius: 2, px: 3, py: 2, mb: 2 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"bolder"}
          mb={2}
        >
          User
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          name="name"
          value={user.name}
          label="Name"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          name="email"
          value={user.email}
          label="E-mail"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="userName"
          name="userName"
          value={user.userName}
          label="Username"
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ bgcolor: "white", borderRadius: 2, px: 3, py: 2, my: 2 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"bolder"}
          mb={2}
        >
          Coding
        </Typography>
        <Autocomplete
          multiple
          id="tags-standard"
          options={tecnologies}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          onChange={handleChangeCurrentlyLearning}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="normal"
              variant="outlined"
              label="Current Learning"
            />
          )}
        />
        <Autocomplete
          multiple
          id="tags-standard"
          options={tecnologies}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          onChange={handleChangeSkillsLanguages}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="normal"
              variant="outlined"
              label="Skills/Languages"
            />
          )}
        />
       
        
      </Box>
    </Container>
  );
}

export default Profile;
