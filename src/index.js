import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav'
import Top from './Top'
import Menu from './Menu'

class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Nav></Nav>
                    <Route exact path='/' component={Top}/>
                    <Route path='/menu' component={Menu}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


