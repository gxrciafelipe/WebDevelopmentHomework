let cast = { // Code will be tested with different actors
   "Elijah Wood": "Frodo Baggins",
   "Sean Astin": "Samwise Gamgee",
   "Ian McKellen": "Gandalf",
   "Viggo Mortensen": "Aragorn",
   "Orlando Bloom": "Legolas",
   "Christopher Lee": "Saruman"
};

function roleOf(actorName, cast) {

    return cast[actorName];

}

function deleteFromMovie(actorName, cast) {

    if (actorName in cast) {
        delete cast[actorName];
        return "Actor deleted";
    }
    else
        return "Not in this cast";

}

console.log(roleOf("Viggo Mortensen", cast));
console.log(deleteFromMovie("Viggo Mortensen", cast));
