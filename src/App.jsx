import { useState } from "react";

const googleFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSe_qY1AduSwj8LKUZFg1P9PtPnbK7FdBY3FtYhHfvjnEoAmRQ/viewform";

export default function BharatJodoAbhiyan() {
  const [page, setPage] = useState("home");

  const go = (name) => {
    setPage(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, Helvetica, sans-serif; background: #070707; }
        .site { min-height: 100vh; color: #fff; background: radial-gradient(circle at top, #1b1b1b, #050505 60%); }
        .navbar { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 16px 42px; background: rgba(0,0,0,0.82); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.12); }
        .logo { font-size: 24px; font-weight: 900; color: #ff8a00; letter-spacing: .5px; }
        .nav button { background: transparent; color: white; border: 0; margin: 0 7px; font-size: 15px; cursor: pointer; padding: 9px 12px; border-radius: 12px; }
        .nav button:hover { background: linear-gradient(90deg,#ff8a00,#fff,#16a34a); color: #111; }
        .hero { min-height: 88vh; display: grid; grid-template-columns: 1.2fr .8fr; align-items: center; gap: 35px; padding: 70px 7%; background: linear-gradient(135deg, rgba(255,122,0,.2), rgba(255,255,255,.04), rgba(0,150,70,.18)); }
        .tag { display: inline-block; padding: 10px 18px; border: 1px solid rgba(255,255,255,.25); border-radius: 999px; color: #fff; background: rgba(255,255,255,.08); }
        h1 { font-size: 64px; line-height: 1.05; margin: 22px 0; }
        .orange { color: #ff8a00; } 
        .green { color: #22c55e; }
        .lead { font-size: 21px; line-height: 1.7; color: #e5e5e5; max-width: 760px; }
        .btns { margin-top: 32px; display: flex; gap: 16px; flex-wrap: wrap; }
        .btn { border: 0; cursor: pointer; padding: 15px 26px; border-radius: 18px; font-size: 17px; font-weight: 800; }
        .btn-primary { background: linear-gradient(90deg,#ff7a00,#16a34a); color: white; box-shadow: 0 15px 35px rgba(255,122,0,.25); }
        .btn-light { background: white; color: #111; }
        .flag-card { padding: 26px; border-radius: 35px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); box-shadow: 0 30px 80px rgba(0,0,0,.55); text-align: center; transform: perspective(900px) rotateY(-9deg); }
        .flag-card img { width: 100%; border-radius: 22px; box-shadow: 0 20px 50px rgba(0,0,0,.45); }
        .stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 24px; }
        .stat { background: rgba(0,0,0,.45); border-radius: 20px; padding: 18px; }
        .stat b { font-size: 28px; color: #ff8a00; }
        .page { padding: 70px 7%; min-height: 80vh; }
        .title { font-size: 46px; margin-bottom: 18px; }
        .grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 35px; }
        .card { background: linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.05)); border: 1px solid rgba(255,255,255,.13); border-radius: 28px; padding: 28px; box-shadow: 0 20px 60px rgba(0,0,0,.35); }
        .card h3 { color: #ff8a00; font-size: 25px; margin-top: 0; }
        .card p, .page p { color: #dddddd; line-height: 1.7; font-size: 18px; }
        .form { max-width: 760px; margin: 30px auto; background: rgba(255,255,255,.09); padding: 32px; border-radius: 30px; border: 1px solid rgba(255,255,255,.15); text-align: center; }
        .form h3 { color: #ff8a00; font-size: 30px; margin-top: 0; }
        input, textarea, select { width:100%; padding:15px; margin:10px 0; border-radius:16px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.4); color:white; font-size:16px; }
        textarea { min-height: 120px; }
        .videos { display: grid; grid-template-columns: repeat(2,1fr); gap: 26px; margin-top: 35px; }
        iframe { width: 100%; height: 315px; border: 0; border-radius: 25px; box-shadow: 0 20px 50px rgba(0,0,0,.45); }
        .whatsapp { position: fixed; right: 22px; bottom: 22px; z-index: 200; background: #16a34a; color: white; text-decoration: none; padding: 16px 22px; border-radius: 999px; font-weight: 900; box-shadow: 0 12px 30px rgba(22,163,74,.45); }
        footer { text-align: center; padding: 35px; background: #000; color: #aaa; }
        @media(max-width: 900px){ .hero{grid-template-columns:1fr;padding:45px 5%;} h1{font-size:42px;} .grid,.videos,.stats{grid-template-columns:1fr;} .navbar{padding:14px;flex-direction:column;gap:10px;} .nav{display:flex;flex-wrap:wrap;justify-content:center;} }
      `}</style>

      <header className="navbar">
        <div className="logo">भारत जोड़ो अभियान</div>

        <nav className="nav">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("mission")}>उद्देश्य</button>
          <button onClick={() => go("youth")}>युवा आवाज</button>
          <button onClick={() => go("problems")}>समस्या/समाधान</button>
          <button onClick={() => go("videos")}>Videos</button>
          <button onClick={() => go("join")}>Join Form</button>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>
      </header>

      {page === "home" && <Home go={go} />}
      {page === "mission" && <Mission />}
      {page === "youth" && <Youth />}
      {page === "problems" && <Problems />}
      {page === "videos" && <Videos />}
      {page === "join" && <Join />}
      {page === "contact" && <Contact />}

      <a
        className="whatsapp"
        href="https://wa.me/919058336415"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <footer>
        © 2026 Bharat Jodo Abhiyan | युवाओं की शक्ति — भारत की शक्ति
      </footer>
    </div>
  );
}

function Home({ go }) {
  return (
    <section className="hero">
      <div>
        <span className="tag">मेरा भारत महान </span>

        <h1>
          <span className="orange">भारत जोड़ो</span>
          <br />
          युवा शक्ति <span className="green">अभियान</span>
        </h1>

        <p className="lead">
          हमारा उद्देश्य भारत को जोड़ना, युवाओं की आवाज को मंच देना और देश की
          समस्याओं पर समाधान के साथ काम करना है।
        </p>

        <div className="btns">
          <a
            href={googleFormLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            अभी जुड़ें
          </a>

          <button className="btn btn-light" onClick={() => go("videos")}>
            Videos देखें
          </button>
        </div>

        <div className="stats">
          <div className="stat">
            <b>29+</b>
            <br />
            States
          </div>
          <div className="stat">
            <b>1</b>
            <br />
            Mission
          </div>
          <div className="stat">
            <b>100%</b>
            <br />
            Youth Power
          </div>
        </div>
      </div>

      <div className="flag-card">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="Indian Flag"
        />
        <h2>एक भारत — श्रेष्ठ भारत</h2>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="page">
      <h2 className="title">हमारा उद्देश्य</h2>

      <p>
        भारत को एकता, भाईचारा, शिक्षा, तकनीक और युवा नेतृत्व के माध्यम से आगे
        बढ़ाना।
      </p>

      <div className="grid">
        <Card
          title="भारत को जोड़ना"
          text="हर राज्य, हर समाज और हर युवा को एक मंच पर लाना।"
        />
        <Card
          title="युवाओं की आवाज"
          text="युवाओं की बात, सुझाव और समस्याओं को मजबूत मंच देना।"
        />
        <Card
          title="आज का भारत"
          text="नए भारत में technology, रोजगार और शिक्षा को बढ़ावा देना।"
        />
      </div>
    </section>
  );
}

function Youth() {
  return (
    <section className="page">
      <h2 className="title">युवाओं की आवाज</h2>

      <div className="grid">
        <Card
          title="रोजगार"
          text="युवाओं को skill, startup और digital income की दिशा देना।"
        />
        <Card
          title="शिक्षा"
          text="हर युवा तक बेहतर शिक्षा और career guidance पहुंचाना।"
        />
        <Card
          title="Leadership"
          text="युवाओं को समाज और देश के लिए नेतृत्व का मौका देना।"
        />
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="page">
      <h2 className="title">भारत की समस्याएँ और समाधान</h2>

      <div className="grid">
        <Card
          title="बेरोजगारी"
          text="Skill training, local business और online earning models।"
        />
        <Card
          title="शिक्षा"
          text="Digital classes, free guidance और practical learning।"
        />
        <Card
          title="भ्रष्टाचार"
          text="जागरूकता, transparency और लोगों की भागीदारी।"
        />
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section className="page">
      <h2 className="title">Video Page</h2>

      <p>यहाँ YouTube videos और future में uploaded videos दिखेंगे।</p>

      <div className="videos">
        <iframe
          src="https://www.youtube.com/embed/fq4N0hgOWzU"
          title="Video 1"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/xmkYJv4H8qE"
          title="Video 2"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section className="page">
      <h2 className="title">भारत जोड़ो अभियान से जुड़ें</h2>

      <div className="form">
        <h3>सदस्यता फॉर्म</h3>

        <p>
          भारत जोड़ो अभियान से जुड़ने के लिए नीचे दिए गए बटन पर क्लिक करें।
          आपकी जानकारी सीधे Google Form और Google Sheet में save होगी।
        </p>

        <a
          href={googleFormLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{
            display: "inline-block",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          सदस्यता फॉर्म भरें
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h2 className="title">Contact</h2>

      <div className="grid">
        <Card title="WhatsApp" text="9053336415" />
        <Card title="Email" text="your-email@gmail.com" />
        <Card
          title="Social Media"
          text="Facebook, Instagram, YouTube links यहाँ जोड़ें।"
        />
      </div>
    </section>
  );
}

function Card({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}