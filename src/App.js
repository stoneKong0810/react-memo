import './App.css';
import MemoContainer from './components/MemoContainer';
import { useCallback, useState } from 'react';
import SideBar from './components/SideBar';
import { getItem, setItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debouncedSetItem = debounce(setItem, 3000);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);

  const [selectedMemoIdx, setSelectedMemoIdx] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos[selectedMemoIdx] = newMemo;
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
    },
    [selectedMemoIdx],
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const DATE_TIME = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: 'New memo',
          content: '',
          createdAt: DATE_TIME,
          updatedAt: DATE_TIME,
        },
      ];
      debouncedSetItem('memo', newMemos);

      return newMemos;
    });
    setSelectedMemoIdx(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (idx) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(idx, 1);
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
      if (idx === selectedMemoIdx) {
        setSelectedMemoIdx(0);
      }
    },
    [selectedMemoIdx],
  );

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
