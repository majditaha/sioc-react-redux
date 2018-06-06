import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Aside from './Aside';

import Dashboard from './Dashboard';
import General from './Dwellings/DwellingEditor/General';
import Characteristics from './Dwellings/DwellingEditor/Characteristics';
import Description from './Dwellings/DwellingEditor/Description';

import SearchDwellings from './Dwellings/Search';
import Latest from './Dwellings/Latest';
import Reports from './Dwellings/Reports';
import Bookmark from './Dwellings/Bookmark';

import NewClient from './Clients/New';
import SearchClients from './Clients/Search';

import AddTeam from './Team/AddTeam';
import ListTeam from './Team/ListTeam';
import Ask from './Team/Ask';

import AddUser from './Users/AddUser';
import ListUser from './Users/ListUser';

class Admin extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="app">
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb/>
                        <Container fluid>
                            <Switch>
                                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>

                                <Route path="/dwellings/general" component={General}/>
                                <Route path="/dwellings/characteristics" component={Characteristics}/>
                                <Route path="/dwellings/description" component={Description}/>
                                <Route path="/dwellings/search" name="Search" component={SearchDwellings}/>
                                <Route path="/dwellings/latest" name="Latest" component={Latest}/>
                                <Route path="/dwellings/reports" name="Reports" component={Reports}/>
                                <Route path="/dwellings/bookmark" name="Bookmark" component={Bookmark}/>

                                <Route path="/clients/new" name="New" component={NewClient}/>
                                <Route path="/clients/search" name="Search" component={SearchClients}/>

                                <Route path="/team/add" name="Add" component={AddTeam}/>
                                <Route path="/team/list" name="List" component={ListTeam}/>
                                <Route path="/team/ask" name="Ask" component={Ask}/>

                                <Route path="/users/add" name="Add" component={AddUser}/>
                                <Route path="/users/list" name="List" component={ListUser}/>
                                <Redirect from="/" to="/dashboard"/>
                            </Switch>
                        </Container>
                    </main>
                    <Aside/>
                </div>
            </div>
        );
    }
}

export default Admin;
