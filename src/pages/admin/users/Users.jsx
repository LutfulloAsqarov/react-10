import React from "react";
import axios from "../../../api";
import { useEffect, useState } from "react";
import Header from "../../../components/header/Header";
import useFetch from "../../../hooks/useFetch";

const Users = () => {
    let { data, loading, error } = useFetch(`users`);

    let productItems = data?.users.map((el) => (
        <tr key={el.id} className="products__cart">
            <td className="products__cart__brand">
                <div className="products__cart__img">
                    <img src={el.image} alt="image" />
                </div>
                {el.firstName}
            </td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>{productItems}</tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Users;
