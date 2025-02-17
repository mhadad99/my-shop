import React, { useEffect, useState } from "react";
import HomeHero from "../components/HomeHero";
import ProductsHome from "../components/ProductsHome";
import { getAllProducts } from "../api/productapi";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export function Home() {
  let [products, setProducts] = useState([]);
  let [errors, setErrors] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let response = await getAllProducts();
        setProducts(response.data); // success
        setIsLoading(false);
      } catch (error) {
        setErrors(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <HomeHero></HomeHero>
      <ProductsHome></ProductsHome>
      {isLoading && !errors && (
        <div className="mt-5 alert alert-dark">
          <h1>Loading ...... </h1>
        </div>
      )}
      {errors && (
        <div className="mt-5 alert alert-danger">{errors.message}</div>
      )}
      {
        !isLoading && !errors && (
          //               {products.map((product) => (

          //                   <ProductsHome></ProductsHome>
          // ))}
          <ProductsHome></ProductsHome>
        )

        // <Table className="mt-4" striped bordered hover>
        //   <thead>
        //     <tr>
        //       <th>id</th>
        //       <th>Product Name</th>
        //       <th>Product Price</th>
        //       <th>Product Quantity</th>
        //       <th>Actions</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {products.map((product) => (
        //       <tr key={product.id}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}$</td>
        //         <td>{product.quantity}</td>
        //         <td>
        //           <Link to={`${product.id}/edit`}>
        //             <FaEdit className="text-info mx-2 fs-3" />
        //           </Link>
        //           <Link to={`${product.id}`}>
        //             <IoEye className="text-warning mx-2 fs-3" />
        //           </Link>
        //           <MdDelete
        //             className="text-danger mx-2 fs-3"
        //             onClick={() => deleteHandler(product.id)}
        //           />
        //         </td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </Table>
      }
    </>
  );
}
