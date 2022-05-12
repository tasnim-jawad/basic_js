fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => getData(json))


  getData = get => console.log(get);