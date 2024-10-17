function blabla() {
  return 5;
}

const ursica = {
  miaumiau: function() {
    return 'MIAU!!!'
  }
}

console.log(blabla())
console.log(ursica.miaumiau())

// fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
//   // when doing a fetch, the "response" is always a Response object (https://developer.mozilla.org/en-US/docs/Web/API/Response)
//   console.log(response);

//   response.json().then(data => {
//     console.log(data)
     // response.json() turns always a PROMISE. That's why we can access its data using .then() method

//     if (!(data instanceof Array)) {
//       alert('nuuuuuuuu')
//     }

//     for (const comment of data) {
//       if (comment.body === undefined) {
//         alert('nuuuuuuuuuu')
//       }
//     }
//   })
// })

var ceva = 0;

let new_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (ceva === 50) {
      resolve('succes')
    } else {
      reject('nuuuuu')
    }
  }, 1000)
})

new_promise.then((message) => {
  console.log(message)
}).catch((message) => {
  console.log(message)
})

Promise.all([
  fetch('https://jsonplaceholder.typicode.com/comments'),
  fetch('https://jsonplaceholder.typicode.com/todos'),
]).then(([res1, res2]) => {
  Promise.all([
    res1.json(),
    res2.json(),
  ]).then(([comments, todos]) => {
    console.log(comments);
    console.log(todos);
  })
})
