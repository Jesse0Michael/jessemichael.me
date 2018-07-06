
export function addColor(e) {
  var r = Math.floor(Math.random() * 55 + 200);
  var g = Math.floor(Math.random() * 55 + 200);
  var b = Math.floor(Math.random() * 55 + 200);

  var rand = r.toString(16) + g.toString(16) + b.toString(16);

  console.log(e.target)
  e.target.style.transition = "background-color 100ms linear"
  e.target.style.backgroundColor = "#" + rand
}

export function removeColor(e) {
  e.target.style.transition = "background-color 1000ms linear"
  e.target.style.backgroundColor = "#fff"
}
