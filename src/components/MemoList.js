function MemoList({ memos }) {
  return (
    <div>
      {memos.map((memo, idx) => (
        <div key={idx}>{memo.title}</div>
      ))}
    </div>
  );
}

export default MemoList;