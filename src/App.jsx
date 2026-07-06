import './App.css'
import List from './components/List/list'
import UserList from './components/Saram/saram'

export default function App() {
  let title = "한국외대";
  return (
    <>
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>

      <div className='main-container'>
        <div className='list-container'>
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
        <UserList />
      </div>
    </>
  );
}
