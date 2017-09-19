import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

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
        const listItems = this.state.data.map(item => {
            return (
                <TableRow>
                    <TableRowColumn style={{color: 'red'}}>{item.id}</TableRowColumn>
                    <TableRowColumn style={{fontWeight: 'bold'}}>{item.name} aaa</TableRowColumn>
                </TableRow>
            )
        });

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <Table>
                        <TableBody>
                            {listItems}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        );
    }
}