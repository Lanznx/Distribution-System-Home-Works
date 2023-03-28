const server = require('fastify')();

let john = {
    name: "john",
    age: 18,
    attack: 100,
    defense: 100
};

let tom = {
    name: "tom",
    age: 19,
    attack: 105,
    defense: 90
};

let hogRiders = [john, tom];

server.get('/hogRider', function (req, res) {
    return hogRiders;
});

server.get('/hogRider/:name', function (req, res) {
    const name = req.params.name;
    const result = hogRiders.find(hogRider => hogRider.name === name);
    if(!result) {
        return {error: "Not found"};
    }
    return result;
});

server.post('/hogRider', function (req, res) {
    const newRider = JSON.parse(req.body);
    hogRiders.push(newRider);
    return {count: hogRiders.length};
});

server.put('/hogRider/:name', function (req, res) {
    // 請依Lab說明寫作
});


server.listen(3000, "127.0.0.1");
