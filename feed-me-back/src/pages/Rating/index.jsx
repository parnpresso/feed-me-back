import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const EmojiRating = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.8em;
`;

const Image = styled.img`
  width: 55px;
  height: 55px;
`;

const Content = styled.p`
  margin-bottom: 60px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: #535c68;
`;

const Button = styled.button`
  margin-left: 20px;
  margin-right: 20px;
  padding: 0.5em 1em 0.5em 1em;
  border: none;
  border-radius: 0.3em;
  background: #eaeaea;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 1px;
  color: #707070;
`;

const ActiveButton = styled.button`
  margin-left: 20px;
  margin-right: 20px;
  padding: 0.5em 1em 0.5em 1em;
  border: none;
  border-radius: 0.3em;
  background: #FED462;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 1px;
  color: #202020;
`;

const NavigatorBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding: 20px;
  background-color: white;
`;

const NavigatorNumber = styled.div`
  display: flex;
  align-items: center;
  color: #bcbcbc;
  font-weight: 600;
  letter-spacing: 1px;
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
      <Title>Teamwork</Title>

      <Content>
        Works well in a team<br />
        ทำงานกับทีมได้ดี
      </Content>

      <EmojiRating>
        <Image src={getAngryFace()} onClick={() => setRating(1)}></Image>
        <Image src={getSadFace()} onClick={() => setRating(2)}></Image>
        <Image src={getSoSoFace()} onClick={() => setRating(3)}></Image>
        <Image src={getHappyFace()} onClick={() => setRating(4)}></Image>
        <Image src={getEnjoyFace()} onClick={() => setRating(5)}></Image>
      </EmojiRating>

      <NavigatorBar>
        <Button onClick={() => goToHomePage()}>BACK</Button>
        <NavigatorNumber>1/8</NavigatorNumber>
        {rating === 0 ? (
          <Button>NEXT</Button>
        ) : (
          <ActiveButton onClick={() => updateRating(rating)}>NEXT</ActiveButton>
        )}

      </NavigatorBar>
    </Container>
  )
}
export default RatingPage;
