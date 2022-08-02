// - Entrada (4)
//      Saída: "chunk-chunk-chunk-chunk"

// - Entrada (1)
//      Saída: "chunk"

// - Entrada (8)
//      Saída: "chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk"

// - Entrada (2)
//      Saída: "chunk-chunk"


function multChunk (number) { 
  if (number === 0) {
    return ""
  }
  
  if (number === 1) {
    return "chunk"
  } else {
    return 'chunk-' + multChunk(number -1)
  }
}

console.log(multChunk(4));
console.log(multChunk(1));
console.log(multChunk(8));
console.log(multChunk(2));