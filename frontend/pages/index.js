import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                               Post Study Notes and tutorials Here!
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best programming and web development blogs and tutorials on React Node NextJs and
                                JavaScript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                        'url(' +
                                        'https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_960_720.jpg' +
                                        ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">UPSC</h2>
                                </div>
                                <div className="back text-center">
                                    
                                            <h3 className="h1">UPSC</h3>
                                    
                                    <p className="lead">Not being efficient in English is a big disadvantage for UPSC
</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_960_720.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Engineering </h2>
                                </div>
                                <div className="back text-center">
                               
                                        <a href="https://www.import.io/post/post-capture-url-of-image-with-data-extraction/" target="_blank">
                                            <h3 className="h1">Engineering </h3>
                                        </a>
                               
                                    <p className="lead">
                                    Getting 75 percent attendence in each subject becomes more difficult than getting 75 percent marks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_960_720.jpg' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Medical</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/nextjs">
                                        <a>
                                            <h3 className="h1">Medical</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">We love COVID-19 , Best time to earn Loat of Money...!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;