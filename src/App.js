import React, { useState, useEffect, useCallback } from 'react';
import { promptDataLibrary } from './promptDataLibrary';

const PromptGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('general');

  const generateRandomPrompt = useCallback(() => {
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    
    let newPrompt = '';
    switch (selectedCategory) {
      case 'general':
        newPrompt = `A ${getRandomItem(promptDataLibrary.shotTypes)} ${getRandomItem(promptDataLibrary.cameraMovements)} shot of a ${getRandomItem(promptDataLibrary.subjects)} ${getRandomItem(promptDataLibrary.actions)}. `;
        newPrompt += `The scene is lit with ${getRandomItem(promptDataLibrary.lighting)} light. Set in ${getRandomItem(promptDataLibrary.settings)}. `;
        newPrompt += `The mood is ${getRandomItem(promptDataLibrary.moods)}. `;
        newPrompt += `Visual style: ${getRandomItem(promptDataLibrary.visualEffects)}. Genre: ${getRandomItem(promptDataLibrary.genres)}.`;
        break;
      case 'human':
        newPrompt = `A ${getRandomItem(promptDataLibrary.shotTypes)} ${getRandomItem(promptDataLibrary.cameraMovements)} shot of a person ${getRandomItem(promptDataLibrary.actions)}. `;
        newPrompt += `Their expression is ${getRandomItem(promptDataLibrary.expressions)}. `;
        newPrompt += `The scene is lit with ${getRandomItem(promptDataLibrary.lighting)} light. Set in ${getRandomItem(promptDataLibrary.settings)}. `;
        newPrompt += `The mood is ${getRandomItem(promptDataLibrary.moods)}. `;
        break;
      case 'landscape':
        newPrompt = `A ${getRandomItem(promptDataLibrary.shotTypes)} ${getRandomItem(promptDataLibrary.cameraMovements)} shot of a ${getRandomItem(promptDataLibrary.settings)}. `;
        newPrompt += `The scene is lit with ${getRandomItem(promptDataLibrary.lighting)} light. `;
        newPrompt += `The mood is ${getRandomItem(promptDataLibrary.moods)}. `;
        newPrompt += `Visual style: ${getRandomItem(promptDataLibrary.visualEffects)}.`;
        break;
      case 'action':
        newPrompt = `A ${getRandomItem(promptDataLibrary.shotTypes)} ${getRandomItem(promptDataLibrary.cameraMovements)} shot of a ${getRandomItem(promptDataLibrary.subjects)} ${getRandomItem(promptDataLibrary.actions)}. `;
        newPrompt += `Set in ${getRandomItem(promptDataLibrary.settings)}. `;
        newPrompt += `The scene is lit with ${getRandomItem(promptDataLibrary.lighting)} light. `;
        newPrompt += `Visual style: ${getRandomItem(promptDataLibrary.visualEffects)}. Genre: ${getRandomItem(promptDataLibrary.genres)}.`;
        break;
      case 'abstract':
        newPrompt = `A ${getRandomItem(promptDataLibrary.shotTypes)} of an abstract ${getRandomItem(promptDataLibrary.subjects)}. `;
        newPrompt += `Visual style: ${getRandomItem(promptDataLibrary.visualEffects)}. `;
        newPrompt += `The mood is ${getRandomItem(promptDataLibrary.moods)}. `;
        newPrompt += `Lit with ${getRandomItem(promptDataLibrary.lighting)} light.`;
        break;
      default:
        newPrompt = 'Please select a valid category.';
        break;
    }
    
    setPrompt(newPrompt);
    setShowAlert(newPrompt.length > 500);
  }, [selectedCategory]);

  useEffect(() => {
    generateRandomPrompt();
  }, [selectedCategory, generateRandomPrompt]);

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
          <option value="abstract">Abstract</option>
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