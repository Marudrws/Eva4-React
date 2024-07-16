import { useState } from 'react';

const useContactForm = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (name: string, email: string, age: string, gender: string, interests: string[]) => {
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = 'Por favor, introduzca su nombre';
    if (!email) newErrors.email = 'El correo electrónico es obligatorio';
    
    const ageNumber = parseInt(age, 10);
    if (!age) {
      newErrors.age = 'Este campo es obligatorio, por favor introduzca su edad';
    } else if (isNaN(ageNumber) || ageNumber < 10 || ageNumber > 80) {
      newErrors.age = 'La edad debe estar entre 10 y 80 años';
    }

    if (!gender) newErrors.gender = 'Es necesario que seleccione una opción, por favor';
    if (interests.length === 0) newErrors.interests = 'Selecciona al menos un interés';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
};

export default useContactForm;
