import './index.css';

function MemoItem({ children: title, onClickItem, onClickDelete, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClickItem}
    >
      <span className={'MemoItem__title'}>{title}</span>
      <button className={'MemoItem__del-btn'} onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;
