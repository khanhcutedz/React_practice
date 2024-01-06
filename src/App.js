import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
      <div className="app-container">
        {/* <Container> */}
        <Header />
        <Container>
          
          <TableUsers />
        </Container>
        {/* </Container> */}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;
