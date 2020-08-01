const express = require('express')
const app = express()
const server = require('http').createServer(app);
const path = require('path')
const port = process.env.PORT || 5000
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')



app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
//const mongoURI = 'mongodb+srv://hrach:hrach@cluster0.impfb.mongodb.net/mydb?retryWrites=true&w=majority'
// const mongoURI = process.env.MONGODB_URL || 'mongodb+srv://virap:erevan10@cluster0-vxh3h.mongodb.net/test?retryWrites=true&w=majoritys';
 const mongoURI = "mongodb://localhost:27017/mydb"

mongoose
  .connect(
    mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

 //if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join (__dirname, './','build');
  app.use (express.static (publicPath));
  app.get ('*', (req, res) => { 
       
      res.sendFile (path.join (publicPath, 'index.html')); 
   })
//   }

app.use('/additem',require('./routes/addFilmItem'))


app.use((req,res,next)=>{
  const error = new Error('Note Found');
  error.status = 404;
  next(error)
})
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  })
})

server.listen(port, function () {
  console.log('Server is running on port: ' + port)
})