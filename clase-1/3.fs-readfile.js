const fs = require('node:fs')
const { text } = require('stream/consumers')

console.log('leyendo el primer archivo....')
fs.readFile('./archivo.txt','utf-8',(err, text)=>{ //callback
    console.log('primer texto',text)
})

console.log('------> Hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo....')
fs.readFile('./archivo2.txt','utf-8',(err,text)=>{
    console.log('segundo texto',text)
})