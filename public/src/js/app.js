 
// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
        navigator.serviceWorker
        .register('./sw.js')    //promise
        .then( () => {
            console.log('service registriert')
        })
        .catch( (err) => {
           console.log ('nicht registriert')
        }) 
} 

let x = () => console.log('x ausgeführt')
let y = () => console.log('y ausgeführt')

let z = (callback) => {
    console.log('z davor')
    callback();
    console.log('z danach')
}

z( () => console.log('anonym danach') );

z(x);
z(y);

z( () => console.log('anonym ausgeführt') );

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then( (response) => {
    console.log('response', response)
    return response.json()
})
.then ( jsonbody => {
    console.log('json body', jsonbody)
})