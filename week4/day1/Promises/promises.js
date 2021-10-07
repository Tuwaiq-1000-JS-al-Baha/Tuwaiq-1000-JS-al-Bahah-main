const p = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve('Promise fulfilled!');
    //reject('Promise broken!');
  }, 2000);
});

// p.then( (result) => {
//   console.log(result);
// }).catch( (err) => {
//   console.log(err);
// });


p.then((result) => {
  console.log(result); // 'Promise fulfilled!'
  return new Promise( (resolve, reject) => { resolve('A') } );
}).then((result) => {
  console.log(result); // A
  return new Promise( (resolve, reject) => { resolve('B') } );
}).then((result) => {
  console.log(result); // B
  return new Promise( (resolve, reject) => { resolve('C') } );
}).then((result) => {
  console.log(result); // C
  //return 'D';
});
