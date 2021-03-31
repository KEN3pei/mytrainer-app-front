import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';

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
            // console.log(res.data)
            // console.log(res.data[1])
            // console.log(res.data[2])
            // console.log(res.data[3])
            // console.log(res.data[4])
        })
    }

    render(){
        return (
            <div>
                <p>Menuページ</p>
                <button onClick={this.getTrainingInfo}>create menu</button>
                {/* <p>{this.state}</p> */}
                <img src={`data:image/jpeg;base64,${this.state.data}`} style={{ width: '300px' }}/>
                <Carousel>
                    <div>
                        <img src="assets/1.jpeg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Menu