import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [content, setContent] = useState('');
    const [optimizedContent, setOptimizedContent] = useState('');
    const [image, setImage] = useState(null);
    const [optimizedImage, setOptimizedImage] = useState(null);

    const handleContentSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/optimize', { content });
            setOptimizedContent(response.data.optimizedContent);
        } catch (error) {
            console.error('Error optimizing content:', error);
        }
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('http://localhost:5000/optimize-image', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    responseType: 'arraybuffer'
                });

                const blob = new Blob([response.data], { type: 'image/png' });
                setOptimizedImage(URL.createObjectURL(blob));
            } catch (error) {
                console.error('Error optimizing image:', error);
            }
        }
    };

    return (
        <div>
            <h1>Website Optimization Tool</h1>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter content here" />
            <button onClick={handleContentSubmit}>Optimize Content</button>
            <div>
                <h2>Optimized Content:</h2>
                <p>{optimizedContent}</p>
            </div>
            <input type="file" onChange={handleImageUpload} />
            {optimizedImage && <img src={optimizedImage} alt="Optimized" />}
        </div>
    );
}

export default App;

