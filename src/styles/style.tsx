import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: black;
  justify-content: space-between;
  height: 80px;
  align-items: baseline;
  color: red;
  padding-left: 1rem;
`;

export const Container = styled.section`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;

  &.filme {
    width: 200px;
    height: 300px;
    background-color: black;
    transition: all 0.2s;
    margin-bottom: 1rem;
    &:hover {
      transform: scale(1.1);
    }
  }

  &.main {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  &.center {
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 3rem;
    color: white;
  }

  &.editora {
    width: 200px;
    height: 200px;
    border-radius: 1rem;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }

  &.banner {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
      url(https://i.ibb.co/mCVrKY8/books-g139495d62-1920-1-1.png);
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-size: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 19vh;
  background-color: black;
`;

// utilidades ex:botoes e inputs

export const A = styled.a`
  color: white;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #ffffff;
  padding: 15px;
  margin-right: 15px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  transition: 0.3s ease all;

  &:hover {
    background-color: white;
    color: black;
  }

  &.primary {
    margin-bottom: 6rem;
    margin-left: 6rem;
    font-weight: 700;
  }

  &.secondy {
    margin-bottom: 6rem;
    margin-left: 1rem;
    font-weight: 700;
  }
`;

export const H1 = styled.h1`
  color: white;
  margin-left: 6rem;
  font-weight: 700;
`;

export const P = styled.p`
  color: white;
  margin-left: 6rem;
  font-weight: 500;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
