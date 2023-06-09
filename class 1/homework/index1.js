//question 1:1. Create 4 apis: /add /subtract /multiply /divide to do corresponding operations
//question 2:2. Extend the /add and /multiply api to add/multiply a list of integers not just two nums

const express=require('express')
const app=express();
app.use(express.json());

let add=(a,b)=>{
      return a+b;
}
let subtract=(a,b)=>{
    return a-b;
}
let multiply=(a,b)=>{
    return a*b;
}
let divide=()=>{
    return a/b;
}

app.get('/add',(req,res)=>{
    let a=req.body.a;
    let b=req.body.b;
    let ans=add(a,b);
    res.send({"ans":ans});
})
app.get('/subtract',(req,res)=>{
    let a=req.body.a;
    let b=req.body.b;
    let ans=subtract(a,b);
    res.send({"ans":ans});
})
app.get('/multiply',(req,res)=>{
    let a=req.body.a;
    let b=req.body.b;
    let ans=multiply(a,b);
    res.send({"ans":ans});
})
app.get('/divide',(req,res)=>{
    let a=req.body.a;
    let b=req.body.b;
    let ans=divide(a,b);
    res.send({"ans":ans});
})

app.listen(3000,()=>{
    console.log("listening");
})