const Person = {
    firstName : "Salwa",
    lastName : "Dewi",
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    },
weight: 65,
height: 172,
isWeightideal: function () {
    const heightMinust100 = this.height - 100;
    return heightMinust100 - (heightMinust100 * 10) / 100; 
    
},
needDiet: function(){
    const weightIdeal = this.isWeightideal();
    if (weightIdeal - 5 > this.weight)
    return (
        "You need more protein, need more" + (weightIdeal 
            - this.weight) + "Kg"
    );

    else if (weightIdeal + 5 < this.weight)
    return (
        "You need a mayo diet, need reduce weight:" + 
        (this.weight - weightIdeal) +
        "Kg"
        
        

    );

    // // else if (weightIdeal  + 10 > this.weight )
    // // return (
    // //     "You need a mayo diet, need reduce weight:" +
    // //     (this.weight + weightIdeal) +
    // //     "Kg"
        
    // )

    return "you are in a good shape";
   
},



};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());
// console.log(Person.weightIdeal())
