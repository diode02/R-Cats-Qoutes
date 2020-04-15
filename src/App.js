import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import "./App.css";

import { apiRequest } from "./redux/cat/cat.actions";

import { selectCatImgUrl, selectCatQouteText } from "./redux/cat/cat.selectors";
import { render } from "@testing-library/react";

class App extends React.Component {
  handleClick = () => {
    const { apiRequest } = this.props;
    apiRequest();
  };

  componentDidMount() {
    const { apiRequest } = this.props;
    apiRequest();
  }

  render() {
    const { catImageUrl, catQouteText } = this.props;

    return (
      <div className="App">
        <h1>Cats + Quotes</h1>
        <div className="row">
          <img
            style={{
              height: "400px",
              width: "400px",
            }}
            src={catImageUrl}
            alt="A cat"
          />
        </div>
        <blockquote>{catQouteText}</blockquote>
        <button onClick={this.handleClick}>Gimme more...</button>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  apiRequest: () => dispatch(apiRequest()),
});

const mapStateToProps = createStructuredSelector({
  catImageUrl: selectCatImgUrl,
  catQouteText: selectCatQouteText,
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
