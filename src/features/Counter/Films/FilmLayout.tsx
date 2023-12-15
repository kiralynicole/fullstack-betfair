import {  Route, Routes } from "react-router-dom";
import { FilmList } from "./FilmList";
import { FilmDetails } from "./FilmDetails";

export function FilmLayout(){
    return(
        <>
        <h1>Layout Films</h1>
        {/* <Link to="details">Film Details</Link> */}
        <Routes>
        <Route index element={<FilmList></FilmList>}></Route>
        <Route path=":id" element = {<FilmDetails></FilmDetails>}></Route>
        </Routes>
        </>
    )
}