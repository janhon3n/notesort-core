export default class Note {

   private noteName : NoteName
   private octave : number

   constructor(name: NoteName, octave: number) {
      this.setTo(name, octave)
   }

   public setTo(name: NoteName, octave: number) {
      if (octave < 0 || octave > 8)
         throw new Error("Invalid arguments")

      this.noteName = name
      this.octave = octave
   }

   toString = () : string => {
      return ("" + NoteName[this.noteName] + this.octave).replace('s', '#')
   }

   toNumber = () : number => {
      return this.octave * 12 + this.noteName
   }

   shift = (amount) => {
      let isNegative = amount < 0
      let octaveShift = Math.floor(Math.abs(amount) / 12)
      let noteValueShift = Math.abs(amount) % 12
      this.octave += isNegative ? -octaveShift : octaveShift
      this.noteName += isNegative ? -noteValueShift : noteValueShift
   }
}

export enum NoteName {
   C = 0,
   Cs = 1,
   Db = 1,
   D = 2,
   Ds = 3,
   Eb = 3,
   E = 4,
   F = 5,
   Fs = 6,
   Gb = 6,
   G = 7,
   Gs = 8,
   Ab = 8,
   A = 9,
   As = 10,
   Bb = 10,
   B = 11,
}