import styled from 'styled-components';

export const SyllabusTableContainer = styled.div`
    width: 100%;
    height: 60vh;
    border: 1px solid #000;
`

export const SyllabusTable = styled.table`
  border-collapse: collapse;
  width: 98%;
  margin: 20px auto;
  padding: 10px;

  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-family: Dm sans;
    color: #636e72;
  }

  th {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-family: Dm sans;
    color: black;
  }
`;

export const NavigationButton = styled.button`
  border: none;
  background: ${({ isActive }) => (isActive ? '#7177FF' : 'none')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#777777')};
  cursor: pointer;
  font-weight: bold;
  padding: 10px 40px;
  margin-right: 10px;
  margin-left: 25px;
  border-radius: 5px;

    &:hover {
        background-color: #7588F2;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        padding: 10px 20px;
    }
`;
export const NavigationButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    width: 100%;

`

export const Heading = styled.h1`
  margin: 25px;

  font-family: sans-serif;
  display: flex;
  align-items: center;
  color: #333333;
  position: relative;
  gap: 30px;

  /* Add border styles for large screen devices */
  &::before {
    content: "";
    position: absolute;
    margin-left: 5px;
    top: 50%;
    left: calc(9% - 1px); /* Adjust the value to position the border closer or farther from the heading */
    transform: translateY(-50%);
    height: 100%; /* Adjust the height to control the length of the border line */
    width: 4px; /* Adjust the width to control the thickness of the border line */
    background-color: #7177FF;
  }

  @media (max-width: 768px) {
    /* Hide border for small screen devices */
    &::before {
      display: none;
    }
  }
`;

export const Dropdown = styled.select`
  margin-left: 20px;
  height: 40px;
  min-width: 100px;
  padding: 8px 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ffff;
  color: #ffff;
  background-color: #7177FF;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #000000;
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffff;
  }

    option {
        color: #000000;
        background-color: #ffff;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;