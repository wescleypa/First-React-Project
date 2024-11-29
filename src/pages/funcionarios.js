import React, { useState, useRef } from 'react';
import './styles/funcionarios.css'
import Menu from '../components/menu';

const Functionarios = () => {

  const [funcionarios] = useState([
    { id: 1, name: "Wescley Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 },
    { id: 2, name: "Vitória Andrade", qtd: 83 }
  ]);

  const [activeProfileId, setActiveProfileId] = useState(null);
  const [activeAdd, setActiveAdd] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 }); // Para armazenar a posição do card
  const cardRefs = useRef([]); // Array de refs para os cards

  const clickProfile = (id, index) => {
    // Calcula a posição do card
    const cardElement = cardRefs.current[index];
    const cardRect = cardElement.getBoundingClientRect();

    // Define a posição da info-box ao lado do card
    setPosition({
      top: cardRect.top + window.scrollY, // Posição vertical ajustada para o scroll
      left: cardRect.right + window.scrollX // Posição horizontal ajustada para o scroll
    });

    setActiveProfileId(activeProfileId === id ? null : id); // Alterna o estado do perfil
  };

  const clickAdd = () => {
    setActiveAdd(!activeAdd);
  };

  return (
  <div>
    <Menu/>
    
    <div className="container-cad">
      <label>
        <input type="checkbox" className="play-btn" />
        <div className="play-icon" onClick={clickAdd}></div>
        <div className="pause-icon" onClick={clickAdd}></div>
      </label>
    </div>

    <div className={`info-box_2 ${activeAdd ? 'active' : 'dnone'}`} id="infoBox">
      <h2 className="noSelect">About Me</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quibusdam delectus? Officia optio eveniet molestias explicabo culpa quos delectus ratione laudantium. Laborum obcaecati totam quasi animi illum veritatis laboriosam veniam?
        Quis impedit eveniet, asperiores atque neque debitis aliquid quisquam, odit itaque reprehenderit quidem! Exercitationem aperiam dolore laborum aliquam, vitae incidunt animi mollitia amet. Impedit, qui! Provident, dicta molestiae. Exercitationem, voluptates.</p>

      <div className="pills">
        <span className="pill">JavaScript</span>
        <span className="pill">Python</span>
        <span className="pill">Java</span>
        <span className="pill">C#</span>
        <span className="pill">HTML</span>
        <span className="pill">CSS</span>
        <span className="pill">SQL</span>
      </div>
    </div>

    <div className="container">
      
      {funcionarios.map((funcionario, index) => (
        <React.Fragment key={funcionario.id}>
          <div 
            className="card" 
            ref={(el) => cardRefs.current[index] = el} // Armazena a referência de cada card
            onClick={() => clickProfile(funcionario.id, index)} // Passa o index para calcular a posição
          >
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Profile Picture" 
              className="noSelect" 
            />
            <h2 className="noSelect funcName">{funcionario.name}</h2>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* Info Box */}
          <div 
            className={`info-box ${activeProfileId === funcionario.id ? 'active' : 'dnone'}`}
            style={{
              top: `${position.top}px`, // Posição top calculada
              left: `${position.left}px`, // Posição left calculada
              zIndex: 9999
            }}
          >
            <h2 className="noSelect about">Sobre {funcionario.name}</h2>
            <p>Nascido em 17 de Novembro de 2000, na cidade de Paulínia, atualmente com 24 anos de idade.</p>

            <div className="pills">
              <span className="pill">JavaScript</span>
              <span className="pill">Python</span>
              <span className="pill">Java</span>
              <span className="pill">C#</span>
              <span className="pill">HTML</span>
              <span className="pill">CSS</span>
              <span className="pill">SQL</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
  );
};

export default Functionarios;
