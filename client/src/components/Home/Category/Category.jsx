import "./Category.scss";
import React from "react";
import cat1 from "../../../assets/category/cat-1.jpg";
const Category = ({categries}) => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                 {categries.data.map((item) => (
                      <div key={item.id} className="category">
                      <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url}
                          alt=""
                      />
                  </div>
                 ))};
                    
                
            </div>
        </div>
    );
};


export default Category;
