let car = {
    maker: "Toyota",
    model: "Camry",
    year: 2022,
    start: function() {
        console.log("Engine Details");
        console.log("Car Maker =>", this.maker);
        console.log("Car Model =>", this.model);
        console.log("Car Year =>", this.year);
    }
};

car.start();
