import React from 'react';
import useApi from '../hooks/useApi';
//busque una API que tuviese relación con mi pagina, use la del instituto de arte en Chicago
const ApiData: React.FC = () => {
  const { data, loading, error } = useApi('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_display,image_id');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="fondo">
        
    <div className="container mt-5">
      <h2 className="text-center white">Sobre Arte</h2>
      <h4 className="text-center white">Instituto de Arte de Chicago</h4>
      <ul className="list-group">
        {data.map(item => (
          <li key={item.id} className="list-group-item">
            {item.image_id && (
              <img
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`}
                alt={item.title}
                className="img-thumbnail"
                style={{ width: '200px', height: 'auto' }}
              />
            )}
            <h5>{item.title}</h5>
            <p>Artista: {item.artist_title}</p>
            <p>Fecha Creación: {item.date_display}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
// descubri que cada cierto tiempo las obras de arte de la api van cambiando 
export default ApiData;
