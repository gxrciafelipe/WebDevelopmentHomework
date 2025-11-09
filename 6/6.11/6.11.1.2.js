// Map with the Map() constructor
let cast = new Map();

cast.set("Mackenzie Foy", "Young Murph");

let actors = new Map(); // Code will be tested with different actors

actors.set("Sean Astin", { movie: "The Lord of the Rings", role: "Samwise Gamgee" });
actors.set("Johnny Depp", { movie: "Pirates of the Caribbean", role: "Jack Sparrow" });
actors.set("Matt Damon", { movie: "Interstellar", role: "Mann" });
actors.set("Robin Wright", { movie: "Forrest Gump", role: "Jenny Curran" });

function actorInfo(actorName, actors) {
    if (actors.has(actorName)) {
        console.log(actorName + " plays " + actors.get(actorName).role + " in " + actors.get(actorName).movie);
    }
    else
        console.log("Actor not found");
}
actorInfo("Johnny Depp", actors);
actorInfo("Nicole Kidman", actors);
console.log ("Number of actors: " + actors.size);
for (let [actor, info] of actors) {
    console.log("Actor: " + actor + ", Role: " + info.role);
}