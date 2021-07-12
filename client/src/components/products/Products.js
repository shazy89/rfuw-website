import React from "react";
import ReusableHeader from "../reusable/ReusableHeader";

import Footer from "components/layout/Footer";
import ReusableHelmet from "components/reusable/ReusableHelmet";
const Products = ({
  product,
  about,
  img,
  component: Component,
  headers,
  content
}) => {
  return (
    <>
      <ReusableHelmet page={product} content={content} />

      <ReusableHeader
        page="Products"
        backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_1821/v1622481023/Products/donald-giannatti-Wj1D-qiOseE-unsplash_kdjln7.jpg"
      />

      <main>
        <section className="u-padding--2 u-margin-top-3">
          <h2 className="header__text font__size-7 u-center-text">{product}</h2>
          <div className="products__info--box">
            {about && (
              <p className="products__text font__size-2 about__text">{about}</p>
            )}
            {img && (
              <img className="products__img" src={img} alt="RFuW  product" />
            )}
          </div>
        </section>
        <section className="u-padding--2">
          {headers && <Component headers={headers} content={content} />}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
