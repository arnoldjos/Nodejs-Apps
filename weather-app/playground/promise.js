let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(20, 25).then((res) => {
    console.log(res);
    return asyncAdd(res, 25);
}).then((res) => {
    console.log(res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Something went wrong');
//     }, 2500);
// });

// promise.then((message) => {
//     console.log(message);
// }, errorMessage => {
//     console.log(`Error: ${errorMessage}`);
// });
