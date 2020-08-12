import React from "react";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews";
import Overview from './components/overview/Overview';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          Hello
        </h1>
        <Overview />
        <RatingsAndReviews />
      </>
    );
  }
}

export default App;