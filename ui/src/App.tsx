import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "reactstrap";
import './App.css';
import {Container} from "reactstrap";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const App = () => {
    return (
        <Router>
            <Container>
                <Header/>
                {/*
            <Route path="/" exact component={AboutPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
*/}
                <Footer/>
            </Container>
        </Router>
    );
}
export default App;
