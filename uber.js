class uber{
    constructor(from,to,km,typeofvehicle,pricepkm)
    {
        this.from=from
        this.to=to
        this.km=km
        this.typeofvehicle=typeofvehicle
        this.pricepkm=pricepkm
    }
    calculateprice()
    {
        let price1=this.km*this.pricepkm
        console.log("Price to travel from "+this.from +" to "+this.to+" in vehicle type "+this.typeofvehicle+" is: "+price1)
    }


}
const typeofvehicle={
Sedan:40,
Mini:30,
Suv:60,
Auto:20
}

const ride1=new uber("Poonamallee","Ambattur",15,"Sedan",typeofvehicle["Sedan"])
const ride2=new uber("Poonamallee","Ambattur",15,"Auto",typeofvehicle["Auto"])
const ride3=new uber("Poonamallee","Ambattur",15,"Mini",typeofvehicle["Mini"])
const ride4=new uber("Poonamallee","Ambattur",15,"Suv",typeofvehicle["Suv"])
ride1.calculateprice()
ride3.calculateprice()
ride2.calculateprice()
ride4.calculateprice()
