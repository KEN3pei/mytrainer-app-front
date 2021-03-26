import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render(){
        return(
            <div>
                <Link to="/">Top</Link><br/>
                <Link to="/menu">Menu</Link>
            </div>
        )
    }
}

export default Nav;