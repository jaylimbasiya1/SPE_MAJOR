import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Analytics from '../../components/auth/Analytics';
import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';
const UserProfileUpdate = () => {
    return (
        <Layout>
            <Private>       
                <div className="container-fluid">
                   
                       <Analytics/>
                                   </div>
            </Private>
        </Layout>
    );
};

export default UserProfileUpdate;
