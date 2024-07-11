import React, { useState, useEffect } from 'react';

// Prompt data
const promptData = {
  shotTypes: ['close-up', 'medium', 'wide', 'aerial', 'POV', 'over-the-shoulder', 'Dutch angle'],
  cameraMovements: ['static', 'handheld', 'tracking', 'panning', 'dolly zoom', 'crane shot', 'steadicam'],
  subjects: [
    'person', 'animal', 'landscape', 'cityscape', 'object', 'vehicle', 'building',
    'natural phenomenon', 'crowd', 'historical event', 'futuristic scene', 'abstract concept'
  ],
  actions: [
    'walking', 'running', 'dancing', 'flying', 'floating', 'transforming', 'exploding',
    'growing', 'shrinking', 'melting', 'freezing', 'time-lapsing', 'reverse motion'
  ],
  expressions: [
    'joyful', 'contemplative', 'intense', 'surprised', 'angry', 'serene', 'confused',
    'determined', 'afraid', 'excited', 'indifferent', 'mysterious'
  ],
  lighting: [
    'soft diffused', 'harsh dramatic', 'warm golden hour', 'cool moonlight', 'neon', 'strobe',
    'silhouette', 'high-key', 'low-key', 'practical lights', 'fire-lit', 'underwater'
  ],
  settings: [
    'bustling city street', 'serene forest glade', 'cozy dimly lit cafe', 'vast desert',
    'futuristic metropolis', 'ancient ruins', 'underwater reef', 'space station',
    'post-apocalyptic wasteland', 'Victorian era parlor', 'neon-lit cyberpunk alley'
  ],
  moods: [
    'mysterious', 'uplifting', 'tense', 'romantic', 'melancholic', 'energetic', 'eerie',
    'nostalgic', 'chaotic', 'peaceful', 'surreal', 'dystopian'
  ],
  visualEffects: [
    'slow motion', 'time-lapse', 'particle effects', 'holographic projections', 'glitch effects',
    'color shifting', 'double exposure', 'light trails', 'morphing', 'dream-like distortions'
  ],
  genres: [
    'sci-fi', 'fantasy', 'horror', 'romance', 'action', 'documentary', 'film noir',
    'western', 'musical', 'historical drama', 'psychological thriller', 'magical realism'
  ]
};

const PromptGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('general');

  const generateRandomPrompt = () => {
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    
    let newPrompt = '';
    if (selectedCategory === 'general' || selectedCategory === 'human') {
      newPrompt = `A ${getRandomItem(promptData.shotTypes)} ${getRandomItem(promptData.cameraMovements)} shot of a ${getRandomItem(promptData.subjects)} ${getRandomItem(promptData.actions)}. `;
      if (selectedCategory === 'human') {
        newPrompt += `Their expression is ${getRandomItem(promptData.expressions)}. `;
      }
      newPrompt += `The scene is lit with ${getRandomItem(promptData.lighting)} light. Set in ${getRandomItem(promptData.settings)}. `;
      newPrompt += `The mood is ${getRandomItem(promptData.moods)}. `;
      newPrompt += `Visual style: ${getRandomItem(promptData.visualEffects)}. Genre: ${getRandomItem(promptData.genres)}.`;
    } else if (selectedCategory === 'landscape') {
      newPrompt = `A ${getRandomItem(promptData.shotTypes)} ${getRandomItem(promptData.cameraMovements)} shot of a ${getRandomItem(promptData.settings)}. `;
      newPrompt += `The scene is lit with ${getRandomItem(promptData.lighting)} light. `;
      newPrompt += `The mood is ${getRandomItem(promptData.moods)}. `;
      newPrompt += `Visual style: ${getRandomItem(promptData.visualEffects)}. Genre: ${getRandomItem(promptData.genres)}.`;
    } else if (selectedCategory === 'action') {
      newPrompt = `A ${getRandomItem(promptData.shotTypes)} ${getRandomItem(promptData.cameraMovements)} shot of a ${getRandomItem(promptData.subjects)} ${getRandomItem(promptData.actions)}. `;
      newPrompt += `Set in ${getRandomItem(promptData.settings)}. `;
      newPrompt += `The scene is lit with ${getRandomItem(promptData.lighting)} light. `;
      newPrompt += `The mood is ${getRandomItem(promptData.moods)}. `;
      newPrompt += `Visual style: ${getRandomItem(promptData.visualEffects)}. Genre: ${getRandomItem(promptData.genres)}.`;
    }
    
    setPrompt(newPrompt);
    setShowAlert(newPrompt.length > 500);
  };

  useEffect(() => {
    generateRandomPrompt();
  }, [selectedCategory]);

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Advanced Cinematic Video Prompt Generator</h1>
      
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="category-select">Choose a category: </label>
        <select 
          id="category-select"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginLeft: '0.5rem' }}
        >
          <option value="general">General</option>
          <option value="human">Human-focused</option>
          <option value="landscape">Landscape</option>
          <option value="action">Action</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Generated Prompt:</h2>
        <p style={{ padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}>{prompt}</p>
        <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '0.25rem' }}>Character count: {prompt.length}</p>
      </div>

      {showAlert && (
        <div style={{ padding: '0.5rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '0.25rem', marginBottom: '1rem' }}>
          Warning: Prompt exceeds 500 characters. Consider simplifying or regenerating.
        </div>
      )}

      <button 
        onClick={generateRandomPrompt}
        style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '0.25rem', 
          cursor: 'pointer',
          marginRight: '0.5rem'
        }}
      >
        Generate New Prompt
      </button>

      <button 
        onClick={() => navigator.clipboard.writeText(prompt)}
        style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: '#10b981', 
          color: 'white', 
          border: 'none', 
          borderRadius: '0.25rem', 
          cursor: 'pointer' 
        }}
      >
        Copy Prompt
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PromptGenerator />
    </div>
  );
}

export default App;

