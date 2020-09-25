import React from 'react';
import ExperiencePage from './routes/experience.route';
import InfoPage from './routes/info.route';
import ManagementPage from './routes/management.route';
import NotesPage from './routes/notes.route';
import ProjectsPage from './routes/projects.route';
import UsersPage from './routes/users.route';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ContentHeader from './components/contentHeader.component';
import Sidebar from './components/sidebar.component';
import './style/dashboard.style.css';

function Dashboard() {
    return(
        <BrowserRouter basename='/dashboard'>
            <Container fluid className='dashboard-page-wrapper'>
                <Row>
                    {/* sidebar */}
                    <Col md='2' className='no-padding'>
                        <Sidebar />
                    </Col>

                    {/* content */}
                    <Col md='10' className='no-padding'>

                        {/* contant header */}
                        <ContentHeader />

                        {/* routes */}
                        <div className='content'>
                            <Switch>
                                <Route path='/' exact component={ManagementPage} />
                                <Route path='/info' component={InfoPage} />
                                <Route path='/experience' component={ExperiencePage} />
                                <Route path='/projects' component={ProjectsPage} />
                                <Route path='/notes' component={NotesPage} />
                                <Route path='/users' component={UsersPage} />
                            </Switch>
                        </div>
                    </Col>

                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default Dashboard;