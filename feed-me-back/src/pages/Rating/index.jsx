import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import originalQuestions from '../../constants/questions';
import EmojiRating from '../../components/EmojiRating';

const Container = styled.div`
  padding-top: 15vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding: 20px;
  background-color: white;
`;

const TopTitle = styled.h1`
  font-size: 1.2em;
  letter-spacing: 1px;
  color: #707070;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.8em;
`;

const Content = styled.p`
  margin-bottom: 60px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: #535c68;
  letter-spacing: 0.5px;
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

const AdditionalFeedback = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AdditionalFeedbackInput = styled.textarea`
  width: 80%;
  border-radius: 6px;
  border: none;
  padding: 20px;
  font-size: 16px;
`;

const AddtionalFeedbackLink = styled.p`
  margin-top: 60px;
  margin-bottom: 20px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: #535c68;
  letter-spacing: 0.5px;
`;

const RatingPage = (firebase) => {
  const history = useHistory();
  const [questions, setQuestions] = useState(originalQuestions);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [rating, setRating] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    questions.map(question => {
      question.rating = '';
      question.additionalFeedback = '';
    });
  }, []);

  useEffect(() => {
    setIsAnimate(true);
    setTimeout(() => {setIsAnimate(false)}, 3000);
  }, [rating]);

  const clickBackButton = ()=> {
    if (currentQuestionNumber === 1) { history.push("/"); }
    else { goToPreviousQuestion(); }
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber - 1);
    resetRatingPage();
  };

  const clickNextButton = (currentQuestionNumber) => {
    if (currentQuestionNumber === questions.lenght) { history.push("/success"); }
    else {
      try {
        const feedbacksTable = firebase.firebase.database().ref('feedbacks');
        feedbacksTable.push({teamwork_rating: rating});
        goToNextQuestion();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const goToNextQuestion = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    resetRatingPage();
  };

  const resetRatingPage = () => {
    setRating(0);
    setIsAnimate(false);
    window.scrollTo(0, 0);
  };

  const setAdditionalFeedback = additionalFeedbackValue => {
    questions[currentQuestionNumber - 1].additionalFeedback = additionalFeedbackValue;
    setQuestions(questions);
  };

  return (
    <Container>
      <TopBar>
        <TopTitle>{ questions[currentQuestionNumber].category }</TopTitle>
      </TopBar>

      <Title>{ questions[currentQuestionNumber].title }</Title>

      <Content>
        { questions[currentQuestionNumber].description }
      </Content>

      <EmojiRating
        rating={rating}
        setRating={setRating}
        isAnimate={isAnimate}
      />

      {rating !== 0 && (
        <AdditionalFeedback>
          <AddtionalFeedbackLink>บอกให้ป่านรู้ทำไมถึงเลือกแบบนี้</AddtionalFeedbackLink>
          <AdditionalFeedbackInput
            rows="5"
            placeholder="Optional"
            onChange={event => setAdditionalFeedback(event.target.value)}
          />
        </AdditionalFeedback>
      )}

      <NavigatorBar>
        <Button onClick={() => clickBackButton(currentQuestionNumber)}>BACK</Button>
        <NavigatorNumber>{ currentQuestionNumber }/{ questions.length }</NavigatorNumber>

        {rating === 0 ? (
          <Button>NEXT</Button>
        ) : (
          <ActiveButton onClick={() => clickNextButton(rating)}>NEXT</ActiveButton>
        )}
      </NavigatorBar>
    </Container>
  )
}
export default RatingPage;
