import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReusableHeader from "../components/reusable/ReusableHeader";
import LatestNews from "components/news/LatestNews";
import Footer from "components/layout/Footer";
import Spinner from "components/layout/SpinerLoading";
import { getNews } from "actions/news";
import Media from "react-media";
import ReusableHelmet from "components/reusable/ReusableHelmet";
const News = ({ getNews, loadingNews, news }) => {
  useEffect(() => {
    getNews();
  }, [news.length, getNews]);
  return (
    <>
      {" "}
      <ReusableHelmet
        page="News"
        content="Purveyors of the industry's leading RF & Microwave Switches and Limiters brought to you from the world's most business friendly environment."
      />
      <Media query="(min-width: 800px)">
        <ReusableHeader
          page="Latest News"
          backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_1800/v1622480987/News/samuel-wong-IX9BGOSuGoQ-unsplash_o7lctx.jpg"
        />
      </Media>
      <Media query="(max-width: 800px)">
        <ReusableHeader
          page="Latest News"
          backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_600/v1622480987/News/samuel-wong-IX9BGOSuGoQ-unsplash_o7lctx.jpg"
        />
      </Media>
      <main>{loadingNews ? <Spinner /> : <LatestNews />}</main>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loadingNews: state.news.loading,
    news: state.news.news
  };
};

export default connect(mapStateToProps, { getNews })(News);
