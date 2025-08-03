import React from "react";
import { PRODUCTS } from "../Products";

function Admin(){

    const listItems = PRODUCTS.map(product => 
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
            </tr>
            <tr>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>
                    <input type="text" name="fname" value={product.price}/>
                </td>
                <td>{product.qty}</td>
            </tr>
        </table>
    );

    return(
        <div className="updateProducts">
               {listItems}
        </div>
    );
}

export default Admin;