console.log('a');
console.log('b');

function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('c')
        }, 3000)
    }) 
}
function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('d')
        }, 0)
    }) 
}

create3rdPost() .then(()=>{
    console.log('c')
        create4thPost().then(()=>{
            console.log('d')
        }).then(()=>{
            console.log('e');
        }) 
    
})

