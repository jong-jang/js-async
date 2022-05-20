// 비동기 처리 연습
// ----------------------------------------------------------------
// ### promise note
// function getData() {
//     return new Promise(function(resolve, reject) {
//         let num = Math.round(Math.random());
//       if(num){
//         resolve('성공');
//       }
//       else {
//           reject('실패');
//       }
//     });
//   }
  
//   // 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
//   getData().then(function(data) {
//     console.log(data); // response 값 출력
//   }).catch(function(err) {
//     console.error(err); // Error 출력
//   });

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// let i = 0;
// function decryptData(callback, wait, age) {
//   let start = new Date().getTime();
//   while (new Date().getTime() < start + wait); 
//   callback(`${age}세 은행원`);
// }

// fetchData(console.log, 1000, 20);
// fetchData(console.log, 1000, 37);
// fetchData(console.log, 1000, 59);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// function startAsync(age) {
//   return new Promise((resolve, reject) => {
//     if (age > 20) resolve(`${age} success`);    
//     else reject(new Error(`${age} is not over 20`));
//   });
// }

// setTimeout(() => {
//   const promise1 = startAsync(25);
//   promise1
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   const promise2 = startAsync(15);
//   promise2
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, 1000);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// catch 로 연결됩니다.
// const throwError = new Promise((resolve, reject) => {
//   throw Error("error");
// });
// throwError
//   .then(() => console.log("throwError success"))
//   .catch(() => console.log("throwError catched"));

// // 아무런 영향이 없습니다.
// const ret = new Promise((resolve, reject) => {
//   return "returned";
// });
// ret
//   .then(() => console.log("ret success"))
//   .catch(() => console.log("ret catched"));

// // resolve 만 됩니다.
// const several1 = new Promise((resolve, reject) => {
//   resolve();
//   reject();
// });
// several1
//   .then(() => console.log("several1 success"))
//   .catch(() => console.log("several1 catched"));

// // reject 만 됩니다.
// const several2 = new Promise((resolve, reject) => {
//   reject();
//   resolve();
// });
// several2
//   .then(() => console.log("several2 success"))
//   .catch(() => console.log("several2 catched"));

// // resolve 만 됩니다.
// const several3 = new Promise((resolve, reject) => {
//   resolve();
//   throw new Error("error");
// });
// several3
//   .then(() => console.log("several3 success"))
//   .catch(() => console.log("several3 catched"));
// ----------------------------------------------------------------------------------------
// ### async await note
// async function startAsync(age) {
//   if (age > 20) return `${age} success`;
//   else throw new Error(`${age} is not over 20`);
// }

// setTimeout(() => {
//   const promise1 = startAsync(25);
//   promise1
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   const promise2 = startAsync(15);
//   promise2
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, 1000);
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ### await
function setTimeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

async function startAsync(age) {
  if (age > 20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}

async function startAsyncJobs() {
  await setTimeoutPromise(1000);
  const promise1 = startAsync(25);
  try {
    const value = await promise1;
    console.log(value);
  } catch (e) {
    console.error(e);
  }
  const promise2 = startAsync(15);
  try {
    const value = await promise2;
    console.log(value);
  } catch (e) {
    console.error(e);
  }
}

startAsyncJobs();
