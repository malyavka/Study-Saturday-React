import axios from "axios";

console.log('Hello Webpack!');
import React from 'react';
import ReactDOM from 'react-dom';
import Students from './components/studentList';



export default class Main extends React.component {
    constructor () {
        super()
        this.state = {
            students: []
        }
    }
    async componentDidNount () {
        try {
            const response = await axios.get('/student')
            const students = response.data; // data is right there! No `await response.json()` nonsense!
            console.log('Got students: ', students)
        } catch (err) {
            console.log('There was a problem getting students!')
        }
    }
    render () {
        return(
            <div id='main'>
                <h1>STUDENTS</h1>
                <div id='container'>
                    <Students students = {this.state.students} />
                </div>
            </div>
        )
    }
}
