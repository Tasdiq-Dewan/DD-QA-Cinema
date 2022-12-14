const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require("./TestAPICall.js");
const expect = chai.expect;
const mongoose = require("mongoose");
const {createData, clearCollections} = require("../src/TestInit.js")

const post1 =
    {
        Post_id:1,
        Username:"Dzza",
        PostTitle:"I am Legend Review",
        PostMessage:"Dog dies, init"
    };
    
    
const post2 =
        {
            Post_id:2,
            Username:"TheVikingCoder",
            PostTitle:"I am fake",
            PostMessage:"Daniyal is real, I am fake, I am sorry for being fake, thank you babes"
        };


const post3 =
{
    Post_id:3,
    Username:"Paul",
    PostTitle:"Batman review",
    PostMessage:"worst movie ever"
};

chai.should();
describe("Discussions API Test", function(){
    before(function(done){
        mongoose.connect("mongodb://localhost:27017/qa-cinema-test",  function(err) {
            done();
        });
    });
    after(function(done){
        mongoose.connection.close();
        done();
    })
    this.beforeEach(async () => {
        await clearCollections();
        await createData();
    });
    it("should get all discussion post", function(done){
        chai.request(app)
                 .get('/api/getAllPosts')
                 .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.eql([post1, post2]);
                    done();
        });
    })
    it("should create a new post", function(done){
        chai.request(app)
                 .post('/api/addDiscussionPost').send(post3)
                 .end((err, res) => {
                    res.body = JSON.parse(res.text);
                    delete res.body._id;
                    delete res.body.__v;
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.eql(post3);
                    done();
        });
    })
    it("should delete a post", function(done){
        chai.request(app)
                 .del('/api/deletePost/2')
                 .end((err, res) => {
                    //res.body = JSON.parse(res.text);
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    //expect(res.body).to.be.eql({"acknowledged":true,"deletedCount":1})
                    done();
        });
    })
});
