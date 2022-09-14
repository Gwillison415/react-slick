import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as CONST from "../redux/constants";

// .catch((err) => console.warn("err", err));

export function CardContainer(props) {
  const { url } = props;
  const [details, setDetails] = useState({ img: false });
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setDetails({ id, height, weight, img });
    }

    return () => {
      mounted = false;
    };
  }, [url]);
  return details.img ? <Card {...props} {...details} /> : <Card {...props} />;
}

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.src + "image",
}))`
  height: 64px;
  width: 64px;
`;
const ImageContainer = styled.div`
  cursor: pointer;
`;
export function Card({ id, name, height, weight, img }) {
  const dispatch = useDispatch();

  //event bubbling

  const handleClick = () => {
    dispatch({
      type: CONST.SELECT_CURRENT_POKE,
      payload: { id, name, height, weight, img },
    });
  };
  return (
    <div>
      <ImageContainer onClick={handleClick}>
        {img && <Image src={img}></Image>}
      </ImageContainer>
      <div>{name}</div>
    </div>
  );
}

export const MemoizedCard = React.memo(Card);

// Memoization caused a 10% performance hit
// export const MemoizedCardContainer = React.memo(CardContainer);
