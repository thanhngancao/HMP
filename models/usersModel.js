const users = {
    "user1": {
        email: "email1@uit.edu.vn",
        message: "like"
    },
};

module.exports.check = function (userName) {
    return users[userName];
}

//Tạo mới cmt của user
module.exports.Send = function (userName, email, message) {
    if (users[userName]) {
        return 'Error';
    } else {
        users[userName] = {
            email: email,
            message: message
        };
        return 'Success';
    }
}