const config = require("./config");

module.exports = async function(req, res){
    let pathName = req.url.split("?")[0];
    if(config[pathName])
    {
        
    }
    else
    {
        console.log("路由未配置");
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plan");
        res.end("路由未配置");
    }
}