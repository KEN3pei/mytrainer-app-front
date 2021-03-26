import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

class Menu extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
        this.getTrainingInfo = this.getTrainingInfo.bind(this)
    }

    getTrainingInfo(){
        const url = 'http://localhost:8080/menu'

        axios.post(url).then((res) => {
            this.setState({ data: res.data })
            console.log(res.data[0])
            console.log(res.data[1])
            console.log(res.data[2])
            console.log(res.data[3])
            console.log(res.data[4])
        })
    }

    render(){
        return (
            <div>
                <p>Menuページ</p>
                <button onClick={this.getTrainingInfo}>create menu</button>
                {/* <p>{this.state}</p> */}
            </div>
        )
    }
}

export default Menu