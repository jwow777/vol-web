import React from 'react';
import Auth from '../Auth/Auth';
import '../Auth/Auth.css';
import './CreateWorkspace.css';

import logo from '../../images/Auth/logo-workspace.jpg';
import edit from '../../images/Auth/edit.svg';

function CreateWorkspace() {
  // const [state, setState] = useState({});
  const handleSubmit = (e) => e.preventDefault();
  return (
    <Auth>
      <h2 className='create-workspace__title'>Создание workspace</h2>
      <form className='create-workspace__form' onSubmit={handleSubmit}>
        <div className='create-workspace__title-block'>
          <div className='create-workspace__image-block'>
            <img src={logo} alt='' className='create-workspace__image'/>
            <button className='create-workspace__image-edit-button'>
              <img src={edit} alt='' className='create-workspace__image-edit'/>
            </button>
          </div>
          <div className='auth__form-input-block'>
            <label className='auth__form-input-label'>Название компании (workspace)</label>
            <input type='text' className='auth__form-input auth__form-input_workspace'/>
            <span className='auth__form-input-error'>New york times square</span>
          </div>
        </div>
        <p className='create-workspace__description'>Создайте нужные вам группы и должности (в дальнейшем можете изменить)</p>
        <div className='create-workspace__group-block'>
          <div className='create-workspace__group-item'>
            <label className='auth__form-input-label'>
              Создать группу
            </label>
            <input type='text' className='auth__form-input auth__form-input_workspace'/>
            <input type='text' className='auth__form-input auth__form-input_workspace'/>
          </div>
          <div className='create-workspace__group-item'>
            <label className='auth__form-input-label'>
              Создать должность
            </label>
            <input type='text' className='auth__form-input auth__form-input_workspace'/>
            <input type='text' className='auth__form-input auth__form-input_workspace'/>
          </div>
        </div>
        <button type='submit' className='auth__form-submit auth__form-submit_workspace'>Создать workspace</button>
      </form>
    </Auth>
  );
}

export default CreateWorkspace;