// The Builder pattern is used to create objects in "steps".
// Normally we will have functions or methods that add certain properties or methods to our object.

const horse = {
  name: "Horse",
    legs:4
};

const monkey = {
    name:"Monkey",
    legs:2
}

const cow = {
    name: "Cow",
    legs:4
}

function addFlyingAbility(obj){
    obj.fly = function(){
        console.log("Now "+ this.name+" Can fly")
    }
}

function addTalkingAbility(obj){
    obj.talk = function(){
        console.log("Now "+ this.name+" Can talk")
    }
}


addFlyingAbility(horse);
addTalkingAbility(horse);

horse.fly();
horse.talk();