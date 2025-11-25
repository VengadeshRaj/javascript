// The Prototype pattern allows you to create an object using another object as a blueprint,
// inheriting its properties and methods.

const superCars = {
    speed:()=> console.log("Im running 240km/hr"),
    turbo:()=> console.log("Turbo activated...")
};


const car = {
    wheel:4,
    noOfPassengers: 2
};

Object.setPrototypeOf(car,superCars);

car.speed();
car.turbo();