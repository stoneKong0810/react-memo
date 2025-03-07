import MemoItem from './MemoItem';

function MemoList({ memos, setSelectedMemoIdx }) {
  return (
    <div>
      {memos.map((memo, idx) => (
        <MemoItem
          key={idx}
          onClick={() => setSelectedMemoIdx(idx)}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;