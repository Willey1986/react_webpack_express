import React, {Component} from 'react';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(jsondata => this.setState({data: jsondata}))
    }

    render() {
        const listItems = this.state.data.map(item => <li>{item.id + " --- " + item.name}</li>)

        return (
            <div style={{textAlign: 'center'}}>
                <ul>{listItems}</ul>
            </div>
        );
    }
}