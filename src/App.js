import "./App.css";

const App = () => {
  const search = (q) => {
    console.log({ q });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>DEA MOVIE MANIA</h1>
        <input placeholder="Cari filem kesayangan..." className="Movie-search" onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">CONTOH PERTAMA</div>
            <img className="Movie-img" src="" />
            <div className="Movie-date">26-02-2023</div>
            <div className="Movie-rate">8,9</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
