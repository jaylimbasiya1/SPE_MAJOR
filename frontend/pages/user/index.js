import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import { isAuth } from '../../actions/auth';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>User Dashboard</h2>
                            
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">Create Post</a>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Post</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/user/update">Update profile</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/user/analytic">User Analytics</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;
