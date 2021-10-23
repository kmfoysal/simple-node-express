const express = require('express');
const app = express();
const cors = require("cors")
const port = 5000 ;

app.use(cors());
app.use(express.json());

const users = [
    {id:0, name:'foysal', phone:'01723472285'},
    {id:1, name:'efti', phone:'01823472285'},
    {id:2, name:'mahabub', phone:'01523472285'},
]

app.get('/', (req, res)=>{
    res.send('Hello World, Welcome. I am excited');
});

app.get('/users', (req, res)=>{
    res.send(users);
})

// Post Method 
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('Hitting Post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})




// Dynamic Parameter 
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

// Use Query Parameter 

app.get('/users',(req, res)=>{
   const search = req.query.search;

   if(search){
       const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
       res.send(searchResult);
   }
   else{
       res.send(users);
   }
})

app.listen(port, ()=>{
    console.log('app is running at port no.', port);
});