import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';

import React from 'react';
import { isAuth } from '../../actions/auth';
let userid=isAuth() && isAuth()._id;
const SingleBlog = ({ blog, query ,userid}) => {
    const [related, setRelated] = useState([]);

    const loadRelated = (userid) => {
        listRelated({ blog ,userid}).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated(userid);
    }, []);

    const head = () => (
        <Head>
            
        </Head>
    );

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            // <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            // </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            // <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            // </Link>
        ));

    

    
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <Private>
                <main>
                    <article>
                        <div className="container-fluid">
                            <section>
                                <div className="row" style={{ marginTop: '-30px' }}>
                                    <img
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                        className="img img-fluid featured-image"
                                    />
                                </div>
                            </section>

                            <section>
                                <div className="container">
                                    <h1 className="display-2 pb-3 pt-3 text-center font-weight-bold">{blog.title}</h1>
                                    <p className="lead mt-3 mark">
                                        Written by{' '}
                                        <Link href={`/profile/${blog.postedBy.username}`}>
                                            <a>{blog.postedBy.username}</a>
                                        </Link>{' '}
                                        | Published {moment(blog.updatedAt).fromNow()}
                                    </p>
                                    <h1>SINLGLE POST</h1>
                                    <div className="pb-3">
                                        {showBlogCategories(blog)}
                                        {showBlogTags(blog)}
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="container">
                            <section>
                                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                            </section>
                        </div>

                        
                    </article>
                </main>
                </Private>
            </Layout>
        </React.Fragment>
    );
};
userid=isAuth() && isAuth()._id;
SingleBlog.getInitialProps = ({ query,userid=isAuth() && isAuth()._id}) => {

    return singleBlog(query.slug,userid=isAuth() && isAuth()._id).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data, query,userid };
        }
    });
};

export default SingleBlog;
