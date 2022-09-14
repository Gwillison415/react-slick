import React from "react";
import styled from "styled-components";
import { CardContainer, Card } from "./Card";
import DetailsPage from "./DetailsPage";
import { Row } from "./Row";
import { Column } from "./Column";
import { remCaculator } from "../utils/styledUtils";
import { shallowEqual, useSelector } from "react-redux";

const Container = styled.div`
  padding-right: ${remCaculator(16)};
  padding-left: ${remCaculator(16)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  @media (min-width: 576px) {
    max-width: ${remCaculator(540)};
  }

  @media (min-width: 768px) {
    max-width: ${remCaculator(720)};
  }

  @media (min-width: 992px) {
    max-width: ${remCaculator(9600)};
  }

  @media (min-width: 1200px) {
    max-width: ${remCaculator(1140)};
  }
`;

export default function GridContainer() {
  // console.log('allresults', allresults)
  return (
    <Container>
      {selectionState === "all" && (
        <Row>
          {characterList.map(({ name, url }, index) => {
            return (
              <Column key={index.toString() + url} xs="12" sm="4" lg="2" xl="1">
                <CardContainer name={name} url={url}></CardContainer>
              </Column>
            );
          })}
        </Row>
      )}
      {selectionState === "saved" && (
        <Row>
          {savedPoke.map((cardProps) => {
            return (
              <Column key={cardProps.id} xs="12" sm="6" lg="4" xl="2">
                <Card {...cardProps}></Card>
              </Column>
            );
          })}
        </Row>
      )}
    </Container>
  );
}
// "use strict";
// const { styled, React, ReactDOM } = window;

// function CardContainer(props) {
//   const Image = styled.img.attrs((props) => ({
//     src: props.src,
//     alt: props.src + "image",
//   }))`
//     height: 64px;
//     width: 64px;
//   `;
//   const ImageContainer = styled.div`
//     cursor: pointer;
//   `;
//   function Card({ id, name, stargazers_count, owner }) {
//     return (
//       <div>
//         <ImageContainer onClick={handleClick}>
//           {img && <Image src={img}></Image>}
//         </ImageContainer>
//         <div>{name} </div>
//         <div style={{ display: "inline" }}>
//           <image url="*" /> {stargazers_count}
//         </div>
//       </div>
//     );
//   }
// }

// async function fetchRepos(page = 1) {
//   const res = await fetch(
//     `https://api.github.com/search/repositories?per_page=20&page=${page}&sort=stars&q=language:javascript`
//   );
//   return res.json();
// }

// const App = () => {
//   const [items, setItems] = useState([{}, {}]);

//   fetchRepos().then((data) => {
//     console.log(data);
//     setItems(data);
//   });
//   return (
//     <div className={"grid-container"}>
//       {items.map((item) => {
//         <Card {...item} />;
//       })}
//     </div>
//   );
// };
