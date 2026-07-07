import Button from "../components/Button/Button"
import ScheduleList from "../components/ScheduleList/ScheduleList"
import './NewPage.css'
import icon_title from "../assets/icon_title.png"
import icon_date from "../assets/icon_date.png"

export default function NewPage() {
    return (
        <div className="main">
            <div className="content newPage">
                <div className="pageTitle">
                    <h1><span>새 약속</span> 시작하기</h1>
                    <p>제목이랑 시간을 정하며 시작해볼까요?</p>
                </div>
                <div>
                    <ScheduleList icon={icon_title} title={"제목"} placeholder={"제목을 입력해 주세요"} type={"text"} />
                    <ScheduleList icon={icon_date} title={"날짜"} placeholder={"날짜를 입력해 주세요"} type={"datetime-local"} />
                </div>
            </div>
            <div className="buttons">
                <Button text={'약속 생성 완료'} />
            </div>
        </div>
    )
}