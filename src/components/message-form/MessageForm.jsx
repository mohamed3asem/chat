import { Button, Form } from "react-bootstrap";

const MessageFrom = () => {
  return (
    <Form className="d-flex">
      <Form.Group className="mx-1 flex-grow-1">
        <Form.Control type="text" placeholder="Write your message ..." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MessageFrom;
