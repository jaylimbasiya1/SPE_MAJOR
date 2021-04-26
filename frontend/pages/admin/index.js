import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import BlogRead from '../../components/crud/BlogRead';
import { isAuth } from '../../actions/auth';
import Link from 'next/link';
import React from 'react';
const AdminIndex = () => {
    const username = isAuth() && isAuth().username;
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/admin/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="col-md-8">right</div> */}
                    </div>
                </div>
                {/* <div>
                All the blog by  this user posrt here `{username}`
                <BlogRead username={username} />
                </div> */}
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
