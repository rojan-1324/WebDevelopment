fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    
  })
  .then((users) => {
    
  })
  .catch((error) => {
    console.log("Error", error);
  });

const userList = document.getElementById("userList");

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach(myFunction);
        function myFunction(value) {
            console.log(value, "valueValue");
            const li = document.createElement("li");
            li.textContent = value.name;
            userList.appendChild(li);
            console.log(value.name, "name");
        }
        console.log(users, "Users using async");
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();