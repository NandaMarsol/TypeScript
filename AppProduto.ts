import { Produto } from "./Produto";

var p1, p2: Produto;
 
p1 = new Produto(1, "potinho", "azul bem fofo", 10, 10, "link");
p2 = new Produto(2, "caneca", "rosa unicornio", 5, 5, "link");

console.log(p1.getInfo());
console.log(p2.getInfo());