import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Link from 'next/link';
import React from 'react';
const UserProfileUpdate = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <ProfileUpdate />
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserProfileUpdate;
