// Add your code here

// ****************************************************************************************

// const submitData = {
//     fetch('http://localhost:3000/users'), {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             'name': 'name',
//             'email': 'email'
//         })
//     }
// }

// ****************************************************************************************

// const configureData = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify({
//         'name': name,
//         'email': email,
//     })
// }

// let submitData = () => fetch()
function submitData (name , email){
    const configureData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        })
    }
    return fetch('http://localhost:3000/users' , configureData).then(resp => resp.json()).then(data => {
        document.body.textContent = data.id;
    }).catch(function (error){
        document.body.textContent = error.message;
    })
}