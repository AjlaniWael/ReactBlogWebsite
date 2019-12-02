//import models from server
var models = require('./server.js').models;
var toSave = [
    {name : 'wael1', email : 'wael1@gmail.com'},
    {name : 'wael2', email : 'wael2@gmail.com'},
    {name : 'wael3', email : 'wael3@gmail.com'},
    {name : 'wael4', email : 'wael4@gmail.com'},
    {name : 'wael5', email : 'wael5@gmail.com'},
]

//Find profile wael and modified it or in not exist, created it
/*models.Profile.findOrCreate({ name : 'wael ajlani'}, (error, profile) => {
    if (error)
    {
        console.log("there was an error", error);
    } else if (profile) {
        profile.email = "ajlani.wael@test.com" ;
        profile.save((ue, updated) => {
            console.log("updated?", updated);
        });
    } 
})
toSave.map( obj => {
    models.Profile.create(obj, (err, success) =>{
      console.log("Ajout?", success);
    });
});*/

/*var filter = {
    where : {},
    order : 'date ASC',
    limit : 3,
    include : {
        relation : 'Posts',
        scope : {
            limit : 5,
            order : 'date DESC',
            include : {
                relation : 'Image',
                limit : 1,
                where : {type : 'thumbnail'}
            }
        }
    }
} */
 /*var filter = {
    where : {
        email : {like : 'wael'},
        //gte,gt,lte,lt
        },
    order : 'id ASC',
    limit : 5,
    skip : 4,
    fields : {
        email : true
    }
    
} */
models.Profile.destroyById('5dcbdb667b0b012868b3993b',
    (err, succ) => {
        console.log("found?", err, succ);
    })