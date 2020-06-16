const express = require ('express');
const app = express();
const articleRouter = require('./routes/articles');

app.set('view engine', 'ejs');
app.use('/articles',articleRouter);

app.get('/',(req,res)=>{

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
    res.render('index',{articles:articles});
   

});
app.listen(5000);
