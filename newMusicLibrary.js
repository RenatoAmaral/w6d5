// NEW LIBRARY

let Library = function( name, creator ) {
  // A LIBRARY HAS A NAME AND A CREATOR (BOTH STRINGS)
  // THESE ARE THE ONLY THINGS REQUIRED IN ORDER TO CREATE A MUSIC LIBRARY
  // A LIBRARY HAS MANY PLAYLISTS (STARTS AS AN EMPTY ARRAY)
  // PLAYLIST OBJECTS CAN BE ADDED TO AN INSTANCE OF A LIBRARY
  this.name = name;
  this.creator = creator;
  this.playlists = []
}

//PRINT STATEMENT SAYING THE PLAYLIST NAME AND NUMBER OF TRACKS FOR THE LIBRARY

Library.prototype.printPlaylists = function () {
  let playlists = this.playlists;
  let output = "";
  for (const playlist of playlists) {
    if (playlist != playlists[0]) {
      output += "\n";
    }
    if (playlist.tracks.length === 0) {
      output += playlist.name +
      " has no tracks."
    } else {
    let length = secondsToMinutes(playlist.totalDuration());
    output += playlist.name +
    " has " +
    playlist.tracks.length +
    " tracks, with an average rating of " +
    Math.round(playlist.playlistRating()) +
    " and a total length of " +
    length + "\n";
    }
  }return output;
}

//NEW PLAYLIST

let Playlist = function( name ) {
  // EACH PLAYLIST HAS A NAME WHICH IS REQUIRED UPON CREATION
  // A PLAYLIST ALSO HAS MANY TRACKS
  this.name = name;
  this.tracks = [];
}

//METHOD TO GIVE PLAYLIST AVERAGE RATING BASED ON TRACK RATINGS

Playlist.prototype.playlistRating = function() {
  const tracks = this.tracks;
  let playlistTrackTotalRating = 0;
  let playlistTracksAvgRating = 0;
  for (const track of tracks) {
    const rating = track.rating;
    playlistTrackTotalRating += rating
  } playlistTracksAvgRating = (playlistTrackTotalRating/tracks.length)
  return playlistTracksAvgRating
}

//METHOD TO GIVE PLAYLIST TOTAL DURATION BASED ON TRACK DURATIONS

Playlist.prototype.totalDuration = function () {
  const tracks = this.tracks;
  let playlistTracksTotalLength = 0;
  for (const track of tracks) {
    const length = track.length;
    playlistTracksTotalLength += length
  }
  return playlistTracksTotalLength
}

//PRINT STATEMENT SAYING THE TRACK NAME , RATING AND DURATION FOR THE PLAYLIST

Playlist.prototype.printTracks = function () {
  let tracks = this.tracks
  let output = "";
  for (const track of tracks) {
    if (track != tracks[0]) {
      output += "\n";
    }
    let length = secondsToMinutes(track.length);
    output += track.title +
    " has a rating of " +
    track.rating +
    " stars and a duration of " +
    length + "\n" ;
  } return output;
}

// NEW TRACK

let Track = function(title, rating, length) {
  this.title = title; //REQUIRED STRING
  this.rating = rating; //REQUIRED INTEGER BETWEEN 1 AND 5
  if (rating < 1 || rating > 5){
    console.log(title + " has an invalid rating");
  }
  this.length = length //REQUIRED INTEGER IN SECONDS
}

// TRANSFORM SECOND IN MINUTES

let secondsToMinutes = function (length) {

  length = Number(length);


  let hours = Math.floor(length / 3600);
  let minutes = Math.floor(length % 3600 / 60);
  let seconds = Math.floor(length % 3600 % 60);

  let hoursDisplay = hours > 0
    ? hours + (hours == 1 ? " hour, " : " hours, ")
    : "";
  let minutesDisplay = minutes > 0
    ? minutes + (minutes == 1 ? " minute, " : " minutes, ")
    : "";
  let secondsDisplay = seconds > 0
    ? seconds + (seconds == 1 ? " second" : " seconds")
    : "";

  return hoursDisplay + minutesDisplay + secondsDisplay;
}
//CREATE A NEW LIBRARY

const newLibrary1 = new Library("All My Beats", "Renato");

//CREATE TRACKS

const track1 = new Track('Brave Beasts', 3, 666);
const track2 = new Track('Bittersweet', 5, 222);
const track3 = new Track('Memory of Jade', 2, 333);
const track4 = new Track('Soul of Slande', 1, 500);
const track5 = new Track('Enigma of the World', 5, 200);
const track6 = new Track('Armageddon', 3, 1000);

//CREATE PLAYLIST

const newPlist1 = new Playlist( 'Best Songs' );
const newPlist2 = new Playlist( 'Gym time' );

//ADD TRACKS TO PLAYLIST 1

newPlist1.tracks.push(track1);
newPlist1.tracks.push(track2);
newPlist1.tracks.push(track3);
newPlist1.tracks.push(track4);
newPlist1.tracks.push(track5);
newPlist1.tracks.push(track6);

//ADD TRACKS TO PLAYLIST 2

newPlist2.tracks.push(track2);
newPlist2.tracks.push(track4);


//ADD PLAYLIST

newLibrary1.playlists.push(newPlist1);
newLibrary1.playlists.push(newPlist2);

//PRINT PLAYLIST

console.log(newPlist1.printTracks());

//PRINT LIBRARY

console.log(newLibrary1.printPlaylists());


