var app = {
    name: "async1 loading",
    init: function(){
        console.log(this.name);
    }
}

var haha = app;
haha.init.apply(app);



