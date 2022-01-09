import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";

const Title = styled.h1`
    color: red;
    font-size: 50px;
`;

export default function Home() {
    return (
        <div>
            <FaGithub />
            <FaLinkedin />
            <BsFileTextFill />
            <Title>My page</Title>;
        </div>
    );
}
