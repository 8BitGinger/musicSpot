const token = 'BQD1T74aB3cAmjqIKKg8A51vheRgjtvRBZVocm3Yq647FkjkH1ltBlVMOqSQmZPwNPHzFj2e1S5a7ZwWX5MyQGjZ8HmtvV228PERHHsh_0ghZnBO1kZAE5Z3UXKolUCoO7AHqFwXCY6yP3wEjZ6ApZLrUFoo7CMqdD-IbnGktpzvZz1W-WRPckhutW5yH-ULFt9yYA';

//standard fetch method.  The HTML example works with premium only.  You will need to build app then use the parsed json data to link it to inner html for standard





async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}


