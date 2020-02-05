import React from 'react';

import ParnImage from './images/parn.png';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Parn's 360 feedback!</h1>
      <img width="50%" src={ParnImage} />
      <p>สวัสดีครัช 🤩<br />ป่านรบกวนเวลาซัก 5 นาทีให้ Feedback ป่านหน่อยนะ <br />ป่านจะได้เรียนรู้ข้อผิดพลาดแล้วนำไปปรับปรุงในครั้งต่อๆไปครัชชช 😃</p>
      <a href="/success">Go</a>
    </div>
  );
}
export default HomePage;
