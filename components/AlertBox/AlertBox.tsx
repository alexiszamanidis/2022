import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface AlertBoxProps {
    children: ReactNode;
}

const AlertBox = ({ children }: AlertBoxProps) => {
    return <Wrapper>{children}</Wrapper>;
};

export default AlertBox;
