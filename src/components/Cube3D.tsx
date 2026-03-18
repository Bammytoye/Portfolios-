import React from 'react';

const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'] as const;
const emojis = ['⚡', '🚀', '💡', '🧑‍💻', '🌐', '✨'];

const Cube3D: React.FC = () => (
    <div className="cube-wrapper">
        <div className="cube">
            {faces.map((face, i) => (
                <div key={face} className={`cube-face ${face}`}>
                    {emojis[i]}
                </div>
            ))}
        </div>
    </div>
);

export default Cube3D;