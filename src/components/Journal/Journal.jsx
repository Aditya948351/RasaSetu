import React, { useState } from 'react';
import './Journal.css';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAddEntry = () => {
    if (entry.trim() !== '') {
      const newEntry = {
        text: entry,
        date: new Date().toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        id: Date.now()
      };
      setEntries([newEntry, ...entries]);
      setEntry('');
    }
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="journal-container">
      <h2>📝 Mood Journal</h2>
      <p className="journal-intro">
        Reflect on your emotions and keep track of how you feel each day. Organized journal entries help you notice trends and take better care of your mental well-being.
      </p>

      <div className="journal-entry-box">
        <textarea
          className="journal-textarea"
          placeholder="How are you feeling today?"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button className="journal-btn" onClick={handleAddEntry}>
          Save Entry
        </button>
      </div>

      {entries.length > 0 && (
        <div className="journal-table-wrapper">
          <h3 className="entry-heading">Journal History</h3>
          <table className="journal-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Entry</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.text}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteEntry(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Journal;
