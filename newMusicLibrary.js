// NEW LIBRARY

let Library = function( name, creator ) {
  // A Library has a name and a creator (both strings)
  // These are the only things required in order to create a music library
  // A Library has many playlists (starts as an empty array)
  // Playlist objects can be added to an instance of a library
  this.name = name;
  this.creator = creator;
  this.playlists = []
}

//print statement saying the playlist name and number of tracks for the library
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
  // Each Playlist has a name which is required upon creation
  // A Playlist also has many tracks
  this.name = name;
  this.tracks = [];
}

//method to give playlist average rating based on track ratings
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

//method to give playlist total duration based on track durations
Playlist.prototype.totalDuration = function () {
  const tracks = this.tracks;
  let playlistTracksTotalLength = 0;
  for (const track of tracks) {
    const length = track.length;
    playlistTracksTotalLength += length
  }
  return playlistTracksTotalLength
}

//print statement saying the track name , rating and duration for the playlist

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
  this.title = title; //required string
  this.rating = rating; //required integer between 1 and 5
  if (rating < 1 || rating > 5){
    console.log(title + " has an invalid rating");
  }
  this.length = length //required integer in seconds
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


let secondsToMinutes2 =  function(time){
    console.log(Math.floor(time / 60)+' minutes, '+Math.floor(time % 60)+' seconds');
}

secondsToMinutes2(666);
