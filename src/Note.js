export default class Note {

   constructor(str) {
      var noteNames = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','H']
      /*
         noteValue      0  1  2  3  4  5  6  7  8  9  10 11
         mucical note   C  C# D  D# E  F  F# G  G# A  A# H
      */
      this.setTo(str)
   }

   setTo = (str) => {
      let noteName = str.splice(0,-1)
      let octave = Number(str.splice(-1))
      if (!noteNames.contains(noteName) || octave < 0 || octave > 8)
         throw new Error("Invalid arguments")

      this.noteValue = noteNames.indexOf(noteName)
      this.octave = octave
   }

   toString = () => {
      noteNames[this.noteValue] + this.octave
   }

   toInt = () => {
      this.octave * this.noteNames.length + this.noteValue
   }
}