function MemoItem({ children: title, onClick }) {
  return (
    <div
      onClick={onClick}>{title}
    </div>
  );
}

export default MemoItem;