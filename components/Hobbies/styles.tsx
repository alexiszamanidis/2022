import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px;
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 10px 0 12px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0px 0 8px;
    }
`;

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 65px;
    line-height: 72px;
    background: linear-gradient(
        121.57deg,
        ${(props) => props.theme.colors.whites[1000]} 30%,
        ${(props) => props.theme.colors.blacks[900]} 90%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding-bottom: 50px;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 56px;
        line-height: 56px;
        margin-bottom: 12px;
        padding: 40px 0 12px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 32px;
        line-height: 40px;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 8px;
        padding: 16px 0 8px;
        max-width: 100%;
    }
`;

export const HobbiesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    gap: 50px;
    @media ${(props) => props.theme.breakpoints.md} {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Hobby = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 20px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 18px;
    }
`;
export const HobbyTitle = styled.div``;
export const HobbyIcon = styled.div`
    margin-bottom: 10px;
`;
