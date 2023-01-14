import express from 'express'
const app=express()
import session from 'express-session'
import router from './routes/web.js'

app.use(
  session({
    name: "sessiongeek",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
  })
);
app.use("/", router);






const port=process.env.PORT||3000

app.listen(port,()=>{
    console.log('server started');
})

