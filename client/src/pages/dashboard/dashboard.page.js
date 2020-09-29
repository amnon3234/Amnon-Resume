import React, { useContext } from 'react';
import ManagementPage from './routes/management.route';
import ModelView from './routes/modelView.route';
import {MainContext} from './../../context/main.context';
import {AdminRoute, AuthenticatedRoute } from './../../context/auth.context';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Switch} from 'react-router-dom';
import ContentHeader from './components/contentHeader.component';
import Sidebar from './components/sidebar.component';
import { projectsTemplate, experienceTemplate, noteTemplate, userTemplate } from './consts';
import './style/dashboard.style.css';
import './style/routes.style.css';


function DashboardRoutes() {
    const context = useContext(MainContext);
    const [experience, setExperience] = context.experience;
    const [projects, setProjects] = context.projects;
    const [notes, setNotes] = context.notes;
    const [users, setUsers] = context.users;

    return (
        <Switch className='no-padding'>
            
            <AuthenticatedRoute path='/' exact>
                <ManagementPage />
            </AuthenticatedRoute>

            <AdminRoute path='/info' exact>
                
            </AdminRoute>

            <AdminRoute path='/experience'>
                <ModelView 
                    model={experience}
                    template={experienceTemplate}
                    setItem={setExperience}
                />
            </AdminRoute>

            <AdminRoute path='/projects'>
                <ModelView 
                    model={projects}
                    template={projectsTemplate}
                    setItem={setProjects}
                />
            </AdminRoute>
            
            <AdminRoute path='/notes'>
                <ModelView 
                    model={notes}
                    template={noteTemplate}
                    setItem={setNotes}
                />
            </AdminRoute>

            <AdminRoute path='/users'>
                <ModelView 
                    model={users}
                    template={userTemplate}
                    setItem={setUsers}
                    onlyTable={true}
                />
            </AdminRoute>


        </Switch>
    );
}

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

                        {/* content header */}
                        <ContentHeader />

                        {/* routes */}
                        <div className='content'>
                            <DashboardRoutes />
                        </div>
                        
                    </Col>

                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default Dashboard;