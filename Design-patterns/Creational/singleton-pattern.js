// Singleton is a design pattern that ensures that a class has only one immutable instance. 
// In simple words we can say, the singleton pattern consists of an object that can't be copied or modified. 
// It's often useful when we want to have some immutable single point of truth for our application.

class Config{
    constructor(){}
    start(){
        console.log("App has started")
    }
    update(){
        console.log("App has updated")
    }
}

const instance = new Config();

Object.freeze(instance);


instance.start();
instance.update();

// Since instance object is already frozon below line will be siliently ignored
instance.start = ()=> console.log("app crashed");

instance.start();