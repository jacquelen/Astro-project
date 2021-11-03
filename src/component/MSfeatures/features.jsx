/* eslint-disable jsx-a11y/alt-text */
import { Card ,Row ,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import './features.css'
import  table from './assists/kanban-icon.svg'
import notification from './assists/app-notification-icon.svg'
import files  from './assists/file-icon.svg' 
import chat from './assists/discussion-icon.svg'
import collaborate from './assists/white-label-icon.svg'
import notepade from './assists/notes-icon.svg'
import bookmarks from './assists/bookmarks-icon.svg'
import priority from './assists/task-icon.svg'
import viewboard from './assists/activity-icon.svg'
import checklist from './assists/request-forms-icon.svg'
import Fade from 'react-reveal/Fade';
// 
import {Link} from "react-router-dom"
function Features(){


return(
    <>
    <Fade top>
    <Container className="mt-5">
  <Row>
    <Col sm={12} md={4} lg={4}>
      <Link to={"/kanbanboard"}  className="link-card">
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={table} className="card-icon"/>
    </Col>

    <Col  xs={6} className="col-p">
    <Card.Title className="p-card"> Kanban Boards</Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    Empower teams to self-manage as they move tasks from one stage to the other and visualize workflows in Kanban boards.
    </Card.Text>
  </Card.Body>
</Card>
    </Link>
    </Col>
    {/* 2 */}
    <Col  sm={12} md={4} lg={4} >
    <Link to={"/priority"} className="link-card" >
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={priority} className="card-icon"/>
    </Col>

    <Col  xs={6} className="col-p">
    <Card.Title className="p-card"> View Priority</Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    Add the Card Priority Power-Up to your board You can activate this add-on from the Power-Ups section in the
    </Card.Text>
  </Card.Body>
</Card>
</Link>
    </Col>
    {/* 3 */}
    <Col sm={12} md={4} lg={4}  >
    <Link to={"/Notification"} className="link-card" >
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={notification} className="card-icon"/>
    </Col>

    <Col  xs={6} className="col-p">
    <Card.Title className="p-card"> Notification</Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    Clear notifications flom the web app within a set timefnome. and we'll hold them from yuir other channels
    </Card.Text>
  </Card.Body>
</Card>
</Link>
    </Col>
  </Row>
 {/*  sec row */}
  <Row className="mt-4">
    <Col sm={12} md={4} lg={4} >
    <Link to={"/bookmarks"} className="link-card"  >
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={bookmarks} className="card-icon"/>
    </Col>

    <Col  xs={6} className="col-p">
    <Card.Title className="p-card"> BookMarks</Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    Favorites can greatly increase the speed at which you navigate Astro! You can think of them as bookmarks
     to the views you use and like the most.
    </Card.Text>
  </Card.Body>
</Card>
</Link>
    </Col>
    {/* 2 */}
    <Col sm={12} md={4} lg={4} >
    <Link to={"/Collaborate"} className="link-card">
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={collaborate} className="card-icon"/>
    </Col>

    <Col  xs={6} className="col-p">
    <Card.Title className="p-card"> Collaborate</Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
      Assign your tasks and subtasks to your team members and get notifications of your tasks and subtasks
    </Card.Text>
  </Card.Body>
</Card>
</Link>
    </Col>
    {/* 3*/}
    <Col sm={12} md={4} lg={4} >
    <Link to={"/quicknotepad"} className="link-card">
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={notepade} className="card-icon"/>
    </Col>
    <Col  xs={6} className="col-p">
    <Card.Title className="p-card"> Quick Notepad</Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    Take notes of project information or ideas to remember in Astro.
     Keep them organized and collaborate over them all at one place.
    </Card.Text>
  </Card.Body>
</Card>
</Link>
    </Col>
  </Row>
  {/* third row */}
   <Row className="mt-4">
    <Col sm={12} md={4} lg={4} >
    <Link to={"/Chat"} className="link-card"  >
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={chat} className="card-icon"/>
    </Col>
    <Col  xs={6} className="col-p">
    <Card.Title className="p-card"> Chat & Discussion</Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    Start one-on-one and group chats and turn team conversations quicker.
     Use emojis to express more with less and share files you want.
    </Card.Text>
  </Card.Body>
</Card>
</Link>
    </Col>
    {/* 2 */}
    <Col sm={12} md={4} lg={4} >
    <Link to={"/viewboard"} className="link-card" >
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={viewboard} className="card-icon"/>
    </Col>
    <Col  xs={6} className="col-p">
    <Card.Title className="p-card">View Boards </Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    teaam can start up Astro board in seconds. With ability 
    to view board data from many different angles,
     entire team stays up-to-date in the way that suits them best.
    </Card.Text>
  </Card.Body>
</Card>   
</Link>
    </Col>
    {/* 3 */}
    <Col sm={12} md={4} lg={4} >
    <Link to={"/checklist"} className="link-card" >
    <Card className="feature-card">
  <Card.Body className="p-2 body-card">
  <Row className="justify-content-center align-items-center icon-row">
    <Col  xs={2} className="col-icon" >
  <img src={checklist} className="card-icon"/>
    </Col>
    <Col  xs={6} className="col-p">
    <Card.Title className="p-card">CheckLists </Card.Title>
    </Col>
  </Row>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text className="text-card">
    You can add a checklist to any task to follow the work progress easier. 
    This is quite convenient when a task consists of several stages or features multiple participants.
    </Card.Text>
  </Card.Body>
</Card>
</Link>    
</Col>
  </Row>
</Container>
</Fade>
    </>
)
}













export {Features}