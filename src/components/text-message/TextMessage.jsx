import { Card } from "react-bootstrap";


const TextMessage = ({date, msg}) => {
  return (
  <Card style={{width: 'fit-content', display: 'flex', flexDirection: 'column', padding: 6, marginBottom: 5 ,color: '#000000', borderColor: '#000000',fontSize: '12px', fontWeight: 400}} >
    <div style={{ display: 'flex' }}>
    <p className="my-0" style={{ marginRight: 20 }}>John Doe</p>
    <p className="my-0">{new Date(date).toLocaleDateString()}</p>
    </div>
    <p className="my-0">{msg}</p>
  </Card>
  )
};

export default TextMessage;
