//módulos
const express = require('express')
const path = require('path')

const app = express()
//serviço http
const http = require('http').Server(app)
const io = require('socket.io')(http)

//arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
//view engine
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

//rota raiz
app.use('/', (req, res) => {
  res.render('index.html')
})

//rodando serviço
http.listen(4000, () => {
  console.log("serviço rodando na porta 4000")
})