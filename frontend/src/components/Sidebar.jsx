import { ListGroup, ListGroupItem } from "react-bootstrap"

const Sidebar = () => {
  const rooms = ['first room', 'second room', 'third room']
  return (
    <>
      <h2>Avaiable rooms</h2>
      <ListGroup>
        {
          rooms.map((room, id) => (
            <ListGroupItem key={id}>
              {room}
            </ListGroupItem>
          ))
        }
      </ListGroup>
      <h2>Members</h2>
    </>
  )
}

export default Sidebar
