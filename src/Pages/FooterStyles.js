import styled from 'styled-components';

export const Box = styled.div`
background: black;
position: absolute;
bottom: 0;
width: 100%;
margin-top: 24%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
`;
