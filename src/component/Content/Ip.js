/*global kakao*/
import React from "react";
import "./Ip.css";

/*function Ip({ data }) {
  const container = document.getElementById("content__map");
  const option = {};
  return (
    <div className="content">
      <div className="content__main">
        <div className="content__userip">
          당신의 아이피는 {data.query} 입니다
        </div>
        <div className="content__userip__data">
          <div id="content__title">네트워크 정보</div>
          <div id="content__data">
            지역 : {data.regionName} {data.city}
          </div>

          <div id="content__data">
            국가 : {data.country} [ {data.countryCode} ]
          </div>
          <div id="content__data">우편번호 : {data.zip}</div>
          <div id="content__data">ISP : {data.isp}</div>
          <div id="content__map"></div>
        </div>
      </div>
    </div>
  );
}*/

class Ip extends React.Component {
  state = {
    background_list: [
      "linear-gradient(#4facfe, #00f2fe)",
      "linear-gradient(#667eea, #764ba2)",
      "linear-gradient(#6a11cb, #2575fc)",
      "linear-gradient(#00c6fb, #005bea)", //
      "linear-gradient(#a18cd1, #fbc2eb)",
      "linear-gradient(#ff5858, #f09819)",
      "linear-gradient(#f093fb, #f5576c)",
      "linear-gradient(#48c6ef, #6f86d6)",
      "linear-gradient(#7028e4, #e5b2ca)",
      "linear-gradient(#ff758c, #ff7eb3)",
    ],
    background: "linear-gradient(#5f72bd, #9b23ea)",
  };
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7b6b103cc0216f03f1a166580cd83f09&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        console.log("loaded");
        let container = document.getElementById("content__map");
        let options = {
          center: new kakao.maps.LatLng(
            this.props.data.latitude,
            this.props.data.longitude
          ),
          level: 5,
        };

        var map = new kakao.maps.Map(container, options); // 지도를 생성합니다

        // 마커가 표시될 위치입니다
        var markerPosition = new kakao.maps.LatLng(
          this.props.data.latitude,
          this.props.data.longitude
        );

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };

    const random_bg = Math.floor(Math.random() * 10);
    console.log(this.state.background_list[random_bg]);
    this.setState({ background: this.state.background_list[random_bg] });
  }
  render() {
    const data = this.props.data;

    return (
      <div className="content" style={{ background: this.state.background }}>
        <div className="content__main">
          <div className="content__userip">
            당신의 아이피는 {data.ip} 입니다
          </div>
          <div className="content__userip__data">
            <div id="content__desc">
              <div id="content__title">네트워크 정보</div>
              <div id="content__data">대륙: {data.continent_name}</div>
              <div id="content__data">국가: {data.country_name}</div>
              <div id="content__data">
                지역: {data.region}, {data.city}
              </div>
              <div id="content__data">우편번호: {data.postal}</div>
              <div id="content__data">
                프록시, VPN:{" "}
                {data.threat.is_proxy
                  ? "프록시, VPN 을 사용한 IP가 맞습니다"
                  : "프록시, VPN을 사용한 IP가 아닙니다"}
              </div>
            </div>

            <div id="content__map"></div>
          </div>
        </div>
      </div>
    );
  }
}

/*

{
status: "success",
continent: "Asia",
country: "South Korea",
countryCode: "KR",
region: "42",
regionName: "Gangwon-do",
city: "Chuncheon",
district: "",
zip: "24329",
lat: 37.8728,
lon: 127.7322,
timezone: "Asia/Seoul",
isp: "SK Broadband Co Ltd",
org: "SK Broadband Co Ltd",
as: "AS9318 SK Broadband Co Ltd",
proxy: false,
hosting: false,
query: "175.123.2.76"

*/

export default Ip;
