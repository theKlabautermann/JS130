"use strict";

function BeerSong() {}

BeerSong.verse = function(verse) {
  return BeerSong.verses(verse);
}

BeerSong.verses = function(startVerse, endVerse) {
  if (endVerse === undefined) endVerse = startVerse;

  function returnVerse(currentVerse) {
    let part1;
    let part2;

    if (currentVerse === 0) {
      part1 = `No more bottles of beer on the wall, no more bottles of beer.\n`;
      part2 = `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    } else if (currentVerse === 2) {
      part1 = `${currentVerse} bottles of beer on the wall, ${currentVerse} bottles of beer.\n`;
      part2 = `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
    } else if (currentVerse === 1) {
      part1 = `1 bottle of beer on the wall, 1 bottle of beer.\n`;
      part2 = `Take it down and pass it around, no more bottles of beer on the wall.\n`;
    } else {
      part1 = `${currentVerse} bottles of beer on the wall, ${currentVerse} bottles of beer.\n`;
      part2 = `Take one down and pass it around, ${currentVerse - 1} bottles of beer on the wall.\n`;
    }

    return part1 + part2;
  }

  let result = [];
  for (let index = startVerse; index >= endVerse; index--) {
    result.push(returnVerse(index));
  }

  return result.join("\n");
}

BeerSong.lyrics = function() {
  return BeerSong.verses(99, 0);
}

module.exports = BeerSong;