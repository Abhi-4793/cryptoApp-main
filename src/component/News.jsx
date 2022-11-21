import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { option } = Select;
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 10 : 100,
  });

  if (!cryptoNews?.value) return "....Loading";
  console.log(cryptoNews);
  return <div></div>;
};

export default News;
