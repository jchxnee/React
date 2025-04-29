import axios from "axios";



// axios.get("https://jsonplaceholder.typicode.com/posts/2")
//   .then(response => {
//     // 성공 시 실행 (response.data에 실제 데이터가 담겨 있음)
//     console.log("받은 데이터 : " , response.data);
//   })
//   .catch(error => {
//     // 실패(에러) 시 실행
//     console.error("에러 발생 : ", error);
//   });

async function getPost(){
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
        console.log("받은 데이터 : " , response.data);
    } catch(Error){
        console.log("에러 발생 : ", Error);
    }
}

// getPost();

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

async function addPost() {
    //axios.post(요청할 url, 전달할 데이터)
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        console.log("받은 데이터 : " , response);
}

addPost();