let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    /**
     * Test the GET route
     */
    describe("GET /api/blogs", () => {
        it("It should GET all Post", (done) => {
            chai.request(server)
                .get("/api/blogs")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });
        //Wrong URI
        it("It should NOT GET any Post", (done) => {
            chai.request(server)
                .get("/api/blogd")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });

    describe("GET /api/tags", () => {
        it("It should GET all tags", (done) => {
            chai.request(server)
                .get("/api/tags")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });
        //Wrong URI
        it("It should NOT GET Any Tags", (done) => {
            chai.request(server)
                .get("/api/tagss")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });
    describe("GET /api/categories", () => {
        it("It should GET all Categories", (done) => {
            chai.request(server)
                .get("/api/categories")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });
        //Wrong URI
        it("It should NOT GET Any categories", (done) => {
            chai.request(server)
                .get("/api/categoriess")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });
    describe("GET /api/blogs/search", () => {
        
        //
        it("It should NOT any blog with query", (done) => {
            chai.request(server)
                .get("/api/blogs/searcdh")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });

    describe("GET /api/signnup", () => {
        it("Unauth Singup", (done) => {
            chai.request(server)
                .get("/api/signnup")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
        //Wrong URI
        it("Unauth Singup wiht bad URI", (done) => {
            chai.request(server)
                .get("/api/signnup")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });



   




});


