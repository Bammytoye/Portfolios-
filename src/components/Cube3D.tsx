import React from 'react';

const FACES = ['front', 'back', 'left', 'right', 'top', 'bottom'] as const;
const EMOJIS = ['⚡', '🚀', '💡', '🔮', '🌐', '⚙️'];

const Cube3D: React.FC = () => (
    <div className="cube-wrapper">
        <div className="cube">
            {FACES.map((face, i) => (
                <div key={face} className={`cube-face ${face}`}>
                    {EMOJIS[i]}
                </div>
            ))}
        </div>
    </div>
);

export default Cube3D;