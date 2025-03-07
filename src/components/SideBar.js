import MemoList from './MemoList';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

function SideBar({ memos, setSelectedMemoIdx }) {
  return (
    <div className={'SideBar'}>
      <SideBarHeader />
      <MemoList memos={memos} setSelectedMemoIdx={setSelectedMemoIdx} />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;