"use client";
import Header from "@/Components/Header/header";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.location.href = "/home";
  });
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
