import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
// import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import Headtitle from "../components/Headtitle/headtitle";
import Newsletter from "../components/UI/newslettre/Newsletter";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [data, setdata] = useState(products);


  const searchedProduct = data.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });
  const sortProducts = (order) => {
    const sortedProducts = [...searchedProduct].sort((a, b) => {
      if (order === "low-price") {
        return a.price - b.price
      }
      else if (order === "high-price") {
        return b.price - a.price
      }
      else if (order === "ascending") {
        return a.title.localeCompare(b.title)
      }
      else if (order === "descending") {
        return b.title.localeCompare(a.title)
      }
      
    });
    setSortOrder(order);
    setdata(sortedProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="All-Foods">
      <Headtitle />
      <section>
        <div className="container">
          <div className="flex">
            <div className="col" >
              <div className="search__widget">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
            <div className="col mb-5">
              <div className="sorting__widget">
                <select className="w-50" value={sortOrder} onChange={(e) => sortProducts(e.target.value)}>
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row poducts">
            {searchedProduct.map((item) => (
              <div key={item.id} className=" col">
                <ProductCard item={item} />
              </div>
            ))}
          </div>


        </div>
      </section>
      <Newsletter />
    </Helmet >
  );
};

export default AllFoods;

