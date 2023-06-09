//function --to take a String and count the vowels and return the count


// function countVowels(n) {
//     n = n.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let ctr = 0;
//     for (let i = 0; i < n.length; i++) {
//       if (vowels.includes(n[i])) {
//         ctr++;
//       }
//     }
//     return ctr;
//   }
// const app=require('express')
// app.use(express.json());
//   const vowels=['a','e','i','o','u']
//   let countVowels=(str)=>{
//         str=str.toLowerCase();
//         count=0;
//         for(let i=0;i<str.length;i++){
//             if(vowels.includes(str[i])) count++;
//         }
//         return count;
//   }
// app.get('/countVowels',()=>{
//     let string=req.body.str;
//     let vowels=countVowels(string);
//     res.send({"vowels":vowels})

// })
// //port + IP  Address=complete addresss called socket 
// const port=3000
// const ip="localhost"
// app.listen(port,ip,()=>{
//     console.log("app is listening")
// })


const express = require('express');
const app = express();
app.use(express.json());

const vowels = ['a', 'e', 'i', 'o', 'u']

let countVowel = (string) => {
    string = string.toLowerCase();
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) count += 1;
    }
    return count;
}

// JSON => JavaScript Object Notation
// Communication happens through objects
app.get('/countvowels', (req, res) => {
    let string = req.body.abc; // Validations
    // console.log(req.body.abc);
    let vowels = countVowel(string);
    res.send({"vow": vowels});
})
// Port + IP Address => Socket
const port = 3001;
const ip = "localhost";

app.listen(port, ip, () => {
    console.log("Started listening");
})