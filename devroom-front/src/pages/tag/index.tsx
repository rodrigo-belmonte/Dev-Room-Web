import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Tag = {
  id: number;
  name: string;
  description: string;
};

const tags: Tag[] = [
  {
    id: 0,
    name: "C#",
    description: "",
  },
  {
    id: 1,
    name: "Full Cycle",
    description: "",
  },
  {
    id: 2,
    name: "React",
    description:
      "Official tag for Facebook's React JavaScript library for building user interfaces",
  },
  {
    id: 3,
    name: "Database",
    description: "Posts on building, using, and learning about databases.",
  },
  {
    id: 4,
    name: "Webdev",
    description: "Because the internet...",
  },
  {
    id: 5,
    name: "Typescript",
    description: "Posts on building, using, and learning about databases.",
  },
  {
    id: 6,
    name: "AWS",
    description:
      "Amazon Web Services (AWS) is a collection of web-services for computing, storage, machine learning, security, and more There are over 150",
  },
];
function Tag() {
  return (
    <Box>
      <Grid container alignItems="center" sx={{mb:3}} >
        <Grid item sm={9}>
          <Typography variant="h4" component="div" fontWeight={"bolder"}>
            Top Tags
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <SearchBox />
        </Grid>
      </Grid>
      <Grid container spacing={3} rowSpacing={3}>
        {tags.map((tag: Tag) => (
          <Grid item sm={4}>
            <TagCard tag={tag} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function TagCard(props: any) {
  const tag = props.tag;

  return (
    <Card
      sx={{
        p: 1,
        mb:1,
        maxWidth: "100%",
        height: "100%",
        borderTop: "20px solid dodgerblue",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom component="div" fontWeight={"bolder"}>
          {tag.name}
        </Typography>
        <Typography noWrap variant="body2" color="text.secondary">
          {tag.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Follow</Button>
      </CardActions>
    </Card>
  );
}

function SearchBox() {
  return (
    <Box >
      <TextField
        id="input-with-icon-adornment"
        variant="outlined"
        sx={{ background: "white" }}
        fullWidth
        placeholder="Search for tag"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Tag;
