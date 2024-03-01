const express =require('express')
const cors = require('cors')
const app =express()
const expressLayout = require('express-ejs-layouts');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

var corOptions ={
    origin: 'https://localhost:8081'
}

const teacherrouter=require('./routes/teacherRouter.js')
app.use('/teacher',teacherrouter)
const studentrouter=require('./routes/studentRouter.js')
app.use('/student',studentrouter)

app.use(cors(corOptions))

app.get('/',(req,res)=>{
    // res.json({message : 'hello from api'})
    const locals={
        title: "Results Portal",
        desc:"A nodeJs Result Management System"
    }
    res.render("index",locals);

})

const PORT =process.env.PORT || 8090

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', 'layouts/layout');

app.listen(PORT,() => {
    console.log('server is running port %d',PORT)
})