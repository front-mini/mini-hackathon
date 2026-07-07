import Button from "../components/Button/Button"
import './SharePage.css'
import character_share from "../assets/character_share.png"

export default function NewPage() {
    return (
        <div className="main">
            <div className="content sharePage">
                <div className="pageTitle" >
                    <h1>함께할 사람들에게 공유하기</h1>
                    <p>링크만 있으면 누구나 참여 가능해요</p>
                </div>
                <div>
                    <img src={character_share} alt="character" />
                </div>
            </div>
            <div className="buttons">
                <Button text={'링크 복사'} variant="white" />
                <Button text={'나도 출발지 입력하기'} / >
            </div>
        </div>
    )
}