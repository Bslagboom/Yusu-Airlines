function Crew() {
  return (
    <div className="container">
      <h1>Yusu Crew</h1>
      <div className="crew-gallery">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="crew-member">
            <img src={`/crew${n}.jpg`} alt={`Crew ${n}`} />
            <p>Crewlid {n}</p>
          </div>
        ))}
      </div>
      <ol>
        <li>Wij zijn trots op onze crew.</li>
        <li>Veiligheid en service staan voorop.</li>
        <li>Onze bemanning is internationaal opgeleid.</li>
        <li>We vliegen naar meer dan 30 bestemmingen.</li>
        <li>Welkom aan boord bij Yusu Airlines!</li>
      </ol>
    </div>
  );
}

export default Crew;
