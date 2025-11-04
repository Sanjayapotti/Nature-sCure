import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.category) {
    return (
      <div>
        <h2>Category not found</h2>
        <button onClick={() => navigate("/")}>⬅ Back</button>
      </div>
    );
  }

  const { category } = state;

  return (
    <div className="category-page">
      <button onClick={() => navigate("/")} className="back-btn">⬅ Back</button>
      <h1>{category.title}</h1>
      <img src={category.image} alt={category.title} className="category-image" />
      <p>{category.description}</p>

      <div className="remedies-list">
        {category.remedies.map((rem, i) => (
          <div key={i} className="remedy-card">
            <h3>{rem.title}</h3>
            <p>{rem.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
