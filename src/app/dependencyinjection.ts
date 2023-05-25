// class Engine{
//     constructor(public hp:number){}

// }

// class Engine{
//     constructor(public hp:number,public stroke:number){}

// }

//  engine object created inside car class.so when you change engine class,we should change car class too.

// class Car{
//     e:Engine=new Engine(400)
//     constructor(){}
// }


class Engine{
    constructor(public hp:number,
                public stroke:number,
                public gearType:string){}

}
class Car{
    constructor(public e:Engine){}
}
// engine object created outside car class and injecting class engine through the constructor.
let e=new Engine(400,4,'Automatic')
let c=new Car(e)

// this is called dependency injection.


