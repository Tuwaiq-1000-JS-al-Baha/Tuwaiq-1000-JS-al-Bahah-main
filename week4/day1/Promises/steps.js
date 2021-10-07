const step1 = (cb) => {
  setTimeout( () => {
    console.log('STEP 1 COMPLETE');
    cb();
  }, 2000);
}

const step2 = (cb) => {
  setTimeout( () => {
    console.log('STEP 2 COMPLETE');
    cb();
  }, 1000);
}

const step3 = (cb) => {
  setTimeout( () => {
    console.log('STEP 3 COMPLETE');
    cb();
  }, 500);
}

// Callback Hell
// step1( () => {
//   step2( () => {
//     step3( () => { 
//       console.log('FINISHED!')
//     } );
//   } );
// } );

new Promise( step1 )
.then( () => { 
  return new Promise( step2 );
})
.then( () => { 
  return new Promise( step3 );
})
.then( () => {
  console.log('FINISHED!');
});