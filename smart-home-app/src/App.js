import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="menu">
        <div className="menu-item menu-item--active">
          <i class="fas fa-home"></i>
        </div>
        <div className="menu-item">
          <i class="fas fa-th-large"></i>
        </div>
        <div className="menu-item">
          <i class="fas fa-cog"></i>
        </div>
        <div className="menu-item">
          <i class="fas fa-filter"></i>
        </div>
        <div className="menu-item menu-item__section">
          <i class="fas fa-map-marker"></i>
        </div>
        <div className="menu-item">
          <i class="fas fa-male"></i>
        </div>
        <div className="menu-item">
          <i class="fas fa-folder-open"></i>
        </div>
        <div className="menu__avatar">
          <img src="https://i.picsum.photos/id/838/384/384.jpg" alt="avatar" />
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="header__back">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div className="header__subtitle">Global</div>
          <h1 className="header__title">Temperature</h1>
          <div className="header__humidity header__control">
            <i class="fas fa-tint"></i>
            53%
          </div>
          <div className="header__ac header__control">
            <i class="fas fa-fan"> </i>
            <i class="fas fa-toggle-on"></i>
          </div>
          <div className="header__more header__control">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="control"></div>
        <div className="history"></div>
      </div>
      <div className="sidebar">
        <h2>Shortcuts</h2>
        <label className="shortcut">
          <button className="btn btn--1">
            <i class="fas fa-thermometer-three-quarters"></i>
          </button>
          <span className="title">Temperature</span>
          <span className="text">24C</span>
        </label>
        <label className="shortcut">
          <button className="btn btn--2">
            <i class="fas fa-wifi"></i>
          </button>
          <span className="title">Internet</span>
          <span className="text">78.22</span>
        </label>
        <label className="shortcut">
          <button className="btn btn--3">
            <i class="far fa-lightbulb"></i>
          </button>
          <span className="title">Lights</span>
          <span className="text">9+ 4+</span>
        </label>
        <label className="shortcut">
          <button className="btn btn--plus">
            <i class="fas fa-plus"></i>
          </button>
          <span className="title"></span>
          <span className="text"></span>
        </label>
        <h2>Devices</h2>
        <div className="devices">
          <button className="btn">
            <i class="fas fa-tv"></i>
          </button>
          <button className="btn">
            <i class="fas fa-video"></i>
          </button>
          <button className="btn">
            <i class="fas fa-bath"></i>
          </button>
          <button className="btn">
            <i class="far fa-hdd"></i>
          </button>
          <button className="btn btn--plus">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;