// console.log(nameList);





const displayName = (data) => {
    const nameList = document.getElementById('name-list-div');
    const showInfoDiv = document.getElementById('show-info');
    for (let item of data) {
        const li = document.createElement('li');
        li.classList.add('bg-white','rounded-md','text-gray-500','p-2','p-2', 'cursor-pointer','text-2xl', 'font-semibold')

        const span = document.createElement('span');
        span.innerText = item.name
        li.appendChild(span);

        nameList.appendChild(li)

        span.addEventListener('click', function(){
            showInfoDiv.innerHTML = '';
            showInfoDiv.innerHTML = `
             <div class="bg-white rounded-md p-4 text-gray-500 text-xl font-medium">
                <p>Name : ${item.name}</p>
                <p>Phone : ${item.phone}</p>
                <p>Email : ${item.email}</p>
                <p>Address : ${item.address.street}, ${item.address.city}</p>
             </div>
            `
            console.log(item);
            
            
        })

        // console.log(span);
        
        
    }



    


    
};


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayName(data))






