let myPromise = new Promise(function(resolve, reject) {
    const success = "Order has arrived";
    const rejected = "Order is delayed";
    const promiseResolves = true;

    promiseResolves ? resolve(success) : reject(rejected);
});

myPromise
    .then(function(successMessage) {
        console.log(successMessage);
    })
    .catch(function(errorMessage) {
        console.log(errorMessage);
    });

function getUser() {
    return new Promise((resolve) => {
        resolve({ id: 1, name: "Ram" });
    });
}

function getOrder(userId) {
    return new Promise((resolve) => {
        resolve([{ id: 101, userId: userId }]);
    });
}

function getOrderDetails(orderId) {
    return new Promise((resolve) => {
        resolve({ id: orderId, price: 1000 });
    });
}

getUser()
    .then(user => {
        return getOrder(user.id);
    })
    .then(orders => {
        return getOrderDetails(orders[0].id);
    })
    .then(details => {
        console.log(details);
    })
    .catch(error => {
        console.log(error);
    });

async function greet() {
    return "Hello";
}

greet().then(message => {
    console.log(message);
});

async function getData() {
    try {
        const user = await getUser();
        const orders = await getOrder(user.id);
        const details = await getOrderDetails(orders[0].id);
        console.log(details, "detailsdetails");
    } catch (error) {
        console.log("Failed to get", error);
    } finally {
        console.log("i am finally blockwd");
    }
}

getUser()
  .then((user) => {
    return getOrder(user.id);
  })
  .then((orders) => {
    return getOrderDetails(orders[0].id);
  })
  .then((details) => {
    console.log(details);
  })
  .catch((error) =>
    console.log("Failed to get", error)
  )
  .finally(() => 
    console.log("i am finally blockwd")
  );

  