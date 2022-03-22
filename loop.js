const namaMantan = ["Komang", "Made", "Ketur"];

namaMantan.forEach(function (item, index, array) 

{
// console.log(item,index);
    
});

namaMantan.push("Dewi");

const namaMantanLama = namaMantan.slice ();

 namaMantan.pop();

//  console.log ("Nama mantan lama", namaMantan);

//  for (let index = 0; index < namaMantan.length; index++) {
//      const element = namaMantan[index];
    //  console.log(element);
//  }


//  let index = 0
//  while (index < namaMantan.length) {
//      const element = namaMantan[index];
//      console.log(element);
//      index ++;
//  }

console.log (
    namaMantan
    .filter(function (mantan, ke ) {
        return mantan == "made";
    })

    .map (function (mantan, ke){
        return `${mantan} adalah mantan ke ${ke + 1}`
    })
);