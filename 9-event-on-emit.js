const EventEmitter = require('events')

const customEvent = new EventEmitter()

customEvent.on('response', (param1, param2) => {
    console.log(`Event Fired! ${param1} ${param2}`)
})

customEvent.on('response', () => {
    console.log('Event Fired!')
})

customEvent.emit('response', 'hello1', 'hello2')