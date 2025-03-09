import MemoItem from './MemoItem';

function MemoList({ memos, selectedMemoIdx, setSelectedMemoIdx }) {
  return (
    <div>
      {memos.map((memo, idx) => (
        <MemoItem
          className={'MemoItem'}
          key={idx}
          onClick={() => {
            setSelectedMemoIdx(idx);
          }}
          isSelected={idx === selectedMemoIdx}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;