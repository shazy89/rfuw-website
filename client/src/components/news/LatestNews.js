import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";
const LatestNews = ({ news, isAuthenticated, history }) => {
  return (
    <section className="u-padding--2 u-margin-top-2">
      <h2 className="font__size-7 header__text text-center">Our Latest News</h2>
      <Container className="u-margin-top-5 news__container">
        <Row>
          {news.length ? (
            news.map((info) => (
              <NewsCard
                id={info._id}
                key={uuidv4()}
                info={info}
                isAuthenticated={isAuthenticated}
                history={history}
              />
            ))
          ) : (
            <h2 className="font__size-7">No Data</h2>
          )}
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default compose(withRouter, connect(mapStateToProps))(LatestNews);
