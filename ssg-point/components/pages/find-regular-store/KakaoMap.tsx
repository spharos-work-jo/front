"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  // 스크립트 주입
  const mapScript = document.createElement("script");
  const [mylocation, setMylocation] = useState<any>({
    lat: 0,
    lon: 0,
  });
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  // 매장들 정보
  const locations: any[] = [
    { place: "임시 1", lat: 35.1077352, lng: 129.050384 },
    { place: "임시 2", lat: 35.1087352, lng: 129.051384 },
  ];

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 현재 위치 알아내기.
          navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

            let locPosition = new window.kakao.maps.LatLng(lat, lon); // geolocation으로 얻어온 좌표
            const newOption = {
              center: new window.kakao.maps.LatLng(lon, lat),
              level: 3,
            };

            // 지도를 표시할 div
            const mapContainer = document.getElementById("map");
            // 세팅 (div에 지도 옵션 부여)
            const map = new window.kakao.maps.Map(mapContainer, newOption);
            // 해당 위치로 초점 이동
            map.setCenter(locPosition);

            // 마커 표시할 부분
            const markerPosition = new window.kakao.maps.LatLng(lat, lon);
            // 결과값을 마커로 표시
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: markerPosition,
            });
            // locations에 저장된 위치 마커에 표시
            for (var i = 0; i < locations.length; i++) {
              var new_marker = new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(
                  locations[i].lat,
                  locations[i].lng
                ),
              });
            }
            // 마커 표시
            marker.setMap(map);
          });
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때
          // 지도를 표시할 div
          const mapContainer = document.getElementById("map");

          // 지도 초기 옵션
          const mapOption = {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

          // 세팅 (div에 지도 옵션 부여)
          const map = new window.kakao.maps.Map(mapContainer, mapOption);
          // 자기 위치 확인
          let locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
          map.setCenter(locPosition);
          alert("현재 위치를 찾을 수 없습니다!");
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <>
      <h3 className="hidden">지도로 찾기</h3>
      <div className="w[100%] h-[100%]" id="map" />
    </>
  );
};
export default KakaoMap;
