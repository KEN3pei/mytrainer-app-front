import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'
import "./index.css"
import bgImage from './top-bg.jpeg'
import axios from 'axios'

class Top extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.getTrainingImage = this.getTrainingImage.bind(this)
    }

    handleClick(){
        this.props.history.push({
            pathname: '/menu',
            state: { data: this.state.data }
        })
    }

    getTrainingImage(){
        const url = 'http://localhost:8080/menu'
        axios.post(url)
        .then((res) => {
            this.setState({ data: res.data })
            console.log("console.log....", res.data)
            this.handleClick()
        })
        .catch((err) => {
            console.log(err)
        })
        console.log("Get Req Start !!!")
    }

    render(){
        const Style = {
            backgroundImage:`url(${bgImage})`,
            backgroundSize: 'cover',
            height: '97vh',
            backgroundColor: "rgba(255,255,255,0.6)",
            backgroundBlendMode: 'lighten',
            backgroundPosition: 'center'
            // height: '100%',
        }
        return(
            <div id="menu" style={Style}>
                {/* <p>Topページ</p> */}
                <div className="contents-button">
                <Button color="primary" onClick={this.getTrainingImage} className="top-material-button">
                    create menu
                </Button>
                </div>
            </div>
        )
    }
}

export default Top