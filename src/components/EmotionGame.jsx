import React, { useState } from 'react';

const EmotionGame = () => {
  const [gameUrl, setGameUrl] = useState('');

  const games = [
    'https://playtictactoe.org/',
    'https://minesweeper.online/'
  ];

  const handlePlayNow = () => {
    const randomGame = games[Math.floor(Math.random() * games.length)];
    setGameUrl(randomGame);
  };

  return (
    <div className="game">
      <h3>Emotion Game</h3>
      <button className="game-btn" onClick={handlePlayNow}>🎮 Play Now</button>

      {gameUrl && (
        <div style={{
          marginTop: '16px',
          width: '100%',
          maxWidth: '600px',
          height: '400px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          <iframe
            src={gameUrl}
            title="Emotion Game"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none' }}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default EmotionGame;
