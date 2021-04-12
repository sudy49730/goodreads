import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewsTileComponent } from "../NewsTileComponent/NewsTileComponent";
import "./HomePage.css";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Top Headlines");
  const [loading, setLoading] = useState(true);
  async function fetchArticles() {
    await fetch(`API KEY GOES HERE`)
      .then((data) => {
        data.json().then((result) => {
          setArticles(result.articles);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function getCategoryNews(category) {
    await fetch(`API KEY GOES HERE`)
      .then((data) => {
        data.json().then((result) => {
          setArticles(result.articles);
          setCurrentCategory(category);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchArticles().then(() => {
      setLoading(false);
    });
  }, []);
  return (
    <div className="container animate__animated animate__fadeIn animate__slow">
      <div className="row header">
        <h1 className="header-text">
          Top Headlines{" "}
          {currentCategory == "" || currentCategory == "Top Headlines"
            ? ""
            : "-" + currentCategory}
        </h1>
        <NavLink to="/" className="home-btn">
          <button className="btn btn-primary category-btn">Back Home</button>
        </NavLink>
        <button
          className="btn btn-success category-btn"
          onClick={() => {
            getCategoryNews("");
          }}
        >
          Top Headlines
        </button>
        <button
          className="btn btn-success category-btn"
          onClick={() => {
            getCategoryNews("business");
          }}
        >
          Business
        </button>
        <button
          className="btn btn-success category-btn"
          onClick={() => {
            getCategoryNews("entertainment");
          }}
        >
          Entertainment
        </button>
        <button
          className="btn btn-success category-btn"
          onClick={() => {
            getCategoryNews("health");
          }}
        >
          Health
        </button>
        <button
          className="btn btn-success category-btn"
          onClick={() => {
            getCategoryNews("science");
          }}
        >
          Science
        </button>
        <button
          className="btn btn-success category-btn"
          onClick={() => {
            getCategoryNews("sports");
          }}
        >
          Sports
        </button>
        <button
          className="btn btn-success category-btn"
          onClick={() => {
            getCategoryNews("technology");
          }}
        >
          Technology
        </button>
      </div>
      <hr />
      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : !articles ? (
          <h1>Found nothing in this category</h1>
        ) : (
          articles.map((article, index) => {
            return (
              <NewsTileComponent
                key={index}
                title={article.title}
                urlToImage={article.urlToImage}
                description={article.description}
                publishedAt={article.publishedAt}
                content={article.url}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
