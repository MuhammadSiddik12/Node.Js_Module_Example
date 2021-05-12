const EventEmitter = require('events')
const event = new EventEmitter()
event.on('saymyname',()=>{
    console.log('My name is siddik')
})
event.on('saymyname',()=>{
    console.log('My name is Muhammad siddik')
})
event.on('saymyname',()=>{
    console.log('My name is Muhammad siddik akbar')
})
event.emit('saymyname')