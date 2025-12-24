//map syntax : a.map((i)=>{});
let a=[1,2,3,4,5,];
console.log(a);

let b=a.map((i) => {
    return i* 100 ;
});

console.log(b);

 // multiply by 3 
 
let c= a.map((i)=>{
    return i*3
})

console.log(c);


// Filters

let d=a.filter((i)=>{
    return i>3
})
 console.log(d);
 

