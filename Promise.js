const userName = "RaimundoJSoares"

//fetch return a promise
//to simulate a error just type wrong url from fetch
//or change something inside the fetch
fetch(`https://api.github.com/users/${userName}`,{
  method: 'GET',
  hearders: {
    Accept: 'aplication/vnd.github.v3+json',
  },
}).then((response) => {
  console.log(typeof response)
  console.log(response)
  return response.json()
}).then((data) =>{
  console.log(`The name of the user is ${data.name}`)
})
.catch((err) =>{
  console.log(`We find a error: ${err}`)
})