import React from 'react';
import Button from './components/Button/Button.jsx'; 
import LocationItem from './components/LocationItem/LocationItem.jsx'; 

const BLUE_TEXT = "약속 생성 완료";
const WHITE_TEXT = "나도 출발지 입력하기 →";
const GRAY_TEXT= "이 출발지로 확정";

const locationTestData = [
  {
    id: 1,
    title: "외대앞역 1호선",
    address: "6.9km · 서울 동대문구 휘경로 27 (이문동)",
    isSubway: true,
    isSelected: true
  },
  {
    id: 2,
    title: "외대앞역 공영주차장",
    address: "6.8km · 서울 동대문구 휘경로 28 (이문동)",
    isSubway: false,
    isSelected: false
  }
];

export default function App() {
  return (
    <div style={{ maxWidth: '390px', margin: '40px auto', padding: '0 16px' }}>
      
      {/* 1. 출발지 리스트 목록 */}
      {locationTestData.map((item) => (
        <LocationItem 
          key={item.id}
          title={item.title}
          address={item.address}
          isSubway={item.isSubway}
          isSelected={item.isSelected}
        />
      ))}

      {/* 간격 확보 */}
      <div style={{ height: '20px' }} />

      {/* 2. 하단 메인 버튼 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Button text={BLUE_TEXT} variant="blue" />
        <Button text={WHITE_TEXT} variant="white" />
        <Button text={GRAY_TEXT} variant="gray" />
      </div>

    </div>
  );
}