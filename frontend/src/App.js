import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {User} from "./components/User/User";
import {Group} from "./components/Group/Group";
import {NavBar} from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Route exact path={['', '/', '/users']} render={() => <User/>}/>
            <Route path='/groups' render={() => <Group/>}/>
        </BrowserRouter>
    );
}

export default App;
