function MemoItem({ children: title, onClick, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default MemoItem;