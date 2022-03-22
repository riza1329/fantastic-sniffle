const namaTeman = ["Agus", "Rondi", "Bagus"];

console.log (namaTeman[2]);
console.log(namaTeman.length);

namaTeman.forEach (function (item, index , Array) {
    console.log(item,index,Array)
})

// namaMantanTeman.push("Dewi");
// console.log(namaMantanTeman);

// namaMantanTeman.pop();
// console.log(namaMantanTeman);


// namaMantanTeman.shift();

// console.log(namaMantanTeman);

// const namaMantanTeman = namaTeman.slice ();
// namaMantanTeman.pop();

// console.log("namaMantanTeman", namaMantanTeman)

// console.log ("namaMantanLama:", namaTeman);

const namaMantan = namaMantan.slice ();
namaMantan.pop ();
console.log (
    namaMantan
    .reduce (function (acc, mantan, ke) {
        acc [mantan] = `mantan $(ke + 1)`;

        return acc; 
        
    }, {})
    
);




