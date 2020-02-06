import React from 'react';
import styled from 'styled-components';

import ActiveAngryFace from './images/active-angry-face.png';
import ActiveSadFace from './images/active-sad-face.png';
import ActiveSoSoFace from './images/active-so-so-face.png';
import ActiveHappyFace from './images/active-happy-face.png';
import ActiveEnjoyFace from './images/active-enjoy-face.png';
import AnimateAngryFace from './animations/angry-face.gif';
import AnimateSadFace from './animations/sad-face.gif';
import AnimateSoSoFace from './animations/so-so-face.gif';
import AnimateHappyFace from './animations/happy-face.gif';
import AnimateEnjoyFace from './animations/enjoy-face.gif';
import AngryFace from './images/angry-face.png';
import SadFace from './images/sad-face.png';
import SoSoFace from './images/so-so-face.png';
import HappyFace from './images/happy-face.png';
import EnjoyFace from './images/enjoy-face.png';

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 55px;
  height: 55px;
`;

const EmojiRating = ({rating, setRating, isAnimate}) => {
  const getAngryFace = () => {
    if (rating === 1 && isAnimate) {
      return AnimateAngryFace;
    }
    if (rating === 1) {
      return ActiveAngryFace;
    }
    return AngryFace;
  };

  const getSadFace = () => {
    if (rating === 2 && isAnimate) {
      return AnimateSadFace;
    }
    if (rating === 2) {
      return ActiveSadFace;
    }
    return SadFace;
  };

  const getSoSoFace = () => {
    if (rating === 3 && isAnimate) {
      return AnimateSoSoFace;
    }
    if (rating === 3) {
      return ActiveSoSoFace;
    }
    return SoSoFace;
  };

  const getHappyFace = () => {
    if (rating === 4 && isAnimate) {
      return AnimateHappyFace;
    }
    if (rating === 4) {
      return ActiveHappyFace;
    }
    return HappyFace;
  };

  const getEnjoyFace = () => {
    if (rating === 5 && isAnimate) {
      return AnimateEnjoyFace;
    }
    if (rating === 5) {
      return ActiveEnjoyFace;
    }
    return EnjoyFace;
  };

  return (
    <Container>
      <Image src={getAngryFace()} onClick={() => setRating(1)}></Image>
      <Image src={getSadFace()} onClick={() => setRating(2)}></Image>
      <Image src={getSoSoFace()} onClick={() => setRating(3)}></Image>
      <Image src={getHappyFace()} onClick={() => setRating(4)}></Image>
      <Image src={getEnjoyFace()} onClick={() => setRating(5)}></Image>
    </Container>
  );
};
export default EmojiRating;
