import Scale, {minor, major} from './Scale'
import {bubbleSort} from './Sorting'
import * as fs from 'fs'
import * as Midi from 'jsmidgen'

let file = new Midi.File()
let track = new Midi.Track()
file.addTrack(track)

let scale = minor.sum(minor.clone().shift(12))
bubbleSort(
   minor.notes.reverse(),
   (a, b) => {
      return a.toNumber() < b.toNumber()
   },
   (list) => {
      list.forEach((n,i) => {
         i == 0 ?
            track.noteOn(0, n.toString(), 64) :
            track.noteOn(0, n.toString())
      })
      list.forEach((n,i) => {
         i == 0 ?
            track.noteOff(0, n.toString(), 64) :
            track.noteOff(0, n.toString())
      })
   }
)

fs.writeFileSync('test.midi', file.toBytes(), 'binary')