import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/home/Header";
import Welcome from "../components/home/Welcome";
import Upcoming from "../components/home/Upcoming";
import Footer from "components/layout/Footer";
import ReusableHelmet from "components/reusable/ReusableHelmet";
import { getNews } from "actions/news";
import { getFeaturedProducts } from "actions/products";

const Home = ({ getNews, news, loadingNews, getFeaturedProducts }) => {
  useEffect(() => {
    getNews();
    getFeaturedProducts();
  }, [getNews, getFeaturedProducts]);

  return (
    <>
      <ReusableHelmet
        page="Home"
        content="Our high reliability RF Switches and Limiters offer the world's highest power ratings for SMT style devices"
      />

      <Header loadingNews={loadingNews} news={news} />

      <main>
        <Welcome />
        <Upcoming />
      </main>

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingNews: state.news.loading,
    news: state.news.news[0]
  };
};

export default connect(mapStateToProps, { getNews, getFeaturedProducts })(Home);
