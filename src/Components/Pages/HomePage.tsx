import React from "react";
import Banner from "../Navbar/Banner";
import Footer from "../Navbar/Footer";
import Contact from "../Navbar/Contact";
import NavBar from "../Navbar/Navbar";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <Banner />
                <Contact />
            </>
        );
    }
}

export default HomePage;
