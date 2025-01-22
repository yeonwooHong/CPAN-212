for (let index = 0; index < 5; index++){ // let
    setTimeout(()=>{
        console.log(index)
    }, 1000);
}
console.log("-----------")
for (var index = 0; index < 5; index++){ // var
    setTimeout(()=>{
        console.log(index)
    }, 1000);
}