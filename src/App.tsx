import './App.css'

function App() {

  return (
    <>
      <header>
    <h1>Social Media Dashboard</h1>
    <p>Total Followers: 23,004</p>
    <p>Dark Mode</p>
  </header>
  <main>
    <section className="global">
      <div className="facebook">
        <p className="username"><img src="./images/icon-facebook.svg" alt="icone facebook"/> @nathanf</p>
        <p className="follows">1987</p>
        <p className="followers">FOLLOWERS</p>
        <p className="tendance">▲ 12 Today</p>
      </div>
      <div className="twitter">
        <p className="username"><img src="./images/icon-twitter.svg" alt="icone tweeter"/> @nathanf</p>
        <p className="follows">1044</p>
        <p className="followers">FOLLOWERS</p>
        <p className="tendance">▲ 99 Today</p>
      </div>
      <div className="instagram">
        <p className="username"> <img src="./images/icon-instagram.svg" alt="icone instagram"/> @realnathanf</p>
        <p className="follows">11k</p>
        <p className="followers">FOLLOWERS</p>
        <p className="tendance">▲ 1099 Today</p>
      </div>
      <div className="youtube">
        
        <p className="username"><img src="./images/icon-youtube.svg" alt="icone youtube"/> Nathan F.</p>
        <p className="follows">8239</p>
        <p className="followers">SUBSCRIBERS</p>
        <p className="tenddown">▼ 144 Today </p>
      </div>
    </section>
    <section className="today">
      <h2>Overview - Today</h2>
      <div>
        <h3>Page Views </h3>
        <img src="./images/icon-facebook.svg" alt="icone facebook"/>
        <p className="new">87</p>
        <p className="tendance-overview"> 3%</p>
      </div>
      <div>
        <h3>Likes </h3>
        <img src="./images/icon-facebook.svg" alt="icone facebook"/>
        <p className="new">52</p>
        <p className="tenddown-overview">▼ 2%</p>
      </div>
      <div> 
        <h3>Likes </h3>
        <img src="./images/icon-instagram.svg" alt="icone instagram"/>
        <p className="new">5462</p>
        <p className="tendance-overview"> 2257%</p>
      </div>
      <div>
        <h3>Profile Views</h3>
        <img src="./images/icon-instagram.svg"/>
        <p className="new">52k</p>
        <p className="tendance-overview"> 1375%</p>      
      </div>
      <div>
        <h3>Retweeets </h3>
        <img src="./images/icon-twitter.svg" alt="icone twitter"/>
        <p className="new">117</p>
        <p className="tendance-overview"> 303%</p>   
      </div>
      <div>
        <h3>Likes </h3>
        <img src="./images/icon-twitter.svg" alt="icone twitter"/>
        <p className="new">507</p>
        <p className="tendance-overview"> 553%</p>  
      </div>
      <div>
        <h3>Likes </h3>
        <img src="./images/icon-youtube.svg" alt="icone youtube"/>
        <p className="new">107</p>
        <p className="tenddown-overview"> 19%</p>  
      </div>
      <div>
        <h3>Total Views </h3>
        <img src="./images/icon-youtube.svg" alt="icone youtube"/>
        <p className="new">1407</p>
        <p className="tenddown-overview"> 12%</p>  
      </div>
    </section>
  </main>  
  <footer>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </footer>
    </>
  )
}

export default App
