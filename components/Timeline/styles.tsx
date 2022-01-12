import styled from "styled-components";

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 65px;
    line-height: 72px;
    background: linear-gradient(
        121.57deg,
        ${(props) => props.theme.colors.whites[1000]} 70%,
        ${(props) => props.theme.colors.blacks[900]} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding: 58px;
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

export const TimelineContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`;

export const TimelineWrapper = styled.div`
    width: 80%;
    height: auto;
    max-width: 900px;
    margin: 0 auto;
    position: relative;

    @media only screen and (min-width: 768px) {
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            background-color: ${(props) => props.theme.colors.whites[500]};
        }
    }
`;

export const TimelineList = styled.ul`
    list-style: none;
`;

export const TimeListItem = styled.li`
    padding: 20px;
    background-color: ${(props) => props.theme.colors.secondary.background};
    color: ${(props) => props.theme.colors.whites[1000]};
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid ${(props) => props.theme.colors.whites[500]};

    &:hover {
        border: 1px solid ${(props) => props.theme.colors.whites[1000]};
    }

    @media only screen and (min-width: 768px) {
        width: 50%;
        position: relative;
        margin-bottom: 0px;
        &:nth-child(odd) {
            float: left;
            clear: right;
            transform: translateX(-30px);
            border-radius: 20px 0px 20px 20px;
        }
        &:nth-child(even) {
            float: right;
            clear: left;
            transform: translateX(30px);
            border-radius: 0px 20px 20px 20px;
        }
        &::before {
            content: "";
            position: absolute;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: ${(props) => props.theme.colors.secondary.background};
            top: 0px;
            border: 1px solid ${(props) => props.theme.colors.whites[1000]};
        }
        &:nth-child(odd)::before {
            transform: translate(50%, -50%);
            right: -30px;
        }
        &:nth-child(even)::before {
            transform: translate(-50%, -50%);
            left: -30px;
        }
        &:hover::before {
            background-color: ${(props) => props.theme.colors.whites[1000]};
        }
    }
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 23px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
    }
`;

export const Date = styled.div`
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 2px;
    position: absolute;
    top: -30px;
    @media ${(props) => props.theme.breakpoints.md} {
        position: static;
        top: 0px;
        font-size: 11px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 10px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 300px;
    color: ${(props) => props.theme.colors.whites[600]};
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 15px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
    }
`;

export const Subtitle = styled.p`
    font-size: 13px;
    line-height: 30px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.whites[800]};
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 12px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 11px;
    }
`;

export const Details = styled.div`
    margin-top: 10px;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 13px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 12px;
    }
`;

export const Detail = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 8px;
`;

export const BulletPoint = styled.div``;
