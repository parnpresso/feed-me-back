import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import ParnImage from './images/parn.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 1.8em;
`;

const Image = styled.img`
  width: 40%;
  border-radius: 50%;
  margin: 60px;
`;

const Content = styled.p`
  margin-bottom: 20px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: #535c68;
`;

const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 20%;
  padding: 0.5em 4em 0.5em 4em;
  border: none;
  border-radius: 0.3em;
  background: #FED462;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 1px;
  color: #202020;
`;

const HomePage = () => {
  const history = useHistory();

  const goToRatingPage = () => history.push('/rating');

  return (
    <Container>
      <Title>Parn's 360 feedback!</Title>
      <Image src={ParnImage} />
      <Content>
        สวัสดีครัช <span role="img" aria-label="Excited face">🤩</span><br />
        ป่านรบกวนเวลาซัก 5 นาที<br />
        ให้ Feedback ป่านหน่อยนะ <br />
      </Content>
      <Content>
        ป่านจะได้เรียนรู้ข้อผิดพลาดแล้วนำไปปรับปรุงในครั้งต่อๆไปครัชชช <span role="img" aria-label="Smiled face">😃</span>
      </Content>
      <Button onClick={() => goToRatingPage()}>START</Button>
    </Container>
  );
}
export default HomePage;
