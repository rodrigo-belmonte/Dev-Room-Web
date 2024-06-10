import { Card, Grid } from "@mui/material";
import Post from "../../components/post";
import styles from "./tag.module.scss";
import SellIcon from "@mui/icons-material/Sell";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const posts = [
  {
    id: 0,
    title:
      "The No-Code Pandas Alternative That Data Scientists Have Been Waiting For",
    subTitle:
      "A step towards simplifying data analysis for all — Motivation Story-telling is immensely critical to the workflow of all data science projects.",
    text: "",
    tags: ["Machine Learning", "IA"],
    datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
  {
    id: 1,
    title: "8 Reasons Why Forecasting Is Hard",
    subTitle:
      "Here’s what makes forecasting such a thorny task, and how you can cope with these problems — Forecasting is a popular but difficult problem in data science.",
    text: "",
    tags: ["Artificial Intelligence", "Machine Learning"],
    datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
  {
    id: 2,
    title:
      "The No-Code Pandas Alternative That Data Scientists Have Been Waiting For",
    subTitle:
      "A step towards simplifying data analysis for all — Motivation Story-telling is immensely critical to the workflow of all data science projects. ",
    text: "",
    tags: ["Artificial Intelligence", "Dev", "No-Code"],
    datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
];

const tag = {
  name: "Database",
  description: "Posts on building, using, and learning about databases.",
};
export default function Tag() {
  return (
    <Grid container color={"black"}>
      <Grid item sm={12}>
        <Card  sx={{ p: 1, mb: 10, maxWidth: "100%", maxHeight: "100%" , borderTop: "20px solid dodgerblue", }}>
          <CardContent>
            <Typography variant="h4" component="div" fontWeight={"bolder"}>
            <SellIcon /> {tag.name}
            </Typography>
            <Typography variant="h6" component="div">
              {tag.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Follow</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item >
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Grid>
    </Grid>
  );
}
