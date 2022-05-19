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



let i = 0;
function decryptData(callback, wait, age) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + wait); 
  callback(`${age}세 은행원`);
}

fetchData(console.log, 1000, 20);
fetchData(console.log, 1000, 37);
fetchData(console.log, 1000, 59);