import React, {Component} from 'react';
import ReactDOM from 'react-dom';

console.log('REACT!!!');

class App extends Component {
    render() {
        return (
            <h1>Hello from react</h1>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)