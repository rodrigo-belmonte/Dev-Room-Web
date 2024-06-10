import { Avatar, Box, Chip, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "./article.module.scss";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

type Article = {
  id: string;
  title: string;
  subTitle: string;
  text: string;
  tags: string[];
  datePublish: string;
  author: string;
};

const article: Article = {
  id: "1",
  title:
    "The No-Code Pandas Alternative That Data Scientists Have Been Waiting For",
  subTitle:
    "A step towards simplifying data analysis for all — Motivation Story-telling is immensely critical to the workflow of all data science projects.",
  text: "The “no free lunch” theorem for machine learning states that there is no single machine learning algorithm that can solve all types of machine learning problems. \
    Machine learning tasks can vary widely and the choice of algorithm will depend on things such as the size, dimensionality and sparsity of the data. The target variable, the quality of the data and the interactions and statistical relationships that exist both within features and between the features and target variable.\
        As a result, it is not possible to simply select one algorithm for a one-size-fits-all approach. Depending on exactly how they work different algorithms will be better suited to certain tasks. Data scientists will typically select the final algorithm to use by first determining a sub-set of algorithms appropriate for the specific problem and then experimenting with these algorithms to find the optimal choice.\
        In this article, I will provide a quick reference guide to five of the most common algorithms used for machine learning. This will provide an introduction to the inner workings of the algorithms and the considerations that make each algorithm better suited to certain tasks.\
        This will include a brief introduction to Linear Regression, Logistic Regression, Random Forest, XGBoost and K-means. For each algorithm I will cover the following:\
        How the algorithm works.\
    An example code implementation.\
    Guidance on appropriate situations to use the algorithm.\
    Advantages and disadvantages.\
    1. Linear Regression\
    Linear regression is a supervised machine learning algorithm that is used to predict a continuous target variable. For simple linear regression, where there is one independent variable (feature) and one dependent variable (target) the algorithm can be represented by the following equation.\
    y = a + bX \
    Where y is the dependent variable, X is the explanatory variable, b is the slope of the line and a is the intercept.\
    Simple linear regression can be visualised as a scatter plot where the x-axis contains the dependent variable and the y-axis contains the independent variable. The linear regression algorithm draws a line of best fit through the data points minimising the variation between the predicted and actual outputs.",
  tags: ["Machine Learning", "IA"],
  datePublish: format(parseISO(new Date().toISOString()), "dd/MM/yyyy", {
    locale: ptBR,
  }),
  author: "Rodrigo Belmonte",
};

export default function ArticlePage() {
  return (
    <Box className={styles.article} color={"black"}>
      <AuthorInfo author={article.author} datePublish={article.datePublish} />
      <Typography variant="h2" component="h1" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        {article.subTitle}
      </Typography>
      <Box sx={{ mb: 5 }}>
        {article.tags.map((tag: string) => (
          <Chip sx={{ m: 1 }} label={tag} />
        ))}
      </Box>
      <Typography variant="body1">{article.text}</Typography>
    </Box>
  );
}

function AuthorInfo(props: any) {
  return (
    <Grid container>
      <Grid item sx={{ pr: 2 }}>
        <Avatar>{props.author.charAt(0)}</Avatar>
      </Grid>
      <Grid item>
        <Typography sx={{ fontWeight: "bolder" }}>{props.author}</Typography>
        <Typography variant="overline" color="text.secondary" gutterBottom>
          Posted on {props.datePublish}
        </Typography>
      </Grid>
    </Grid>
  );
}
