import styled from "styled-components";

const BORDER = `1px solid rgb(140, 140, 140)`;
const BORDER_RADIUS = `4px`;
const BOX_SHADOW = `2px 3px 3px rgb(180, 180, 180)`;

const BASIC_BUTTON = `
  width: 120px;
  height: 30px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  border-radius: ${BORDER_RADIUS};
  box-shadow : ${BOX_SHADOW};
`;

const C_COLOR = `#4a69bd`;
const R_COLOR = `#f6b93b`;
const U_COLOR = `#fa983a`;
const D_COLOR = `#e55039`;

export const WholeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};

  display: flex;
  flex-direction: ${(props) => props.direction};

  ${(props) =>
    props.isData &&
    `
    transition : 0.5s;
    cursor: pointer;

    &:hover {
        background : rgb(180, 180, 180);
        color : #fff;
    }
  `}
`;

export const TitleWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  margin: 50px 0px;

  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: ${(props) => props.align || `center`};
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  color: rgb(50, 50, 50);
`;

export const SearchInput = styled.input`
  width: 240px;
  height: 30px;
  padding: 0px 5px;
  outline: none;
  border: none;
  background: none;
  border-bottom: ${BORDER};
  transition: 0.5s;

  &:focus {
    border-bottom: 1px solid #fa983a;
  }
`;

export const Column = styled.div`
  width: ${(props) => props.width};
  height: 25px;

  ${(props) =>
    props.isHead
      ? `background: #222f3e;
  color: #fff;
  line-height: 25px;
  text-align: center;`
      : `line-height: 25px;
  text-align: center;
  border-bottom: ${BORDER};`}
`;

export const C_Btn = styled.button`
  ${BASIC_BUTTON}
  background: ${C_COLOR};
`;

export const R_Btn = styled.button`
  ${BASIC_BUTTON}
  background: ${R_COLOR};
`;

export const U_Btn = styled.button`
 ${BASIC_BUTTON}
  background: ${U_COLOR};
`;

export const D_Btn = styled.button`
  ${BASIC_BUTTON}
  background: ${D_COLOR};
`;
