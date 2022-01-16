import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    background-color: ${(props) => props.theme.colors.secondary.background};
    width: 450px;
    word-wrap: break-word;
    border-radius: 40px;
    border: 1px solid ${(props) => props.theme.colors.whites[500]};

    &:hover {
        border: 1px solid ${(props) => props.theme.colors.primary.main};
        box-shadow: 0 14px 14px -16px rgb(255 233 35 / 20%);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        max-width: 100%;
    }
`;

export const Name = styled.div`
    color: ${(props) => props.theme.colors.whites[1000]};
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 10px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 8px;
    }
`;

export const Description = styled.div`
    margin-bottom: 12px;
    color: ${(props) => props.theme.colors.whites[600]};
    font-size: 20px;
    line-height: 28px;
    font-weight: 200;
    margin-bottom: 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 8px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 6px;
    }
`;

export const Language = styled.div`
    margin-bottom: 12px;
    color: ${(props) => props.theme.colors.whites[1000]};
    font-size: 20px;
    line-height: 28px;
    font-weight: 200;
    margin-bottom: 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 8px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 6px;
    }
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
`;

export const Detail = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
`;
