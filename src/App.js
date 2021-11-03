import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './component/home/home';
import { Kanbanboard } from './component/kanbanboard/kanban';
import { Priority } from './component/priority/priority';
import { Notification } from './component/notifiaction/notifiaction';
import { Bookmarks } from './component/bookmarks/bookmarks';
import { Collaborate } from './component/colllaborate/collaborate';
import { Quicknotepad } from './component/quicknotepad/quicknotepad';
import { Chat } from './component/chat/chat';
import { Viewboard } from './component/viewboard/viewboard';
import { Checklist } from './component/checklist/checklist';
import{BrowserRouter, Route , Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
<div>
<Switch>
<Route component={Home} path="/"exact />
<Route component ={Kanbanboard} path="/kanbanboard"/>
<Route component ={Priority} path="/priority"/>
<Route component={Notification} path="/Notification"/>
<Route component={Bookmarks} path="/bookmarks" />
<Route component={Collaborate} path="/Collaborate" />
<Route component={Quicknotepad} path="/quicknotepad" />
<Route component={Chat} path="/Chat" />
<Route component={Viewboard} path="/viewboard" />
<Route component={Checklist} path="/checklist" />

</Switch>
</div>

</BrowserRouter>
</>
    );
}

export default App;
