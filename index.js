const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitty1) {
  kittens.push("Ralph");
  return(kittens)
}

function destructivelyPrependKitten(kitty2) {
  kittens.unshift("Ralph");
  return(kittens)
}