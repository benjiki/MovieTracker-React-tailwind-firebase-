import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import SearchRow from "../components/SearchRow";
import { requests, options } from "../Requests"; // Importing requests and options from the file

const Home = ({ searchQuery }) => {
  return (
    <>
      <Main />
      {searchQuery && (
        <SearchRow
          rowId="6"
          title={`Search results for "${searchQuery}"`}
          searchvalue={searchQuery}
          options={options}
        />
      )}

      <Row
        rowId="1"
        title="Top Rated"
        fetchUrl={requests.requestTopRated}
        options={options}
      />
      <Row
        rowId="2"
        title="Popular"
        fetchUrl={requests.requestPopular}
        options={options}
      />
      <Row
        rowId="3"
        title="Upcomings"
        fetchUrl={requests.requestUpcoming}
        options={options}
      />
      <Row
        rowId="4"
        title="Popular Tv list"
        fetchUrl={requests.requestPopularTvlist}
        options={options}
      />
      <Row
        rowId="5"
        title="Top Rated Tv list"
        fetchUrl={requests.requestTopratedTvlist}
        options={options}
      />
    </>
  );
};

export default Home;
