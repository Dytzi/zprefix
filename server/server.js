const express = require('express');
const app = express();
const port = 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

const cors = require('cors');

app.use(cors()); // need cors for front end 
app.use(express.json()); //used to parse json request 


app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))

// get request for a specific item
app.get('/items/:id', async function (req, res) {
    const {id}= req.params;
    try{
        let itemData = await knex('items')
        .select('*')
        .where('id', id)

        res.status(200).json(itemData)
    }catch(err){
        res.status(400).json({message: "an error occured", error: err.message })
    }

})


// get request to retrieve every item
app.get('/items', async function (req, res){
    try{
        let itemData = await knex('items').select("*"); //get all items
        res.status(200).json(itemData);
    }catch (err){
        res.status(400).json({message: "an error occured", error: err.message })

    }
})

// get request to retrieve every item belonging to the logged in user

app.get('/my-inventory/:userid', async function(req,res) {
    const {userid} = req.params
    console.log(userid)
    try{
        let itemData = await knex('items')
        .select('*')
        .where('user_id', userid)

        res.status(200).json(itemData)
    }catch(err){
        res.status(400).json({message: "an error occured", error: err.message })
    }
})





// post request of user login

app.post('/users', async function(req, res) {

    const {username, password} = req.body

    if(!username || !password){
        res.status(400).json({message: "username and password required"})
    }

    try{
        let user = await knex('users')  // get the id and password of matching username
            .select('id', 'password')
            .where('username', 'ilike', username);

        if (user.length == 0){ // if user not found send status 400
            return res.status(400).json({message: "user not found"})

        }

        if (password == user[0].password){ //return user id if password is a match 
            res.status(200).json({id: user[0].id})
        }else{
            res.status(400).json({message: 'invalid password'})
        }
    }catch(err){
        res.status(400).json({message: "an error occured", error: err.message })
    }})


//post request for account creation 

app.post('/users-create', async function(req, res) {

    const {username, password, firstName, lastName} = req.body

    if(!username || !password || !firstName || !lastName){
        res.status(400).json({message: "all forms must be filled out"})
    }

    try{
        let existingUser = await knex('users')
        .select('*')
        .where('username', username)

        if (existingUser.length > 0){
            return res.status(400).json({message: "username already taken"})
        }

        let newData = await knex('users')
        .insert({first_name: firstName, last_name: lastName, username, password})
        .returning("*");

        res.status(200).json({message: "new user added", data: newData})
        
    }catch(err){
        res.status(400).json({message: "an error occured", error: err.message })
    }})

//post request for item creation

app.post('/item-create', async function(req, res) {

    const {user_id, item_name, description , quantity} = req.body

    if(!user_id || !item_name || !description || !quantity){
        res.status(400).json({message: "all forms must be filled out"})
    }

    try{
        let newData = await knex('items')
        .insert({user_id, item_name, description, quantity})
        .returning("*");

        res.status(200).json({message: "new item added", data: newData})
        
    }catch(err){
        res.status(400).json({message: "an error occured", error: err.message })
    }})

