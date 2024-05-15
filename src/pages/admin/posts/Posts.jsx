import React from "react";
import Header from "../../../components/header/Header";
import useFetch from "../../../hooks/useFetch";

const Posts = () => {
    let { data, loading, error } = useFetch(`posts`);

    let productItems = data?.posts.map((el) => (
        <tr key={el.id} className="products__cart">
            <td>{el.title}</td>
            <td>{el.body}</td>
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
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>{productItems}</tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Posts;
