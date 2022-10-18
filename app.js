// let greet = (name) => {
//   console.log("hello: " + name);
// }
// greet("anupam")
//
//

let add = (x, y) => {
  return x*y; 
}

let cup = add(5, 8);

// console.log(cup);

let temp_conv = (c) => {
  return (c*1.8)+32
}

let f = temp_conv(31);


let m = document.getElementById('main');

let addEle = (el, text, cl) => {
  let e = document.createElement(el);
  if (cl) {
    e.classList.add(cl);
  }
  e.textContent = text
  console.error(e);
}
addEle('h1', 'helllo');
