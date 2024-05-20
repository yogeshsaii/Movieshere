import React,{useState} from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [isHovered, setIsHovered] = useState(false);
  const openIMDbPage = () => {
    window.open(`https://www.imdb.com/title/${imdbID}/`, '_blank');
  };
  const openWikipediaPage = () => {
    const searchQuery = encodeURIComponent(`${Title} ${Year} film`);
    window.open(`https://en.wikipedia.org/wiki/Special:Search?search=${searchQuery}`, '_blank');
  };
  return (
    <div 
      className="movie" 
      key={imdbID} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      style={{ position: 'relative', cursor: 'pointer' }}
    >
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
      {isHovered && (
        <div className="hover-buttons" style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '90%', 
          display: 'flex', 
          justifyContent: 'space-between'
          
        }}>
          <button onClick={openIMDbPage} style={{ margin: '5px'  }}>IMDb</button>
          <button onClick={openWikipediaPage} style={{ margin: '5px' }}>Wikipedia</button>
        </div>
      )}
    </div>
  );
}

export default MovieCard;