// fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//   console.log(response);
//   response.json().then(data => {
//     console.log(data);
//     for (const post of data){
//       console.log(post.title);
//     }
//   })
// })


// ______________________________________________________________________________________________________

// fetch('https://jsonplaceholder.typicode.com/photos').then(infos => {
//   infos.json().then(work_data => {
//     console.log(work_data);
//     if (work_data instanceof Array) {
//       for (const data of work_data) {
//         console.log(data.url);
//       }
//     }
//   })
// })

// ______________________________________________________________________________________________________

// Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/posts'),
//   fetch('https://jsonplaceholder.typicode.com/albums'),
//   fetch('https://jsonplaceholder.typicode.com/users')
// ]).then(([promise_content1, promise_content2, promise_content3]) => {
//   Promise.all([
//     promise_content1.json(),
//     promise_content2.json(),
//     promise_content3.json()
//   ]).then(([posts, albums, users]) => {
//     console.log(posts);
//     console.log(albums);
//     console.log(users);
//   })
// })

// ______________________________________________________________________________________________________

// fetch('https://jsonplaceholder.typicode.com/users').then(promise_response => {
//   console.log(promise_response);
//   promise_response.json().then(data => {
//     console.log(data instanceof Array);
//     console.log(data);
//     console.log(data.length);
//   }
//   )
// })

// ______________________________________________________________________________________________________

Promise.all([
  fetch('https://jsonplaceholder.typicode.com/todos'),
  fetch('https://jsonplaceholder.typicode.com/albums'),
]).then(([promise_response1, promise_response2]) => {
  Promise.all([
    promise_response1.json(),
    promise_response2.json()
  ]).then(([todos, albums]) => {
    if (todos.length > albums.length) {
      console.log(`Todos' array is bigger than albums' array`)
    } else {
      console.log(`Albums' array is bigger than todos array`)
    }
  })
})