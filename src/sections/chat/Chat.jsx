import {useState} from 'react'

import MessageFrom from "../../components/message-form/MessageForm";
import {TextMessages} from "../../components/TextMessages";

const Chat = () => {
const [msgs, setMsgs] = useState([])

  return (
    <section className="fixed-bottom my-5 mx-3">
      <TextMessages msgs={msgs}/>
      <MessageFrom setMsgs={setMsgs}/>
    </section>
  );
};

export default Chat;
