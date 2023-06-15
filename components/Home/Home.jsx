import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Newsletter from "../Footer/Newsletter/Newsletter";
const Home = () => {
   
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category  categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                    <Newsletter />
                </div>
            </div>
        </div>
    );
};

export default Home;