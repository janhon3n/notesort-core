import Note, {NoteName} from "./Note";

export default class Scale {
   public notes : Note[]

   // Scale is a set of notes
   constructor(notes : Note[]){
      this.notes = notes
   }

   public shift(amount: number) {
      this.notes.forEach(note => {
         note.shift(amount)
      })
      return this
   }

   public sum(anotherScale: Scale) {
      this.notes.concat(anotherScale.notes)
   }

   public clone() {
      return new Scale(this.notes)
   }
}

let minor = new Scale(['C','D','Eb','F','G','A','B']
   .map((n) => new Note(NoteName[n], 4)))

let major = new Scale(['C','D','E','F','G','A','B']
   .map((n) => new Note(NoteName[n], 4)))

export {minor, major}