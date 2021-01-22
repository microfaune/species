import './App.css';
import HomePage from './pages/HomePage'
import AboutAppPage from './pages/AboutAppPage'
import BirdPage from './pages/BirdPage'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function App() {
	return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/api/v1/birds/:id'>
                        <BirdPage />
                    </Route>
                    <Route path='/about-the-app'>
                        <AboutAppPage />
                    </Route>
                    <Route>
                        <h3>404 Not found</h3>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
	);
}

export default App;
