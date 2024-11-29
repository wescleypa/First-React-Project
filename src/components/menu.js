import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importar o hook useLocation
import './styles/menu.css';

const Menu = () => {
  const location = useLocation(); // Usando o hook useLocation para pegar a rota atual
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Essa é uma mensagem de teste", time: "a few seconds ago" },
    { id: 2, text: "Outra mensagem de teste", time: "a few moments ago" }
  ]);

  const toggleCardVisibility = () => {
    setIsCardVisible(prevState => !prevState);
  };

  const closeNotification = (event) => {
    const item = event.target.closest('.notification-item');
    const notification = event.target.closest('.notification');
    
    if (item) {
      item.classList.add('hidden'); // Inicia a animação
      // Após a animação, remova o item do DOM
      setTimeout(() => {
        setNotifications(prevNotifications =>
          prevNotifications.filter(notification => notification.id !== parseInt(item.dataset.id))
        );

        if (notifications.length <= 1) {
          notification.style.display = 'none';
        }
      }, 500); // Tempo de transição (mesmo tempo que a animação)
    }
  };

  const closeNotifications = () => {
    setIsCardVisible(false);
  };

  const isNotificationCardEmpty = notifications.length === 0;

  const menuItems = [
    { text: 'Estatísticas', route: '/estatisticas' },
    { text: 'Funcionários', route: '/funcionarios' },
    { text: 'Contratar IA', route: '/contratar-ia' }
  ];

  return (
    <div>
      <div className="menu">
        {menuItems.map((item, index) => (
          <span
            className={`menu-item ${location.pathname === item.route ? 'active' : ''}`} // Condicional para classe active
            key={index}
          >
            <i className={`fas fa-${['home', 'user', 'cog'][index]}`}></i>
            <span className="menu-text">{item.text}</span>
          </span>
        ))}
      </div>

      <div className="menu-perfil">
        <span className="menu-item">
          <img src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png" alt="Perfil" />
          <span className="menu-text" onClick={toggleCardVisibility}>
            <i className="fas fa-bell fa-xl"></i>
          </span>
          <span className="menu-text">
            <i className="fas fa-cog fa-xl"></i>
          </span>
        </span>
      </div>

      <div className={`notification-card ${isCardVisible ? 'show' : 'hidden'}`}>
        <div className="notification-header">
          <h3 className="notification-title">
            {notifications.length === 0 ? "Nenhuma notificação pra você." : "Notificações para você"}
          </h3>
          <span onClick={closeNotifications}>
            <i className="fa-solid fa-circle-xmark fa-lg"></i>
          </span>
        </div>

        <div className="notification">
          {notifications.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <div className="notification-item" data-id={notification.id}>
                <i className="fa fa-times notification-close" onClick={closeNotification}></i>
                <div className="notification-media">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="notification-user-avatar" />
                  <i className="fa fa-thumbs-up notification-reaction"></i>
                </div>
                <div className="notification-content">
                  <p className="notification-text">{notification.text}</p>
                  <span className="notification-timer">{notification.time}</span>
                </div>
              </div>

              {index < notifications.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
