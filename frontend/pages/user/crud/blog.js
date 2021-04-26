import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';
import React from 'react';
const CreateBlog = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new blog</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default CreateBlog;
