import React, { useState } from 'react';
import '../style/pages/creation.css';
import Layout from '../components/Layout';
import Sm from '../components/creationsComponents/Sm';
import Mo from '../components/creationsComponents/Mo';
import Dl from '../components/creationsComponents/Dl';
import Bfe from '../components/creationsComponents/Bfe';
import Ofc from '../components/creationsComponents/Ofc';

const Creations = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <Layout />
      <ul className='titres'>
        <li 
          onClick={() => handleClick('sansmoderations')}
          className={activeComponent === 'sansmoderations' ? 'active-item' : ''}
        >
          Sans Modération(s) 
        </li> |
        <li 
          onClick={() => handleClick('monade')}
          className={activeComponent === 'monade' ? 'active-item' : ''}
        >
          Monade 
        </li> |
        <li 
          onClick={() => handleClick('delumiere')}
          className={activeComponent === 'delumiere' ? 'active-item' : ''}
        >
          De Lumières 
        </li>|
        <li 
          onClick={() => handleClick('bfe')}
          className={activeComponent === 'bfe' ? 'active-item' : ''}
        >
          Brefs entretiens avec des femmes exceptionnelles 
        </li>|
        <li 
          onClick={() => handleClick('ofc')}
          className={activeComponent === 'ofc' ? 'active-item' : ''}
        >
          Les Oiseaux meurent facilement dans cette chambre 
        </li>|
      </ul>

      <div>
        {activeComponent === 'sansmoderations' && <Sm />}
        {activeComponent === 'monade' && <Mo />}
        {activeComponent === 'delumiere' && <Dl />}
        {activeComponent === 'bfe' && <Bfe />}
        {activeComponent === 'ofc' && <Ofc />}
      </div>
    </div>
  );
};

export default Creations;