import { useState } from "react";
import { Counter } from "../features/Counter/Counter";
import { Weather } from "../features/Counter/Weather/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav/Nav";
import './App.css'
import { Auth } from "../features/Counter/Auth/Auth";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "../features/Counter/Auth/AuthContext";
import { FilmLayout } from "../features/Counter/Films/FilmLayout";


function App(){
  const [init, setInit] = useState(0);
    return (
    //   <h1>Hello from App</h1>
    <AuthContextProvider>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>}></Route>
      <Route path="counter" element = { <Counter initialCount={6}/>}></Route>
      <Route path="weather" element = { <Weather></Weather>}></Route>
      <Route path = "films/*" element = {<FilmLayout></FilmLayout>}> </Route>
      <Route path="*" element={<h1>404 not found</h1>}></Route>
      <Route path="login"></Route>
      <Route path="register" element={<Auth></Auth>}></Route>
   
    </Routes>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
    </AuthContextProvider>
    )
  }


//default export --un sg default export
export default App;

//named export---pot mai multe
  export {
    App
  };