"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

const NaverMaps = () => {
  const mapScript = document.createElement("script");
  mapScript.async = true;
  mapScript.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5z4dqiw6hi'
  document.head.appendChild(mapScript);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.naver.maps.load(() => {
        // 지도 생성
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.naver.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            zoom: 3, // 지도의 확대 레벨
          };

        const map = new window.naver.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.naver.maps.LatLng(
          33.450701,
          126.570667
        );

        // 결과값을 마커로 표시
        const marker = new window.naver.maps.Marker({
          map: map,
          position: markerPosition,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);
  return <div className="w[100%] h-[70%] " id="map" />;
};
export default NaverMaps;
