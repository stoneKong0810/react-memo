import SideBarHeader from '../SideBarHeader';
import SideBarFooter from '../SideBarFooter';
import MemoList from '../MemoList';
import './index.css';

function SideBar({
  memos,
  addMemo,
  selectedMemoIdx,
  setSelectedMemoIdx,
  deleteMemo,
}) {
  return (
    <div className={'SideBar'}>
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
