const EventEmitter = require('events');

const chatEmitter = new EventEmitter();

function sendMessage(username, message, emitter) {
    emitter.emit('message', username, message);
}

chatEmitter.on('message', (username, message) => {
    console.log(`${username}: ${message}`);
});

sendMessage('Татьяна', 'Всем привет!', chatEmitter);
sendMessage('Игорь', 'Привет, Татьяна!', chatEmitter);
sendMessage('Марина', 'Доброе утро!', chatEmitter);
