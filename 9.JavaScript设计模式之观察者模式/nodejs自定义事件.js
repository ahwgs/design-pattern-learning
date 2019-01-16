const EventEmitter = require('event').EventEmitter
const emitter1 = new EventEmitter()

emitter1.on('some',()=>{
    //监听
    console.log('some event 1')
})

emitter1.on('some',()=>{
    //监听
    console.log('some event 2')
})

emitter1.emit('some')

class Dog extends EventEmitter{
    constructor(name){
        super();
        this.name = name
    }
}
var simon = new Dog('simon')
simon.on('back',function () {
    console.log('---'+this.name +'back')
})
setInterval(()=>{
    simon.emit('back')
},500)