const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitty1) {
  kittens.push("Ralph");
  return(kittens)
}

function destructivelyPrependKitten(kitty2) {
  kittens.unshift("Bob");
  return(kittens)
}

function destructivelyRemoveLastKitten(kitty3) {
  kittens.pop();
  return(kittens)
}

function 