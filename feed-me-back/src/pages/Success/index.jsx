import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div>
      <h1>Success</h1>
      <p>Feedback เป็นสิ่งที่ีคุณค่าสำหรับป่านมาก ขอบคุณมากครับ ❤️</p>
      <p>We all need people who will give us feedback. That’s how we improve - Bill Gates</p>
      <Link to="/">Homepage</Link>
    </div>
  )
}
export default SuccessPage;
