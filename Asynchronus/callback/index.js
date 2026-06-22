function getUser(callback) {
    callback({ id: 1, name: "Ram" });
}

function getOrders(userId, callback) {
    callback([{ userId, id: 101, item: "Laptop" }]);
}

function getOrderDetails(orderId, callback) {
    callback({ id: orderId, price: 1000 });
}

// callback hell
getUser(function (user) {
    console.log(user, "userData");
    getOrders(user.id, function (orders) {
        console.log(orders, "orders");
        getOrderDetails(orders[0].id, function (detail) {
            console.log(detail, "detail");
        });
    });
});