import React, { useState } from 'react';

function App() {
  // 1. Crear un estado llamado miTexto
  const [miTexto, setMiTexto] = useState('');

  // 2. Crear función handleText
  const handleText = (event) => {
    // 3. Obtener el valor del input con event.target.value
    // 4. Actualizar el estado con ese valor
    setMiTexto(event.target.value);
  };

  return (
    <div>
      <div>
        Capture su texto
      </div>
      {/* 5. Conectar el input con el estado usando value y onChange */}
      <input value={miTexto} onChange={handleText} />
      <h3>Su Texto</h3>
      <p>
        {/* Mostrar el texto de la caja de entrada aquí */}
        {miTexto}
      </p>
    </div>
  );
}

export default App;
