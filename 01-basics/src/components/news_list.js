import React from 'react';
import NewsItem from './news_list_item';


// (props) lets you grab the data passed by parent component JSON db.json
const newsList = (props) => {
  
  const news = props.news.map((item)=>(
      <NewsItem item={item}  key={item.id} />
    ))

  return (
    <>
      { news }      
      { props.children }
    </>
  )
}

export default newsList;