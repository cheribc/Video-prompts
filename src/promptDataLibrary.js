// promptDataLibrary.js

export const promptDataLibrary = {
    shotTypes: [
      'close-up', 'extreme close-up', 'medium', 'medium long', 'wide', 'extreme wide',
      'aerial', 'birds-eye view', 'worms-eye view', 'POV', 'over-the-shoulder',
      'Dutch angle', 'low angle', 'high angle', 'two-shot', 'establishing shot'
    ],
    cameraMovements: [
      'static', 'handheld', 'tracking', 'panning', 'tilting', 'dolly zoom',
      'crane shot', 'steadicam', 'whip pan', 'zoom in', 'zoom out', 'rack focus',
      'circular tracking', 'push in', 'pull out', 'jib arm'
    ],
    subjects: [
      'person', 'crowd', 'animal', 'pet', 'wild animal', 'insect', 'bird', 'fish',
      'landscape', 'mountain', 'beach', 'forest', 'desert', 'tundra', 'jungle',
      'cityscape', 'skyscraper', 'street', 'alley', 'park', 'playground',
      'object', 'antique', 'modern gadget', 'artwork', 'sculpture',
      'vehicle', 'car', 'airplane', 'boat', 'spacecraft', 'bicycle',
      'building', 'house', 'castle', 'ruins', 'monument', 'bridge',
      'natural phenomenon', 'storm', 'rainbow', 'aurora', 'volcano', 'waterfall',
      'historical event', 'battle', 'celebration', 'protest', 'discovery',
      'futuristic scene', 'robot', 'hologram', 'flying car', 'space colony',
      'abstract concept', 'time', 'emotion', 'thought', 'dream', 'memory'
    ],
    actions: [
      'walking', 'running', 'jumping', 'dancing', 'flying', 'swimming', 'diving',
      'climbing', 'falling', 'floating', 'sinking', 'rising', 'spinning', 'twirling',
      'transforming', 'morphing', 'dissolving', 'exploding', 'imploding',
      'growing', 'shrinking', 'stretching', 'compressing', 'bending', 'breaking',
      'melting', 'freezing', 'evaporating', 'condensing', 'crystallizing',
      'time-lapsing', 'reverse motion', 'slow motion', 'fast motion',
      'teleporting', 'phasing', 'glitching', 'pixelating', 'distorting'
    ],
    expressions: [
      'joyful', 'ecstatic', 'content', 'serene', 'contemplative', 'pensive',
      'melancholic', 'sad', 'depressed', 'angry', 'furious', 'irritated',
      'surprised', 'shocked', 'amazed', 'confused', 'perplexed', 'curious',
      'determined', 'resolute', 'confident', 'afraid', 'terrified', 'anxious',
      'excited', 'enthusiastic', 'eager', 'bored', 'apathetic', 'indifferent',
      'mysterious', 'enigmatic', 'suspicious', 'distrustful', 'loving', 'compassionate'
    ],
    lighting: [
      'soft diffused', 'harsh dramatic', 'warm golden hour', 'cool blue hour',
      'bright midday sun', 'overcast', 'foggy', 'misty', 'hazy',
      'moonlit', 'starlit', 'candlelit', 'firelit', 'neon', 'fluorescent',
      'strobe', 'pulsing', 'flickering', 'glowing', 'shimmering',
      'silhouette', 'backlit', 'rim lit', 'side-lit', 'top-down',
      'high-key', 'low-key', 'chiaroscuro', 'split lighting',
      'practical lights', 'ambient', 'motivated', 'stylized',
      'underwater', 'bioluminescent', 'abstract', 'surreal'
    ],
    settings: [
      'bustling city street', 'quiet suburban neighborhood', 'rural farmland',
      'dense urban jungle', 'sprawling metropolis', 'quaint village',
      'serene forest glade', 'misty mountain peak', 'vast desert expanse',
      'tropical beach paradise', 'frozen tundra', 'lush jungle',
      'arid badlands', 'rolling hills', 'rocky coastline',
      'cozy dimly lit cafe', 'grand ballroom', 'dusty old library',
      'high-tech laboratory', 'abandoned warehouse', 'luxurious penthouse',
      'gritty back alley', 'bustling marketplace', 'tranquil zen garden',
      'futuristic metropolis', 'retro-futuristic city', 'steampunk world',
      'ancient ruins', 'medieval castle', 'prehistoric landscape',
      'underwater reef', 'deep sea trench', 'floating sky city',
      'space station', 'alien planet', 'parallel dimension',
      'post-apocalyptic wasteland', 'utopian society', 'dreamscape',
      'Victorian era parlor', 'Wild West frontier town', '1920s speakeasy',
      '1950s diner', '1980s arcade', 'neon-lit cyberpunk alley'
    ],
    moods: [
      'mysterious', 'intriguing', 'suspenseful', 'tense', 'foreboding',
      'uplifting', 'inspirational', 'hopeful', 'optimistic', 'joyous',
      'romantic', 'passionate', 'tender', 'intimate', 'sensual',
      'melancholic', 'somber', 'gloomy', 'depressing', 'tragic',
      'energetic', 'vibrant', 'lively', 'exhilarating', 'dynamic',
      'eerie', 'unsettling', 'creepy', 'haunting', 'chilling',
      'nostalgic', 'wistful', 'sentimental', 'bittersweet', 'reflective',
      'chaotic', 'frenzied', 'turbulent', 'disorienting', 'overwhelming',
      'peaceful', 'tranquil', 'serene', 'calm', 'meditative',
      'surreal', 'dreamlike', 'bizarre', 'abstract', 'otherworldly',
      'dystopian', 'oppressive', 'bleak', 'desolate', 'hopeless'
    ],
    visualEffects: [
      'slow motion', 'time-lapse', 'stop motion', 'reverse motion',
      'bullet time', 'speed ramping', 'motion blur', 'light trails',
      'particle effects', 'smoke', 'fire', 'water', 'sparks',
      'holographic projections', 'augmented reality overlays',
      'glitch effects', 'digital artifacts', 'pixelation',
      'color shifting', 'color grading', 'monochrome', 'sepia tone',
      'double exposure', 'multiple exposure', 'image stacking',
      'lens flares', 'anamorphic flares', 'bokeh',
      'tilt-shift', 'fish-eye lens', 'barrel distortion',
      'kaleidoscope effect', 'mirroring', 'symmetry',
      'forced perspective', 'miniature faking', 'gigantism',
      'morphing', 'warping', 'liquify', 'melting',
      'dream-like distortions', 'ripple effect', 'heat haze'
    ],
    genres: [
      'sci-fi', 'cyberpunk', 'space opera', 'time travel',
      'fantasy', 'high fantasy', 'urban fantasy', 'magical realism',
      'horror', 'supernatural horror', 'psychological horror', 'body horror',
      'romance', 'romantic comedy', 'period romance', 'erotic thriller',
      'action', 'action-adventure', 'martial arts', 'superhero',
      'documentary', 'mockumentary', 'nature documentary', 'true crime',
      'film noir', 'neo-noir', 'tech-noir', 'Nordic noir',
      'western', 'spaghetti western', 'space western', 'weird west',
      'musical', 'rock opera', 'jukebox musical', 'dance film',
      'historical drama', 'period piece', 'alternate history', 'biopic',
      'psychological thriller', 'mystery', 'crime thriller', 'espionage',
      'comedy', 'black comedy', 'slapstick', 'satire',
      'drama', 'melodrama', 'social realism', 'kitchen sink drama',
      'experimental', 'avant-garde', 'surrealist', 'abstract'
    ]
  };