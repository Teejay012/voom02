import React, { useState, useEffect } from 'react';
import Header from "../../componentss/header/Header";
import Search from "../../containers/search/Search";
import Categories from "../../containers/categories/Categories";
import NewArrival from "../../containers/newArrival/NewArrival";
import Recommended from "../../containers/recommended/Recommended";
import LocalServices from "../../containers/localServicees/LocalServices";
import Ads from '../../componentss/ads/Ads';
import Loading from '../../componentss/loading/Loading';

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
          <Loading />
      ) :
        <div className="pb-[100px]">
          <Header />
          <Search />
          <Categories />
          <Ads />
          <NewArrival />
          <Recommended />
          <LocalServices />
        </div>
      }
    </div>
    
  );
}