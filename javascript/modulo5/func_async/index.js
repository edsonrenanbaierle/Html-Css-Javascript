
const number = [1, 2, null, 3, 4, 5, 6, 7, 8]

async function asyncSquare(x){
  if(typeof x !== 'number'){
    return Promise.reject('Not a number');
  }else{
    return x * x;
  }
}

Promise.all(number.map((number) => asyncSquare(number))).then((result) => console.log(result)).catch((err) => console.log(err))