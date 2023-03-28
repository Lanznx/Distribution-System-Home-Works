const client = require('node-fetch');

(async () => {
  const body = {
    name: "tom",
    age: 99,
    attack: 0,
    defense: 0
  }

  const resp = await client('http://localhost:3000/hogRider/tom', {
    method: 'PUT',
    body: JSON.stringify(body),
  });

  const data = await resp.json();
  console.log(data);
})();
