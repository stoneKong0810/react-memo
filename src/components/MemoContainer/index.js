import './index.css';

function MemoContainer({ memo, setMemo }) {
  const DATE_TIME = new Date().getTime();

  if (!memo) {
    return (
      <div>
        <h1>메모가 없습니다.</h1>
      </div>
    );
  }

  return (
    <div className={'MemoContainer'}>
      <div>
        <input
          type={'text'}
          className={'MemoContainer__title'}
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: DATE_TIME,
            });
          }}
        />
      </div>
      <div>
        <textarea
          className={'MemoContainer__content'}
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: DATE_TIME,
            });
          }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;
