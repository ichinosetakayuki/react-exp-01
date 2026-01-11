import React from "react";

const Fv = () => {
  // 星のデータを生成（50個）
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      // サイズも少しランダムに
      width: `${Math.random() * 3 + 2}px`,
      height: `${Math.random() * 3 + 2}px`,
    },
  }));

  return (
    <div className="background">
      <div className="star-container">
        {stars.map((star) => (
          <div key={star.id} className="star" style={star.style} />
        ))}
      </div>
      <h1 className="title">
        森高千里
        <br />
        Concert Tour 2026
      </h1>
    </div>
  );
};

export default Fv;
