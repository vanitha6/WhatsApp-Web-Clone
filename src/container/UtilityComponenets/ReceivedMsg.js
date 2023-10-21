import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../Context/StateProvider';
import './Message.css';

function ReceivedMsg() {
  const colors = ['#128C7E', '#25D366', '#34B7F1'];
  const [{ user }] = useStateValue();
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(Math.floor(Math.random() * colors.length));
  }, []);

  return (
    <div className={"flex wrap-sent"}>
      <div className={"message-sent"}>
        Test message
        <p className="message__timestamp">2 days ago</p>
      </div>
    </div>
  );
}

export default ReceivedMsg;
