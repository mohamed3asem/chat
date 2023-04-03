import TextMessage from "../text-message/TextMessage";

export const TextMessages = ({ msgs }) => {
  return (
    <div>
      {msgs.map(({ msg, date }) => (
        <TextMessage key={date} msg={msg} date={date} />
      ))}
    </div>
  );
};
