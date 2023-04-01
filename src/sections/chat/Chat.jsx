import MessageFrom from "../../components/message-form/MessageForm";
import TextMessage from "../../components/text-message/TextMessage";

const Chat = () => {
  return (
    <section className="fixed-bottom my-5 mx-3">
      <div>
        <TextMessage />
        <TextMessage />
        <TextMessage />
        <TextMessage />
        <TextMessage />
      </div>
      <MessageFrom />
    </section>
  );
};

export default Chat;
