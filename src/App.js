import './App.css';
import MemoContainer from './components/MemoContainer';
import { useState } from 'react';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Test memo',
      content: 'This is a test memo',
      createdAt: 0,
      updatedAt: 0,
    },
    {
      title: 'Test memo 2',
      content: 'This is a test memo 2',
      createdAt: 0,
      updatedAt: 0,
    },
  ]);

  const DATE_TIME = new Date().getTime();

  const [selectedMemoIdx, setSelectedMemoIdx] = useState(0);

  const setMemo = (memo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIdx] = memo;
    setMemos(newMemos);
  };

  const addMemo = () => {
    setMemos([
      ...memos,
      {
        title: 'New memo',
        content: '',
        createdAt: DATE_TIME,
        updatedAt: DATE_TIME,
      },
    ]);
    setSelectedMemoIdx(memos.length);
  };

  const deleteMemo = (idx) => {
    const newMemos = [...memos];
    newMemos.splice(idx, 1);
    setMemos(newMemos);
    setSelectedMemoIdx(0);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIdx]} setMemo={setMemo} />
    </div>
  );
}

export default App;
