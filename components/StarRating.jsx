// components/StarRating.js
const StarRating = ({ skill }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500 bg-white shadow-xl">&#9733;</span>);
    }
    return stars;
  };

  return (
    <div >
      <span >{skill.name}</span>
      <div >
        {renderStars(skill.rating)}
      </div>
    </div>
  );
};


export default StarRating;
