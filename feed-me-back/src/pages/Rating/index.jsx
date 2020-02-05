import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RatingPage = (firebase) => {
  const history = useHistory();
  const [rating, setRating] = useState(0);

  const goToSuccessPage = () => history.push("/success");

  const updateRating = (rating) => {
    try {
      const feedbacksTable = firebase.firebase.database().ref('feedbacks');
      feedbacksTable.push({teamwork_rating: rating});
      goToSuccessPage();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Teamwork</h1>

      <div onClick={() => setRating(1)}>1sssss</div>
      <div onClick={() => setRating(2)}>2</div>
      <div onClick={() => setRating(3)}>3</div>
      <div onClick={() => setRating(4)}>4</div>
      <div onClick={() => setRating(5)}>5</div>

      <div onClick={() => updateRating(rating)}>Next</div>
    </div>
  )
}
export default RatingPage;
