import React from "react";
import axios from "axios";

import Ip from "./component/Content/Ip";
import Footer from "./component/Footer/Footer";

import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    data: [],
  };

  GetUserIP = async () => {
    const { data } = await axios.get(
      "https://api.ipdata.co?api-key=997dc9266c4159a844b1c98b9318126e5de620a4ab6ec88953c33dd6"
    );
    console.log(data);
    this.setState({ data, isLoading: false });
  };

  componentDidMount() {
    this.GetUserIP();
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <div className="loader__gif">
              <img src="./loading.gif" alt="loader" />
            </div>
          </div>
        ) : (
          <div className="main">
            <Ip key={data.ip} data={data} />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
