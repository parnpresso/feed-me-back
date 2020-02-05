import React from 'react';
import { Link } from 'react-router-dom';

const RatingPage = () => {
  return (
    <div>
      <h1>Teamwork</h1>

      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>

      <Link to="/success">Next</Link>
    </div>
  )
}
export default RatingPage;
