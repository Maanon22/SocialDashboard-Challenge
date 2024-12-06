import { useEffect, useState } from "react";
import Switch from "react-switch";
import View from './src/components/View'
import './App.css'

interface ViewProps {
  statType: string;
  image: string;
  newStat: string;
  tendance?: string;
  tenddown?: string;
}

const todayStats : ViewProps[]=[{
  statType: "Page Views",
  image: "./images/icon-facebook.svg",
  newStat: '87',
  tendance: '▲ 3%',    
},
{
  statType: "Likes",
  image: "./images/icon-facebook.svg",
  newStat: '52',
  tenddown: '▼ 2%',    
  },
  {
  statType: "Likes",
  image: "./images/icon-instagram.svg",
  newStat: '5462',
  tendance: '▲ 2257%',    
  },
    {
  statType: "Profile Views",
  image: "./images/icon-instagram.svg",
  newStat: '52k',
  tendance: '▲ 1375%',    
  },
  {
  statType: "Retweets",
  image: "./images/icon-twitter.svg",
  newStat: '117',
  tendance: '▲ 303%',    
  },
  {
  statType: "Likes",
  image: "./images/icon-twitter.svg",
  newStat: '507',
  tendance: '▲ 553%',    
  },
    {
  statType: "Likes",
  image: "./images/icon-youtube.svg" ,
  newStat: '107',
  tenddown: '▼ 19%',    
  },
  {
    statType: "Total Views",
  image: "./images/icon-youtube.svg" ,
  newStat: '1407',
  tenddown: '▼ 12%',    
  },
]

function App() {

  const [theme, setTheme] = useState(false);
  const handleChange = (nextChecked:boolean) => {
      setTheme(nextChecked); // Mise à jour de l'état avec la nouvelle valeur
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  
    return (
      <>
        <header>
          <div className="wrap-header">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <label>Dark Mode
            <Switch
              onChange={handleChange} // Fonction appelée lorsque le switch est changé
              checked={theme} // L'état du switch
              uncheckedIcon={false}  // désactive l'icône sur le côté non coché
              checkedIcon={false}    // désactive l'icône sur le côté coché
              height={30} // Hauteur du switch
              width={60} // Largeur du switch
              handleDiameter={25} // taille du bouton
              offColor="#AEB3CB"       // couleur lorsque le switch est désactivé
              offHandleColor="#fff"  // couleur du bouton (poignée) lorsque désactivé
              onHandleColor="#fff"   // couleur du bouton (poignée) lorsque activé
          className={theme ? "switch-on" : "switch-off"}  
            />
          </label>
        </header>
        <main>
          <section className="global">
            <div className="facebook">
              <p className="username"><img src="./images/icon-facebook.svg" alt="icone facebook" /> @nathanf</p>
              <p className="follows">1987</p>
              <p className="followers">FOLLOWERS</p>
              <p className="tendance">▲ 12 Today</p>
            </div>
            <div className="twitter">
              <p className="username"><img src="./images/icon-twitter.svg" alt="icone tweeter" /> @nathanf</p>
              <p className="follows">1044</p>
              <p className="followers">FOLLOWERS</p>
              <p className="tendance">▲ 99 Today</p>
            </div>
            <div className="instagram">
              <p className="username"> <img src="./images/icon-instagram.svg" alt="icone instagram" /> @realnathanf</p>
              <p className="follows">11k</p>
              <p className="followers">FOLLOWERS</p>
              <p className="tendance">▲ 1099 Today</p>
            </div>
            <div className="youtube">
              <p className="username"><img src="./images/icon-youtube.svg" alt="icone youtube" /> Nathan F.</p>
              <p className="follows">8239</p>
              <p className="followers">SUBSCRIBERS</p>
              <p className="tenddown">▼ 144 Today </p>
            </div>
          </section>
          <section className="today">
            <h2>Overview - Today</h2>
            {todayStats.map((stat, index) => (
              <View key={index}
                statType={stat.statType}
                image={stat.image}
                newStat={stat.newStat}
                tendance={stat.tendance}
                tenddown={stat.tenddown} />
            ))}
          </section>
        </main>
        <footer>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/Maanon22">Manon Moutier</a>.
        </footer>
      </>
    );
  }
export default App
