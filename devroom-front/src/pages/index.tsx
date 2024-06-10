import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Post from "../components/post";
import styles from "./home.module.scss";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

const recentPosts = [
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

const followPosts = [
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

export default function Home() {
  const [tabValue, setTabValue] = useState("recent");

  const [posts, setPosts] = useState(recentPosts);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    if (newValue == "recent") {
      setPosts(recentPosts);
    } else {
      setPosts(followPosts);
    }
  };

  return (
    <div className={styles.home}>
      <Box sx={{ width: "100%" }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab value="recent" label="recent" />
          <Tab value="following" label="Following" />
        </Tabs>
      </Box>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
