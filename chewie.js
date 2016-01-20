// 1. Convert the following `for` loops to `while` loops
//
// 2. Replace Han with per-movie Wookie noises using `if...else if...else`:
// http://www.buzzfeed.com/jessicamisener/the-10-best-chewbacca-quotes

var starWarsMovies = [ 'anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    var i = 0; //put once outside, so that it will only start from 0 once
    while (i < 3) {   //going to run 4 times;
        var temp = starWarsMovies[i]; 
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = temp;    //assign temp variable to where tpm would be
        i++; //run the loop at end
    }
}
function chewie() { //going to go through all movies; if it finds value is tpm, or if it's aotc, it will print this...else this...
    var i = 0;
    while (i < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else if (starWarsMovies[i] === 'tesb') {
            console.log('Rawwwwrrrgh!');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
        i++;
    }   
}
chewie();
sortChronologically();
chewie();

//

var starWarsMovies = [ 'anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    var i = 0; //put once outside, so that it will only start from 0 once
    while (i < 3) {   //going to run 4 times;
        var temp = starWarsMovies[i]; 
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = temp;    //assign temp variable to where tpm would be
        i++; //run the loop at end
    }
}
function chewie() { //going to go through all movies; if it finds value is tpm, or if it's aotc, it will print this...else this...
    var i = 0;
    while (i < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
        i++;
    }   
}
chewie();
sortChronologically();
chewie();


var starWarsMovies =  
    [ { title: 'A New Hope',
        episode: 4,
        year: 1977,
        director: 'George Lucas',
        actors: 'Harison Ford'
    },
    {   title: 'The Empire Strikes Back',
        episode: 5,
        year: 1980,
        director: 'Not George',
        actors: [
            {   firstname: 'Harrison',
                lastname: 'Ford'
            }, 
            {   firstname: 'Carrie',
                lastname: 'Fisher'
            }
        ]
    },
    ['rotj', 'tpm', 'aotc', 'rots', 'tfa']

function sortChronologically() {
    var i = 0; //put once outside, so that it will only start from 0 once
    while (i < 3) {   //going to run 4 times;
        var temp = starWarsMovies[i]; 
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = temp;    //assign temp variable to where tpm would be
        i++; //run the loop at end
    }
}
function chewie() { //going to go through all movies; if it finds value is tpm, or if it's aotc, it will print this...else this...
    var i = 0;
    while (i < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }   
        i++;
    }   
}
chewie();
sortChronologically();
chewie();