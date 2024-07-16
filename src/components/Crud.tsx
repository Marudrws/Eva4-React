import React, { useState } from 'react';
import useCrud from '../hooks/useCrud';

const Crud: React.FC = () => {
  const { items, addItem, editItem, deleteItem } = useCrud();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      addItem(name, description);
      setName('');
      setDescription('');
    }
  };

  return (
    <div className="fondo2">
    <div id="crud" className="container mt-5 listt">
      <h2 className="text-center white">Marcas</h2>
      <p className="lead text-center white">Cuentanos qué marcas te gustaría ver más seguido en nuestra página.</p>
      <form className="lead text-center" onSubmit={handleAddItem}>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Marca" />
        <button type="submit">AGREGAR</button>
      </form>
      <h5 className="mt-3 text-center white">Tus Marcas Favoritas</h5>
      <ul id="items-list" className="lead text-center listtt mt-2 white">
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button className="edit" onClick={() => editItem(item.id, prompt('Nuevo nombre:', item.name) || item.name, prompt('Nueva marca:', item.description) || item.description)}>EDITAR</button>
            <button className="delete" onClick={() => deleteItem(item.id)}>ELIMINAR</button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    
  );
};

export default Crud;
