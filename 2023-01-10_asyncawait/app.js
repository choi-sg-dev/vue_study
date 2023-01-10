/*function func(){
  return 7;
}

async function asyncFunc(){
  return 7;
}

console.log(func());
console.log(asyncFunc()); // promise 형태로 return 함


asyncFunc().then(result => {
  console.log(result);
})*/

async function asyncFunc(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 3000);
  });

  /*let result = await promise;*/
  let result = await promise.catch(err => {
    console.error(err);
    return err;
  })
  console.log(result); // 27번 줄의 return 이 없으면 undefined 가 나옴
}

asyncFunc();