import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Main extends React.component {
    constructor (props) {
        super(props)
        this.state = {
            students: []
        }
    }

    async componentDidMount () {
        try {
            const response = await axios.get('/student')
            const students = response.data; // data is right there! No `await response.json()` nonsense!
            console.log('Got students: ', students)
            this.setState({students})

        } catch (err) {
            console.log('There was a problem getting students!')
        }
    }
    render () {
        return(
            <div id='main'>
                <h1>STUDENTS</h1>
                <div id='container'>
                    <table>
                        <tbody>
                        <tr>
                            <th>Name {this.state.students[0]}</th>
                            <th>Name</th>
                            <th>Name</th>
                            <th>Name</th>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}





