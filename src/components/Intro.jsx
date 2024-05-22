import React from 'react'

function Intro({startTest, style}) {

    const info = [
        {
          id: 1,
          description: "Test 10 sorudan oluşmaktadır",
        },
        {
          id: 2,
          description: "Teste Başla butonuna tıkladıktan sonra test başlayacaktır",
        },
        {
          id: 3,
          description:
            "Soruların ekran kalma süresi 30 saniyedir.",
        },
        {
          id: 4,
          description: "Sorular ekrana geldikten sonraki ilk 10 saniye şıklar gözükmez",
        },
        {
          id: 5,
          description:
            "Sıradaki soruya bir şıkkı işaretlediğinizde veya süre dolduğunda geçiceksiniz.",
        },
        {
          id: 6,
          description: "Geçtiğiniz sorulara dönemezsiniz!!!",
        },
      ];

  return (
    <div className="introduction" style={style}>
        <ul className="info">
          {info.map((item, index) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
        <p>İyi Şanslar</p>
        <button id="start" onClick={startTest}>Teste Başla</button>
      </div>
  )
}

export default Intro