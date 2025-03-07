function MemoContainer({ memo, setMemo }) {
  return (
    <div className={'MemoContainer'}>
      <div>
        <input type={'text'}
               className={'MemoContainer__title'}
               value={memo.title}
               onChange={e => {
                 setMemo({ ...memo, title: e.target.value, updatedAt: Date.now() });
               }}
        />
      </div>
      <div>
        <textarea className={'MemoContainer__content'}
                  value={memo.content}
                  onChange={e => {
                    setMemo({ ...memo, content: e.target.value, updatedAt: Date.now() });
                  }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;