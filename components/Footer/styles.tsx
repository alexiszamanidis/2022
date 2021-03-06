import styled from "styled-components";

export const Wrapper = styled.section`
    width: calc(100vw - 96px);
    max-width: 910px;
    padding: 2rem 48px 40px;
    margin: 1rem auto;
    box-sizing: content-box;

    @media ${(props) => props.theme.breakpoints.lg} {
        max-width: 500px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        max-width: 300px;
    }
`;

export const LinkItem = styled.a`
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.colors.whites[700]};
    margin-bottom: 16px;
    transition: 0.3s ease;
    position: relative;
    left: 0;
    &:hover {
        color: ${(props) => props.theme.colors.primary.main};
    }
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 18px;
        line-height: 28px;
        display: flex;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 14px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
    }
`;

export const SocialIconsContainer = styled.div`
    max-width: 1040px;
    display: flex;
    justify-content: space-between;
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        justify-content: space-between;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
`;

export const CopyrightWrapper = styled.div`
    display: flex;
    gap: 5px;
    letter-spacing: 0.02em;
    font-size: 16px;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Copyright = styled.div`
    color: ${(props) => props.theme.colors.whites[700]};
`;

export const CopyrightLink = styled.a`
    color: ${(props) => props.theme.colors.whites[700]};
    font-size: 18px;
    @media ${(props) => props.theme.breakpoints.sm} {
        margin-bottom: 20px;
    }
    &:hover {
        color: ${(props) => props.theme.colors.primary.main};
        cursor: pointer;
        box-shadow: 0 14px 14px -16px rgb(255 233 35 / 20%);
    }
    &:after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: ${(props) => props.theme.colors.primary.main};
        transition: width 0.3s;
    }
    &:hover::after {
        width: 100%;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.md} {
        justify-content: center;
        padding-right: 16px;
        flex-wrap: wrap;
    }
`;

export const LinkList = styled.ul`
    border-top: 1px solid ${(props) => props.theme.colors.whites[100]};
    display: grid;
    grid-template-columns: repeat(3, minmax(85px, 220px));
    gap: 40px;
    padding: 40px 0 28px;
    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 32px 0 16px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        padding: 32px 0 16px;
        gap: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        padding: 32px 4px 16px;
        gap: 10px;
    }
`;

export const LinkColumn = styled.li`
    display: flex;
    flex-direction: column;
    max-width: 220px;
    width: 100%;
    @media ${(props) => props.theme.breakpoints.md} {
        align-items: center;
    }
`;

export const LinkTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.whites[500]};
    margin-bottom: 16px;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 17px;
        line-height: 12px;
        margin-bottom: 8px;
    }
`;
