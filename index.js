const submitData = (userName, userEmail) => {
  let user = { name: `${userName}`, email: `${userEmail}`} 
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json",
               "Accept": "application/json"},
    body: JSON.stringify(user) 
  })
  .then(res => res.json())
  .then(userObj => {
    document.body. innerHTML = userObj["id"]
  })
  .catch(error => document.body.innerHTML = error.message)
}