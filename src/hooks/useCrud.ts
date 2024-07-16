import { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
}

const useCrud = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (name: string, description: string) => {
    const newItem = { id: Date.now(), name, description };
    setItems([...items, newItem]);
  };

  const editItem = (id: number, newName: string, newDescription: string) => {
    setItems(items.map(item => item.id === id ? { ...item, name: newName, description: newDescription } : item));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return { items, addItem, editItem, deleteItem };
};

export default useCrud;
