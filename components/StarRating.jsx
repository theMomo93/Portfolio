// components/StarRating.js
const StarRating = ({ skill }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="flex justify-between items-center w-full">
      <span className="flex">{skill.name}</span>
      <div className="flex justify-end items-end ml-2 mr-4">
        {renderStars(skill.rating)}
      </div>
    </div>
  );
};


export default StarRating;
