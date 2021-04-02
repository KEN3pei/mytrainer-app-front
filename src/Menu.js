import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Slider from "react-slick";
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
        this.getTrainingImage = this.getTrainingImage.bind(this)
    }

    getTrainingImage(){
        const url = 'http://localhost:8080/menu'
        axios.post(url)
        .then((res) => {
            this.setState({ data: res.data })
            console.log("console.log....", res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        console.log("Get Req Start !!!")
    }

    render(){
        const Menu = <p>Menuページ</p>
        let base64ListItems = ""       
        if(this.state.data.length !== 0){
            base64ListItems = this.state.data.map((imgData) => 
                <div key={imgData.id} className="image-contents">
                    <p>Name : {imgData.name}</p>
                    <p>Count : {imgData.range}</p>
                    <img src={`data:image/jpeg;base64,${imgData.data}`} style={{ width: '300px' }}/>
                 </div>
            )
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
                {Menu}
                <button onClick={this.getTrainingImage}>create menu</button>
                {/* mapメソッドでroop処理を行う */}
                {/* {base64ListItems} */}
                
                <Slider {...settings}>
                {base64ListItems}
                </Slider>
            </div>
        )
    }
}

export default Menu