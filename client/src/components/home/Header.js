import React from "react";
import { Link } from "react-router-dom";

const Header = ({ loadingNews, news }) => {
  return (
    <>
      <header className="home__header">
        <div className="home__header-text-box">
          <h1 className="font__size-5 text-center header__white">
            Welcome to RFuW Engineering Pte. Ltd.
          </h1>
          <h2 className="home__header-primary">
            <span className="home__header-primary--sub font__size-2">
              understand what the customer values:{" "}
            </span>
            <span className="home__header-primary--main">
              Performance, Quality, Pride &amp; Reliable Service{" "}
            </span>
          </h2>
          <Link
            to="/about"
            className="u-margin-top-2 header__button header__button--animated u-padding--05"
          >
            About Us
          </Link>
        </div>
        {!loadingNews && (
          <div className="latest__box u-padding--1">
            {news ? (
              <p className="latest__box-text">
                Latest News:&nbsp;&nbsp;&nbsp;
                <span className="font__size-1 latest__box-info">
                  {news.title}
                </span>
                <a
                  className="rfu_cta_button text-center u-margin-left-2"
                  target="_blank"
                  rel="noreferrer"
                  href={news.pdfUrl}
                >
                  learn more
                </a>
              </p>
            ) : (
              <p className="latest__box-text">No Data</p>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
