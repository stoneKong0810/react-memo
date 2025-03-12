import MemoItem from '../MemoItem';

function MemoList({ memos, selectedMemoIdx, setSelectedMemoIdx, deleteMemo }) {
  return (
    <div>
      {memos.map((memo, idx) => (
        <MemoItem
          className={'MemoItem'}
          key={idx}
          onClickItem={() => {
            setSelectedMemoIdx(idx);
          }}
          isSelected={idx === selectedMemoIdx}
          onClickDelete={(e) => {
            deleteMemo(idx);
            e.stopPropagation();
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
