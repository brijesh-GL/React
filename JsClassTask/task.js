
class Car{
    constructor(brand,speed,motion){
        
        this.brand=brand
        this.speed=speed
        this.motion=motion
        
    }
    accelerate(val){
        console.log(`the car is accelerating with ${val} km/hr`)
    }
    brake(val1){
        console.log(`the car is accelerating with ${val1} km/hr`)
    }
    describe(){
        console.log(`the car is in good condition`)
    }
    status(){
        console.log(`the car is in good condition`)
    }
}
const obj1=new Car("Audi",200,"moving")
obj1.accelerate(120)
console.log(obj1.brand,obj1.speed)
obj1.accelerate(130)


console.log("..................................")

// 
  let car={
    brand:"audi",
    speed:200,
   accelerate:function(val){
    console.log(`the car is accelerating with ${val} km/hr`)
   },
   brake:function(val){
    console.log(`the car is accelerating with ${val1} km/hr`)
   },
   describe:function(val){
    console.log(`the car is accelerating with ${val} km/hr`)
   }

  }
  console.log(car.accelerate(200))