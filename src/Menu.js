import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Slider from "react-slick";
import { Button } from '@material-ui/core'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
// FIXME 後々Hookを利用するように書き方を変える
class Menu extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.history.push('/')
    }

    render(){
        let base64ListItems = ""   
        // console.log(this.props.location.state)   
        if(this.props.location.state){
            base64ListItems = this.props.location.state.data.map((imgData) => 
                <div key={imgData.id} className="image-contents">
                    <img src={`data:image/jpeg;base64,${imgData.data}`}/>
                    <p>{imgData.name}</p>
                    <p>Count : {imgData.range}</p>
                 </div>
            )
        }else{
            // もしstateを失っていたらtopページに飛ばす
            this.props.history.push('/')
        } 
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <div>
                <Button color="primary" onClick={this.handleClick} >
                    Topページへ
                </Button>
                {/* mapメソッドでroop処理を行う */}
                {/* {base64ListItems} */}
                <Slider {...settings}>
                {base64ListItems}
                </Slider>
                {/* <button onClick={this.getTrainingImage}>create menu</button> */}
            </div>
        )
    }
}

export default Menu