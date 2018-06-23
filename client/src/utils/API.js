import axios from "axios";
const BASEURL="";
const APIKEY="44e03f9561ad42cc9aecabe24010068f";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the articles with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the articles with the given id
  deleteArticles: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a articles to the database
  saveArticles: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

