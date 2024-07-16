import React, { useState } from 'react';
import useContactForm from '../hooks/useContactForm';

const Contact: React.FC = () => {
  const { errors, validate } = useContactForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    interests: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData.interests, value] : prevData.interests.filter((i) => i !== value)) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData.name, formData.email, formData.age, formData.gender, formData.interests)) {
      alert('Tu formulario se ha enviado exitosamente!');
      setFormData({ name: '', email: '', age: '', gender: '', interests: [] });
    }
  };

  return (
    <div className="fondo2">
    <div id="contact" className="container mt-5">
      <h2 className="text-center white">Contacto</h2>
      <p className="lead text-center white">Déjanos tus datos para saber más sobre tus marcas favoritas y nuestras ofertas!</p>
      <form id="contact-form" onSubmit={handleSubmit} className="p-4 bg-dark text-white rounded shadow">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" id="nombre" name="name" value={formData.name} onChange={handleChange} className="form-control" />
          {errors.name && <div id="nombre-error" className="error-message">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico:</label>
          <input type="email" id="correo" name="email" value={formData.email} onChange={handleChange} className="form-control" />
          {errors.email && <div id="correo-error" className="error-message">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad:</label>
          <input type="number" id="edad" name="age" value={formData.age} onChange={handleChange} className="form-control" />
          {errors.age && <div id="edad-error" className="error-message">{errors.age}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Género:</label><br />
          <input type="radio" id="masculino" name="gender" value="masculino" checked={formData.gender === 'masculino'} onChange={handleChange} />
          <label htmlFor="masculino">Masculino</label>
          <input type="radio" id="femenino" name="gender" value="femenino" checked={formData.gender === 'femenino'} onChange={handleChange} />
          <label htmlFor="femenino">Femenino</label>
          <input type="radio" id="otro" name="gender" value="otro" checked={formData.gender === 'otro'} onChange={handleChange} />
          <label htmlFor="otro">Otro</label>
          {errors.gender && <div id="genero-error" className="error-message">{errors.gender}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">¿Qué tipo de técnicas te gustaría aprender?:</label><br />
          <input type="checkbox" id="arte" name="interests" value="arte" checked={formData.interests.includes('arte')} onChange={handleChange} />
          <label htmlFor="arte">Lettering</label>
          <input type="checkbox" id="book" name="interests" value="book" checked={formData.interests.includes('book')} onChange={handleChange} />
          <label htmlFor="book">Scrapbooking</label>
          <input type="checkbox" id="acua" name="interests" value="acua" checked={formData.interests.includes('acua')} onChange={handleChange} />
          <label htmlFor="acua">Acuarela</label>
          {errors.interests && <div id="intereses-error" className="error-message">{errors.interests}</div>}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary boton">Enviar</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
