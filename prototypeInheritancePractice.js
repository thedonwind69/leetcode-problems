var user = {
    name: "Don",
    shout: function () {
        console.log("HEY");
    },
    password: "sex"
}

var admin = {
    name: "admin",
}

admin.__proto__ = user;
admin.shout();