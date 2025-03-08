import React from 'react';

const Main = () => (
  <main>
    <h1 className="logo-container">Basit Yemekler Restoranı</h1>
    <p className="info-container">
      Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
    </p>
    <div className="image-container">
      <div className="image-wrapper">
        <img className="hot-dog" src="images/hotdogs.jpg" alt="Hot Dog" />
      </div>
      <div className="image-wrapper">
        <img src="images/sandwich.jpg" alt="Sandwich" />
      </div>
      <div className="image-wrapper">
        <img src="images/hamburger.jpg" alt="Hamburger" />
      </div>
    </div>
  </main>
);

export default Main;