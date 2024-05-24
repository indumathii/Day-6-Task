class Movie{
    constructor(title,studio,rating="PG")
    {
        this.title=title
        this.studio=studio
        this.rating=rating
    }
 static getPG(arraymov)
 {
    let finalarr=[]
    for(let i of arraymov)
        {
            if(i.rating=="PG")
                {
                    finalarr.push(i)
                }
        }
    return finalarr
 }



}

const movie1=new Movie("Casino Royale","Eon Productions","PG13");
const movie2=new Movie("Kaaka Kaaka","Studio Green","PG13");
const movie3=new Movie("Veeram","AGS","PG");
const movie4=new Movie("Jilla","AVM Production");
let arrmovies=[movie1,movie2,movie3,movie4]
console.log("Movies with PG Rating")
console.log(Movie.getPG(arrmovies))