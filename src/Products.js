import Event1 from "./Assests/Event1.png"
import Event2 from "./Assests/Event2.png"
import Event3 from "./Assests/Event2.png"

import tee1 from "./Assests/Long_sleeve.png"
import tee2 from "./Assests/short_sleeve.png"
import tee3 from "./Assests/kids.png"

export const PRODUCTS = [
    {
      id: 1,
      productName: "Long sleeve ",
      price: 30.00,
      qty:10,
      color: ["black", "white", "red", "blue", "yellow"],
      size: ["XS", "S", "M", "L", "XL"],
      productImage: tee1,
    },
    {
      id: 2,
      productName: "Short sleeve ",
      price: 20.00,
      qty:10,
      color: ["black", "white", "red", "blue", "yellow"],
      size: ["XS", "S", "M", "L", "XL"],
      productImage: tee2,
    },
    {
      id: 3,
      productName: "Kids",
      price: 20.00,
      qty:10,
      color: ["black", "white", "red", "blue", "yellow"],
      size: ["XS", "S"],
      productImage: tee3,
    }
  ];

  export const IMG =[
    {
      src: Event1,
      alt: "Image 1 for carousel"
    },
    {
      src: Event2,
      alt: "Image 2 for carousel"
    },
    {
      src: Event3,
      alt: "Image 3 for carousel"
    }
  ]