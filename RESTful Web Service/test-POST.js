const client = require('node-fetch');

(async () => {
  const body = {
    name: "mary",
    age: 17,
    attack: 99,
    defense: 99
  }

  const resp = await client('http://localhost:3000/hogRider', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const data = await resp.json();
  console.log(data);
})();
