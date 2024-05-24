class Circle{
    constructor(radius=1,color="Red")
    {
        this.radius=radius
        this.color=color
    }


get currentradius()
{
    return this.radius
}

set currentradius(newradius)
{
    console.log("New radius from Setter of " +this.radius+ " = "+ newradius)
    this.radius=newradius
    
}

get currcolor()
{
    return this.color
}

set currcolor(colors)
{
    console.log("New Color from Setter of "+this.color+ " = "+ colors)
    this.color=colors
}
toString()
{
    return "radius= "+this.radius+" Color= "+this.color

}
getArea()
{
    
    let areaofcircle=3.15*this.radius*this.radius
    console.log("Area of circle = ",areaofcircle)
    
    
}

getcircumference()
{
    let circum=2*3.15*this.radius
    console.log("circumference of circle = " ,circum)
    
}
}




const circle1=new Circle()
const circle2=new Circle(1)
const circle3=new Circle(1,"Red")
console.log("initial radius from getter: ",circle3.currentradius);
circle3.currentradius=20
console.log("updated radius from getter: ",circle3.currentradius);
console.log("Initial color from Getter: ",circle2.currcolor)
circle2.currcolor="Blue"
console.log("update color from getter: ",circle2.currcolor)

circle3.getArea()
circle2.getArea()
circle3.getcircumference()
circle2.getcircumference()
console.log(circle2.toString());
console.log(circle3.toString());