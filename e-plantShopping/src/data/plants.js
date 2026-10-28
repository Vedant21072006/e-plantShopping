// Three categories, with six unique plants in each category.
export const plantsArray = {
  'Air Purifying Plants': [
    { id: 'air-1', name: 'Snake Plant', price: 18, description: 'A resilient, upright plant that suits bright or low-light rooms.', image: 'https://images.unsplash.com/photo-159369150?auto=format&fit=crop&w=700&q=80' },
    { id: 'air-2', name: 'Peace Lily', price: 22, description: 'Elegant white blooms and lush green leaves.', image: 'https://images.unsplash.com/photo-159369150?auto=format&fit=crop&w=700&q=80' },
    { id: 'air-3', name: 'Spider Plant', price: 14, description: 'An easy-care favorite with arching striped leaves.', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80' },
    { id: 'air-4', name: 'Golden Pothos', price: 16, description: 'Trailing heart-shaped leaves with golden variegation.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80' },
    { id: 'air-5', name: 'Areca Palm', price: 29, description: 'A tropical palm that adds a soft, leafy silhouette.', image: 'https://images.unsplash.com/photo-1597055181300-a8b4be4f3f3e?auto=format&fit=crop&w=700&q=80' },
    { id: 'air-6', name: 'Rubber Plant', price: 26, description: 'Glossy, broad leaves make a bold indoor statement.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80' }
  ],
  'Low-Light Plants': [
    { id: 'low-1', name: 'ZZ Plant', price: 21, description: 'Glossy foliage and low-maintenance care for shaded spaces.', image: 'https://images.unsplash.com/photo-1632207691143-643e2a5b6a1d?auto=format&fit=crop&w=700&q=80' },
    { id: 'low-2', name: 'Cast Iron Plant', price: 24, description: 'A hardy plant with deep green leaves.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80' },
    { id: 'low-3', name: 'Chinese Evergreen', price: 20, description: 'Decorative foliage in soft silver and green tones.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
    { id: 'low-4', name: 'Heartleaf Philodendron', price: 17, description: 'A graceful trailing plant with heart-shaped leaves.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80' },
    { id: 'low-5', name: 'Parlor Palm', price: 19, description: 'A compact palm that brings a tropical feel indoors.', image: 'https://images.unsplash.com/photo-1597055181300-a8b4be4f3f3e?auto=format&fit=crop&w=700&q=80' },
    { id: 'low-6', name: 'Lucky Bamboo', price: 13, description: 'Sculptural green stems for desks and small spaces.', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80' }
  ],
  'Succulents & Cacti': [
    { id: 'suc-1', name: 'Echeveria', price: 12, description: 'A compact rosette succulent with sculptural leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
    { id: 'suc-2', name: 'Aloe Vera', price: 15, description: 'A sun-loving succulent with thick, pointed leaves.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80' },
    { id: 'suc-3', name: 'Jade Plant', price: 16, description: 'A classic succulent with rounded, fleshy leaves.', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80' },
    { id: 'suc-4', name: 'Moon Cactus', price: 11, description: 'A cheerful, colorful cactus for a sunny windowsill.', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80' },
    { id: 'suc-5', name: 'Burro’s Tail', price: 18, description: 'A cascading succulent with plump, bead-like leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
    { id: 'suc-6', name: 'Haworthia', price: 14, description: 'A small, striped succulent suited to bright indirect light.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80' }
  ]
};

export const allPlants = Object.values(plantsArray).flat();
