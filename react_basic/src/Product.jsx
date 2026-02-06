import "./Product.css";
import Price from "./Price";

function Product({ title ,idx}) {
  
let oldPrices = ["12,345", "11,400", "11,456", "3444"];
let newPrices = ["15,345", "41,400", "21,456", "344"];
let description = [
  ["80,000 DPI", "inttutive surface"] ,
  ["inttutive surface","designed iPad Pro"] ,
  ["designed iPad Pro","inttutive surface" ] ,
  ["wireless","80,000 DPI"],
];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx] [0] }</p>
       <p>{description[idx] [1] }</p>
       <Price oldPrice ={oldPrices[idx]} newPrice={newPrices[idx]} />
     
    </div>
  );
}

export default Product;
 