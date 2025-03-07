import MemoList from './MemoList';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

function SideBar({ memos, selectedMemoIdx, setSelectedMemoIdx }) {
  return (
    <div className={'SideBar'}>
      <SideBarHeader />
      <MemoList memos={memos} selectedMemoIdx={selectedMemoIdx} setSelectedMemoIdx={setSelectedMemoIdx} />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;