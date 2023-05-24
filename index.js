const app=require("./app");
const PORT=process.env.PORT || 8000;
app.listen(PORT,function () {
    console.log("App Run @8000")
})