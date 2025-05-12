import React, { useState } from 'react';
import './MoodSelector.css';

const moods = [
  {
    name: 'Calm',
    description: 'You feel peaceful, relaxed, and at ease.',
    color: '#A3D5D3',
    emoji: '🧘‍♀️',
    detail: `Feeling calm is a state of being mentally and emotionally at ease. It often follows mindfulness, deep breathing, or a quiet moment to yourself. When you're calm, you're less reactive, more present, and better able to make thoughtful decisions. Calmness helps in regulating stress, improving focus, and supporting mental clarity. It’s associated with lower heart rates and a sense of well-being. People often strive to cultivate calmness in their daily lives through meditation, nature walks, or simple self-care practices. This mood signifies emotional balance and is essential for maintaining mental health.`
  },
  {
    name: 'Anxious',
    description: 'You feel uneasy, nervous, or worried.',
    color: '#F8C8DC',
    emoji: '😰',
    detail: `Anxiety is a natural response to stress or uncertainty. It can manifest as a racing heart, restlessness, or constant worry. While occasional anxiety is normal, prolonged anxiety can affect your health. People who feel anxious often struggle with focusing or anticipating worst-case scenarios. Understanding your triggers and practicing grounding exercises, breathing, or talking to someone can help ease this emotion. Anxiety is not weakness; it's your brain’s way of trying to keep you safe. Acknowledging it is the first step toward calm and clarity.`
  },
  {
    name: 'Happy',
    description: 'You feel joyful, positive, and uplifted.',
    color: '#FFF4B2',
    emoji: '😊',
    detail: `Happiness is a mood filled with joy, contentment, and gratitude. It’s that uplifting sensation when something good happens or when you're simply enjoying the moment. Whether it’s laughing with a friend or achieving a goal, happiness boosts your energy and overall health. It strengthens relationships, increases motivation, and reduces stress. Happiness doesn’t have to come from big events — small joys, like a favorite song or a sunny day, can spark it too. Embracing happiness, when it comes, builds resilience for tougher times.`
  },
  {
    name: 'Overwhelmed',
    description: 'You feel like there’s too much going on.',
    color: '#D5C6E0',
    emoji: '😵',
    detail: `Feeling overwhelmed is common when life’s demands exceed your capacity to cope. It can feel like you're drowning in responsibilities or emotions. This mood often comes with physical symptoms like fatigue, irritability, or even shut-down. It’s important to take breaks, set boundaries, and ask for help. Prioritizing tasks and practicing self-compassion are essential. Remember, feeling overwhelmed doesn’t mean failure — it’s a signal to slow down and breathe. You're not alone in this; give yourself grace and focus on one step at a time.`
  },
  {
    name: 'Angry',
    description: 'You feel upset, frustrated, or irritated.',
    color: '#FFADAD',
    emoji: '😡',
    detail: `Anger is a strong emotion that arises when you feel wronged, disrespected, or blocked from your goals. It’s a natural part of human experience and can even be healthy when expressed constructively. However, unchecked anger can harm relationships and decision-making. When you're angry, your body reacts — your heart rate rises, and your thoughts may race. Taking time to cool off, reflect, and communicate clearly is key. Anger often points to deeper needs or values that feel violated. Acknowledging this can help transform anger into understanding and growth.`
  },
  {
    name: 'Motivated',
    description: 'You feel focused and ready to take action.',
    color: '#C6F1C6',
    emoji: '🚀',
    detail: `Motivation is the spark that drives action. It’s that internal boost that says, "Let’s do this!" Whether you’re working on a goal, learning a new skill, or trying to improve, motivation gives you energy and direction. It’s often triggered by passion, purpose, or a desire for change. Staying motivated can be tough, so setting small, achievable goals helps. Celebrate progress, even the little wins. Surrounding yourself with inspiration and taking care of your body and mind feeds this powerful mood. Motivation can change your life when harnessed right.`
  },
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-selector-container">
      <h2>Select Your Current Mood</h2>
      <div className="mood-grid">
        {moods.map((mood, index) => (
          <div
            key={index}
            className={`mood-card ${selectedMood === mood.name ? 'selected' : ''}`}
            style={{ backgroundColor: mood.color }}
            onClick={() => setSelectedMood(mood.name)}
          >
            <div className="mood-emoji">{mood.emoji}</div>
            <h3>{mood.name}</h3>
            <p>{mood.description}</p>
          </div>
        ))}
      </div>
      {selectedMood && (
        <div className="mood-detail-box styled-description">
          <h3 className="mood-title">{selectedMood}</h3>
          <p className="mood-text">
            {moods.find((m) => m.name === selectedMood).detail}
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;
