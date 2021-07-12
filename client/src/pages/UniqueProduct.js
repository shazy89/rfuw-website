import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ReusableHeader from "../components/reusable/ReusableHeader";
import AboutSection from "components/uniqueProduct/AboutSection";
import Features from "components/uniqueProduct/Features";
import Footer from "components/layout/Footer";
import { X, Edit2 } from "react-feather";
import { Button } from "react-bootstrap";
import api from "utils/api";
import Spiner from "components/layout/SpinerLoading";
import { removeProduct } from "actions/products";
import EditProduct from "components/uniqueProduct/EditProduct";
import Alert from "components/layout/Alert";

const UniqueProduct = ({ isAuthenticated, history, removeProduct, alerts }) => {
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const handleEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const state = history.location.state;

  useEffect(() => {
    // Fetch all news
    //Get by ID
    const getProduct = async () => {
      const res = await api.get(`/api/${state.type}/${state.id}`);
      setProduct(res.data);
      setLoading(false);
    };
    getProduct();
  }, [state.type, state.id]);
  const handleRemoveProduct = () => {
    removeProduct(product._id, product.type, history);
  };
  return (
    <>
      <ReusableHeader
        page="Products"
        backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_1821/v1622481023/Products/donald-giannatti-Wj1D-qiOseE-unsplash_kdjln7.jpg"
      />

      {alerts && <Alert />}
      <Button
        className="navigate__back-btn w-25 font__size-2"
        variant="light"
        onClick={history.goBack}
      >
        <span>&lt;&lt;</span> Back
      </Button>
      {loading ? (
        <Spiner />
      ) : (
        <main>
          {isAuthenticated && (
            <div className="form_icons">
              <Button
                className="u-margin-right-3 font__size-3"
                variant="link"
                onClick={handleEdit}
              >
                Edit{" "}
                {!edit ? (
                  <Edit2 className="news__card--icon" size={30} />
                ) : (
                  <X className="news__card--icon" size={30} />
                )}
              </Button>
              <Button
                variant="link"
                onClick={handleRemoveProduct}
                className="u-margin-right-3 font__size-3"
              >
                Delete
              </Button>
            </div>
          )}
          {!edit ? (
            <>
              <AboutSection product={product} />
              <Features product={product} />
            </>
          ) : (
            product && <EditProduct history={history} product={product} />
          )}
        </main>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    alerts: state.alert
  };
};

export default connect(mapStateToProps, { removeProduct })(UniqueProduct);
