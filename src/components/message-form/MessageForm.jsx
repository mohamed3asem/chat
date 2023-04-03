import { useState} from 'react'
import { Button, Form } from "react-bootstrap";

const MessageFrom = ({setMsgs}) => {
  const [msg, setMsg] = useState('')

  const submitMsg = (e) => {
    e.preventDefault()
    setMsgs((msgs) =>[...msgs, {msg, date: Date.now()}] )
    setMsg('')
  }

const changeMsg = (e) => {
  e.preventDefault()
  const typedMsg = e.target.value
  setMsg(typedMsg)
}

  return (
    <Form className="d-flex" onSubmit={submitMsg}>
      <Form.Group className="mx-1 flex-grow-1">
        <Form.Control type="text" placeholder="Write your message ..." value={msg} onChange={changeMsg} />
      
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!!!msg}>
        Submit
      </Button>
    </Form>
  );
};

export default MessageFrom;
