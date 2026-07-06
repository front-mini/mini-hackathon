import React from 'react';
import Button from './components/Button/Button.jsx'; 
import LocationItem from './components/LocationItem/LocationItem.jsx'; 
import ParticipantItem from './components/ParticipantItem/ParticipantItem.jsx';
import ScheduleList from './components/ScheduleList/ScheduleList.jsx'

const BLUE_TEXT = "약속 생성 완료";
const WHITE_TEXT = "나도 출발지 입력하기 →";
const GRAY_TEXT = "이 출발지로 확정";

// 출발지 테스트 데이터
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

// 참여자 목록 
const participantTestData = [
  { id: 1, initial: "지", name: "지민", station: "강남역" },
  { id: 2, initial: "말", name: "말랑 복숭아 (나)", station: "외대앞역" },
  { id: 3, initial: "서", name: "서연", station: "홍대입구역" }
];

export default function App() {
  return (
    <div style={{ maxWidth: '390px', margin: '40px auto', padding: '0 16px' }}>

      <ScheduleList label="제목 (필수)" value="제목을 입력해 주세요" />
      <ScheduleList label="날짜 / 시간 (선택)" value="아직 미정이에요" />

      <div style={{ height: '20px' }} />
      
      {/*  출발지 리스트 */}
      {locationTestData.map((item) => (
        <LocationItem 
          key={item.id}
          title={item.title}
          address={item.address}
          isSubway={item.isSubway}
          isSelected={item.isSelected}
        />
      ))}

      <div style={{ height: '20px' }} />


      {participantTestData.map((user) => (
        <ParticipantItem 
          key={user.id}
          initial={user.initial}
          name={user.name}
          station={user.station}
        />
      ))}

      <div style={{ height: '20px' }} />


      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Button text={BLUE_TEXT} variant="blue" />
        <Button text={WHITE_TEXT} variant="white" />
        <Button text={GRAY_TEXT} variant="gray" />
      </div>

    </div>
  );
}