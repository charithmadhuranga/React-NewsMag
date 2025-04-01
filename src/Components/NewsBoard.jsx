import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([])
    useEffect(()=>{
        let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));

    },[category])
  return (
    <><div className="mt-3">
          <h1 className="text-center">Latest<span className="badge bg-danger">News</span></h1>
      </div><>
              {articles.map((news, index) => {
                  return <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />;

              })}
          </></>

    
  )
}
export default NewsBoard
