import { MongoClient } from 'mongodb';

const dbstate = {
    db: null
}

function connect (url, done){
    if (dbstate.db) return done();

    MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
        if (err) return done(err);
        dbstate.db = db;
        done();
    })
}

function get(){
    return dbstate.db;
}

function close(){
    if (dbstate.db) {
        dbstate.db.close(function(err, result){
            dbstate.db = null;
            dbstate.mode = null;
            done(err);
        })
    }
}

export default {
    connect: connect,
    get: get,
    close: close
}