//button
const myPromise = new Promise((resolve, reject) => {
    let success = true

    if(success === true){
        resolve('Operation was successful!');
    }else{
        reject('Operation failed!');
    }
})

myPromise.then((result) => {
    return console.log(result)
}).catch((error) => console.log(error))