import React, { useState, useEffect } from 'react';
import './EmotionalSpectrum.css';
import { auth } from '../../firebase';

const categories = {
  Happiness: [
    { name: 'Joy', icon: 'fas fa-smile-beam' },
    { name: 'Gratitude', icon: 'fas fa-hands' },
    { name: 'Serenity', icon: 'fas fa-dove' },
    { name: 'Elation', icon: 'fas fa-grin-stars' },
  ],
  Sadness: [
    { name: 'Grief', icon: 'fas fa-heart-broken' },
    { name: 'Disappointment', icon: 'fas fa-frown' },
    { name: 'Loneliness', icon: 'fas fa-user-slash' },
    { name: 'Melancholy', icon: 'fas fa-cloud-rain' },
  ],
  Anger: [
    { name: 'Frustration', icon: 'fas fa-bolt' },
    { name: 'Resentment', icon: 'fas fa-skull-crossbones' },
    { name: 'Irritation', icon: 'fas fa-exclamation-circle' },
    { name: 'Rage', icon: 'fas fa-fire' },
  ],
  Fear: [
    { name: 'Peace', icon: 'fas fa-seedling' },
    { name: 'Contentment', icon: 'fas fa-coffee' },
    { name: 'Balance', icon: 'fas fa-balance-scale' },
    { name: 'Tranquility', icon: 'fas fa-water' },
  ],
};

const EmotionFileNames = {
  "boysad.jpg": "Sadness",
  "boyangry.jpg": "Anger",
  "girlhappy.jpg": "Happiness",
};

const emotionYouTubeMap = {
  Anger: [
    "https://www.youtube.com/embed/6BYIKEH0RCQ?si=o3LsLBw9BO_jxtNG",
    "https://www.youtube.com/embed/abiL84EAWSY?si=d7P1baefv5fyXFAF" ],
  Sadness: [
    
    "https://youtu.be/abiL84EAWSY?si=f4Thj2XeAdwRBjvl"
  ],
  Happiness: [
    "https://youtu.be/R7spJ7YjNOY?si=HZmascHaewKCOM0v",
    ""
  ],
  Fear: [
    "https://www.youtube.com/embed/2UJ9g3L6RBw",
    "https://www.youtube.com/embed/bnVUHWCynig"
  ],
};


const EmotionalSpectrum = () => {
  const [activeCategory, setActiveCategory] = useState('Happiness');
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [uploadType, setUploadType] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [personalizedContent, setPersonalizedContent] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const detectEmotion = async (mediaFile) => {
    setLoading(true);
    try {
      const fileName = mediaFile.name.toLowerCase();
      const detectedEmotion = EmotionFileNames[fileName] || "Anger";
      setSelectedEmotion({ name: detectedEmotion });

      // Personalized response based on emotion
      switch (detectedEmotion) {
        case "Anger":
          setPersonalizedContent("Take a deep breath. You're feeling angry. Try calming techniques!");
          break;
        case "Sadness":
          setPersonalizedContent("You're feeling sad. Remember, it’s okay. Brighter days ahead!");
          break;
        case "Happiness":
          setPersonalizedContent("You’re radiating joy! Keep the vibe going!");
          break;
        default:
          setPersonalizedContent("Couldn’t detect a clear emotion. Stay positive!");
      }
    } catch (error) {
      console.error('Error detecting emotion:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      detectEmotion(file);
    }
  };

  const renderImagePreview = () =>
    imageFile ? (
      <img
        src={URL.createObjectURL(imageFile)}
        alt="Preview"
        className="media-preview"
      />
    ) : null;

  return (
    <div className="container">
      <h1 className="title">RasaSetu | Complete Emotional Palette</h1>

      {!user && <p className="login-prompt">🔒 Please log in to access the emotional spectrum features.</p>}

      {/* Upload Toggle */}
      <div className="media-toggle">
        <label>
          <input
            type="radio"
            name="mediaType"
            value="image"
            checked={uploadType === 'image'}
            onChange={() => {
              setUploadType('image');
              setImageFile(null);
              setVideoFile(null);
            }}
          />
          Upload Image
        </label>

        <label>
          <input
            type="radio"
            name="mediaType"
            value="video"
            checked={uploadType === 'video'}
            onChange={() => {
              setUploadType('video');
              setImageFile(null);
              setVideoFile(null);
            }}
          />
          Upload Video
        </label>
      </div>

      {/* Upload Input */}
      {uploadType === 'image' && (
        <div className="media-upload">
          <label>
            📷 Select Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={!user}
            />
          </label>
          {renderImagePreview()}
        </div>
      )}

      {loading && <div className="loading">⏳ Detecting emotion...</div>}

      {selectedEmotion && (
        <div className="emotion-result">
          <h2>Detected Emotion: {selectedEmotion.name}</h2>
        </div>
      )}

      {personalizedContent && (
        <div className="personalized-content">
          <p>{personalizedContent}</p>
        </div>
      )}

      {/* Emotion Categories */}
      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Emotions in Category */}
      <div className="emotion-category">
        {categories[activeCategory].map((emotion) => (
          <div
            key={emotion.name}
            className={`emotion-card ${
              selectedEmotion?.name === emotion.name ? 'selected' : ''
            }`}
            onClick={() => setSelectedEmotion(emotion)}
          >
            <i className={emotion.icon}></i>
            <span>{emotion.name}</span>
          </div>
        ))}
      </div>

      {/* Extras Section */}
      <div className="extras">
        <div className="chatbot">
  <div className="cropped-webview">
    <iframe
      src="https://adityabot.ccbp.tech" // Replace with the actual bot URL
      title="RasaSetu ChatBot"
      className="cropped-iframe"
    ></iframe>
  </div>
</div>

        {selectedEmotion && emotionYouTubeMap[selectedEmotion.name] && (
          <div className="youtube-video" align:clearInterval>
            <h3>🎥 Helpful Video for {selectedEmotion.name}</h3>
            <iframe
              width="560"
              height="315"
              src={emotionYouTubeMap[selectedEmotion.name]}
              title="Emotional Wellness Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionalSpectrum;
