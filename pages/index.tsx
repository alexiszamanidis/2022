import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";
import Footer from "../components/Footer";

const Title = styled.h1`
    color: red;
    font-size: 50px;
`;

const Home = () => {
    return (
        <div>
            <FaGithub />
            <FaLinkedin />
            <BsFileTextFill />
            <Title>My page</Title>
            <Footer />
        </div>
    );
};

export default Home;
