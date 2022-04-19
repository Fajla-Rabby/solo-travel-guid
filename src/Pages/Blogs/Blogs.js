import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>Question one:</h2>
                <Table className='container' striped bordered hover>
                    <thead>
                        <tr>
                          
                            <th>Authentication</th>
                            <th>Authorization</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>Authentication verifies who the user is.</td>
                            <td>Authorization determines what resources a user can access.</td>
                           
                        </tr>
                        <tr>
                           
                            <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                            <td>Authorization works through settings that are implemented and maintained by the organization.</td>
                           
                        </tr>
                        
                    </tbody>
                </Table>
                <div>
                    <h2>Question 2</h2>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                </div>
               
            </div>
        </div>
    );
};

export default Blogs;