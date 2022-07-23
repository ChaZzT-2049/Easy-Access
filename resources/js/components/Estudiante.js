import React from 'react';

const Estudiante = () => {
  return (
    <div className='container'>
      <div className='row mb-3'>
        <label htmlFor="matricula" className="col-md-4 col-form-label text-md-end">Matricula</label>
        <div className="col-md-6">
          <input id="matricula" type="text" className="form-control" name="matricula" required autoComplete="matricula" autoFocus></input>
        </div>
      </div>
    </div>
  );
};

export default Estudiante;  