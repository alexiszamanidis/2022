import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0px auto;

    @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 56px;
        line-height: 56px;
        margin-bottom: 12px;
        padding: 40px 0 12px;
        max-width: 600px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 32px;
        line-height: 40px;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 8px;
        padding: 16px 0 8px;
        max-width: 100%;
        max-width: 300px;
    }
`;

export const Title = styled.h2`
    font-weight: 800;
    font-size: 65px;
    line-height: 72px;
    width: max-content;
    background: linear-gradient(
        121.57deg,
        ${(props) => props.theme.colors.whites[1000]} 70%,
        ${(props) => props.theme.colors.blacks[900]} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding: 58px 0 16px;
    max-width: 700px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 56px;
        line-height: 56px;
        margin-bottom: 12px;
        padding: 40px 0 12px;
        max-width: 600px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 32px;
        line-height: 40px;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 8px;
        padding: 16px 0 8px;
        max-width: 100%;
        max-width: 300px;
    }
`;

export const Summary = styled.p`
    max-width: 700px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    padding-bottom: 3.6rem;
    color: ${(props) => props.theme.colors.whites[800]};

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 24px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`;

export const Button = styled.a`
    padding: 12px 20px;
    width: 170px;
    height: 52px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: ${(props) => props.theme.colors.blacks[1000]};
    background: ${(props) => props.theme.colors.whites[1000]};

    &:hover {
        background: ${(props) => props.theme.colors.primary.background};
        color: ${(props) => props.theme.colors.whites[1000]};
        border: 1px solid ${(props) => props.theme.colors.whites[1000]};
        cursor: pointer;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: 150px;
        height: 52px;
        font-size: 20px;
        margin-bottom: 0px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        height: 32px;
        font-size: 14px;
        margin-bottom: 0px;
    }
`;

export const CvIcon = styled.div`
    display: flex;
    align-items: center;
`;
