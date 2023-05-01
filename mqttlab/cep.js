const mqtt = require('mqtt');
const client = mqtt.connect();
client.subscribe("EVENT");

let eventSeq = ['CO', 'CF', 'DO', 'DF'];

client.on('message', function (topic, message) {
    let item = eventSeq[0]; // 取得eventSeq的第一個元素
    // 除錯用
    // message是Buffer型別，要用message.toString()才能取得字串值
    console.log('input: ' + message.toString());
    console.log('expected: ' + item);

    if(message.toString() == item){
        eventSeq.shift();
        item = eventSeq[0];
    }
    if(eventSeq.length == 0){
        client.publish('EVENT', 'LEAVE');
        eventSeq = ['CO', 'CF', 'DO', 'DF'];
    }
});

