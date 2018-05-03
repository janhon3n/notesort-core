export default class Scale {

   constructor(notes) {
      this.notes = notes
   }

   octaveShift = (octave) => {
      this.notes.map(note => {
         let newOctave = Number(note.slice(-1)) + 1
         return note.slice(0, -1) + newOctave
      })
   }

   sum = (anotherScale) => {
      this.notes + anotherScale.notes
   }

   clone = () => {
      return new Scale(this.notes)
   }
}


let minor = new Scale(['A3','B3','C4','D4','E4','F4','G4'])
let major = new Scale(['C4','D4','E4','F4','G4','A4','B4'])

export {minor, major}