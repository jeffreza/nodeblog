const express = require ('express');
const app = express();
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog',{useUnifiedTopology: true, useNewUrlParser: true });

app.set('view engine', 'ejs');
app.use('/articles',articleRouter);



app.get('/',(req,res)=>
{
    try {

        const articles = [{

            title: 'test article',
            createdAt: new Date(),
            description: 'test description'
    
        },
        {
    
            title: 'test article2',
            createdAt: new Date(),
            description: 'test description'
    
        }
    ];
        res.render('articles/index',{articles:articles});
        
    } catch (error) {
        console.log(error);
    }
    
    
   

});
app.listen(5000);
