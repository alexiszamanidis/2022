import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface ButtonProps {
    children: ReactNode;
    href: string;
}

const Button = ({ children, href }: ButtonProps) => {
    return (
        <Wrapper href={href} target="_blank" rel="noopener">
            {children}
        </Wrapper>
    );
};

export default Button;
