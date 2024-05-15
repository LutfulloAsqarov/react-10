import React, { useEffect, useState } from "react";
import Header from "../../../components/header/Header";
import axios from "../../../api";
import "./Products.scss";
import useFetch from "../../../hooks/useFetch";

const Products = () => {
    let { data, loading, error } = useFetch(`products`);
    let productItems = data?.products.map((el) => (
        <tr key={el.id} className="products__cart">
            <td className="products__cart__brand">
                <div className="products__cart__img">
                    <img src={el.images[0]} alt="image" />
                </div>
                {el.brand}
            </td>
            <td>{el.title}</td>
            <td>{el.price}$</td>
        </tr>
    ));

    return (
        <>
            <Header title={"Products"} />
            <section id="products">
                <div className="products container">
                    <table className="products__carts">
                        <thead>
                            <tr className="products__carts__head">
                                <th>Brand</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>{productItems}</tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Products;
