const nameList = document.getElementById('name-list-div');
// console.log(nameList);

const displayName = (data) => {
    
};


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayName(data))






