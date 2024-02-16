import app from './app'
import './database'

// app.get('/',(req,res) => {
//     res.send("holaaaaaa")
// })

app.listen(app.get('port'), () =>{
    console.log(`Se ha conectado al puerto ${app.get('port')}`)
})