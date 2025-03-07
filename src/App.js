import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {
  const [memos, setMemos] = useState([{
    title: 'Test memo',
    content: 'This is a test memo',
    createdAt: 0,
    updatedAt: 0,
  }, {
    title: 'Test memo 2',
    content: 'This is a test memo 2',
    createdAt: 0,
    updatedAt: 0,
  },
  ]);
  const [selectedMemoIdx, setSelectedMemoIdx] = useState(0);
  const setMemo = (memo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIdx] = memo;
    setMemos(newMemos);
  };


  return (
    <div className="App">
      <SideBar memos={memos} setSelectedMemoIdx={setSelectedMemoIdx} />
      <MemoContainer memo={memos[selectedMemoIdx]} setMemo={setMemo} />
    </div>
  );
}

export default App;
