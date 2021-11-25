import { Component, useState, useEffect } from "react";
import { useParams } from "react-router";
import Phones from "../components/Phones";

import React from 'react'

function Specs() {
  const {id} = useParams()
  const [products, setProducts] = useState({})
  console.log(products)
  useEffect(() => {
    fetch ('https://my-json-server.typicode.com/Rahmadien/speciphone-db/db/')
        .then((res) => res.json())
        .then(json => setProducts(json.products[id-1])).catch(err => console.log(err))
  }, [id])


  return (
    <div className="mt-4 text-center">
        {products&& <Phones product={products} />
              }
      </div>
  )
}

export default Specs


// export default class Specs extends Component{

//     state = {
//         products: [],
//     }
  
//     componentDidMount() {
//         fetch ('https://my-json-server.typicode.com/Rahmadien/speciphone-db/db/')
//         .then((res) => res.json())
//         .then(json => {
//           console.log(json.products)
//           this.setState({
//             products: json.products
//         })
//       });
//     }

// render() {
//   const {id} = useParams()
//     return (
//       <div className="mt-4 text-center">
//         {this.state.products&& <Phones product={product[id]} />

//               }
//       </div>
//     );
//   }
// }  
