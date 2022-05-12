fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => getData(json))

// getData = getResource =>console.log(getResource);


getData = getResource => {
  let userName = getResource.map(names => names.username )
  for (let i = 0; i < userName.length; i++) {
    const element = userName[i];
    console.log();
    let addname = document.getElementById('userName');
    let list = document.createElement('li');
        list.innerHTML = '<a>' + element + '</a>';
        addname.appendChild(list);
  }
}


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then(data => creatingData(data));

// creatingData = data =>{

// }