import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="container mt-4">
      <h1 className="main-title">Привет, мирЭА!</h1>
      
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="text-block">
            <h2>Первая колонка</h2>
            <p>
              Это текст первой колонки. Здесь может быть любая информация,
              которую может видеть посетитель сайта.
            </p>
          </div>
        </div>
        
        <div className="col-12 col-md-6">
          <div className="text-block">
            <h2>Вторая колонка</h2>
            <p>
              Это текст второй колонки. При просмотре на мобильных устройствах
              колонки будут располагаться одна под другой.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/бобобо" className="custom-button me-3">
          Перейти на страницу (несуществующую)
        </Link>
      </div>
    </div>
  );
}

export default MainPage;