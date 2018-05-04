function swap(list: object[], index1: number, index2: number){
   let temp = list[index1]
   list[index1] = list[index2]
   list[index2] = temp
}

export function bubbleSort(list : any[], comparingFunc: Function, updateStep: Function) {
   let keepGoing = true
   while(keepGoing) {
      keepGoing = false
      for(let i = 0; i < list.length - 1; i++) {
         if (!comparingFunc(list[i],list[i+1])) {
            swap(list, i, i+1)
            updateStep([list[i], list[i+1]])
            keepGoing = true
         }
      }
   }
}