if(1==1){
const response = await fetch("https://jsonplaceholder.typicode.com/users");

const data = await response.json();
}
console.log(data);