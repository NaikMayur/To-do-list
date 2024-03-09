"use client";
import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Login from "./login/page";
import TodoPage from "@/components/TodoPage";

export default function Home() {
  return (
    <>
      <TodoPage />
    </>
  );
}
