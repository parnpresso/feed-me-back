import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import ActiveAngryFace from './images/active-angry-face.png';
import ActiveSadFace from './images/active-sad-face.png';
import ActiveSoSoFace from './images/active-so-so-face.png';
import ActiveHappyFace from './images/active-happy-face.png';
import ActiveEnjoyFace from './images/active-enjoy-face.png';
import AnimateAngryFace from './animations/angry-face.gif';
import AngryFace from './images/angry-face.png';
import SadFace from './images/sad-face.png';
import SoSoFace from './images/so-so-face.png';
import HappyFace from './images/happy-face.png';
import EnjoyFace from './images/enjoy-face.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const EmojiRating = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 1.8em;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Button = styled.button`
  padding: 0.5em 4em 0.5em 4em;
  border: none;
  border-radius: 0.3em;
  background: #FED462;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 1px;
  color: #202020;
`;

const RatingPage = (firebase) => {
  const history = useHistory();
  const [rating, setRating] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    setIsAnimate(true);
    setTimeout(() => {setIsAnimate(false)}, 3000);
  }, [rating]);

  const goToHomePage = () => history.push("/");
  const goToSuccessPage = () => history.push("/success");

  const updateRating = (rating) => {
    try {
      const feedbacksTable = firebase.firebase.database().ref('feedbacks');
      feedbacksTable.push({teamwork_rating: rating});
      goToSuccessPage();
    } catch (error) {
      console.log(error);
    }
  };

  const getAngryFace = () => {
    if (rating === 1 && isAnimate) {
      return AnimateAngryFace;
    }

    if (rating === 1) {
      return ActiveAngryFace;
    }

    return AngryFace;
  };

  return (
    <Container>
      <Title>Teamwork</Title>

      <EmojiRating>
        <Image src={getAngryFace()} onClick={() => setRating(1)}></Image>
        <Image src={rating === 2 ? ActiveSadFace : SadFace} onClick={() => setRating(2)}></Image>
        <Image src={rating === 3 ? ActiveSoSoFace : SoSoFace} onClick={() => setRating(3)}></Image>
        <Image src={rating === 4 ? ActiveHappyFace : HappyFace} onClick={() => setRating(4)}></Image>
        <Image src={rating === 5 ? ActiveEnjoyFace : EnjoyFace} onClick={() => setRating(5)}></Image>
      </EmojiRating>

      <Button onClick={() => goToHomePage()}>Back</Button>
      <Button onClick={() => updateRating(rating)}>Next</Button>
    </Container>
  )
}
export default RatingPage;
