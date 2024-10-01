// console.log(nameList);

const displayName = (data) => {
    const nameList = document.getElementById('name-list-div');
    for(let item of data){
        nameList.innerHTML += `
             <li class="bg-white rounded-md text-gray-500 p-2 cursor-pointer font-semibold"><span>${item.name}</span></li>
        `
        
    }
};


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayName(data))






