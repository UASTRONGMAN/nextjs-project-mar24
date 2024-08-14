import React from "react";
import MoviesPage from "@/pages/movies/MoviesPage";
import HeaderComponent from "@/components/header/HeaderComponent";
import css from './page.module.css'



export default function Home() {

  return (
    <div className={css.page}>
        <MoviesPage/>
    </div>
  );
}
