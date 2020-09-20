// Add your code here

function submitData(user,email){
fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name : user,
    email : email
  })
})
.then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object["id"])
  })
.catch(function(error) {
  document.body.innerHTML = error.message
  })
}
//document.body.innerHTML

