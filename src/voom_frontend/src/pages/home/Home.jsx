import React from 'react';
import Header from "../../componentss/header/Header";
import Search from "../../containers/search/Search";
import Categories from "../../containers/categories/Categories";
import NewArrival from "../../containers/newArrival/NewArrival";
import Recommended from "../../containers/recommended/Recommended";
import LocalServices from "../../containers/localServicees/LocalServices";
import Ads from '../../componentss/ads/Ads';

export default function Home() {
  return (
    <div className="pb-[100px]">
        <Header />
        <Search />
        <Categories />
        <Ads />
        <NewArrival />
        <Recommended />
        <LocalServices />
    </div>
  );
}