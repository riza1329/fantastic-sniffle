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
    return heightMinust100 - (heightMinust100 * 10) / 100 < 
    this.weight;
},


};

console.log(Person.fullName());
console.log(Person.isWeightideal());


const counstries = {
    ID : {
        province: ["bali", "jawa timur", "jawa tengah"],
        city: ["singamaharaja", "gianyar", "negare"],
    },

    MY: {},
    TH: {
        province: [],
    },
       

};

console.log (counstries.TH?.MY?.province ?? "NOT FOUND")





