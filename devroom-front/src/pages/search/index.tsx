import { Box, Chip, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Post from "../../components/post";
import styles from "./search.module.scss";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

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
    datePublish:  format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
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
    datePublish:  format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
      locale: ptBR,
    }),
  },
];

export default function Search() {
  return (
    <Grid container color={"black"}>
      <Grid item sm={12}>
        <h1>
          <span>Results for</span> this search
        </h1>
      </Grid>
      <Grid item>
        {posts.map((post) => (
          <Post
          post={post}
        />
        ))}
      </Grid>
    </Grid>
  );
}
