import React from 'react';
import NavBar from '../NavBar/NavBar';
import PanelLeft from '../PanelLeft/PanelLeft';
import Messages from '../Messages/Messages';
import PanelRight from '../PanelRight/PanelRight';
import './Workspace.css';

function Workspace() {
  return (
    <main className='workspace'>
      <NavBar />
      <PanelLeft />
      <Messages />
      <PanelRight />
    </main>
  );
}

export default Workspace;
