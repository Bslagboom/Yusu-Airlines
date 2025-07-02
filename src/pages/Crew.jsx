function Crew() {
const crewMembers = [
  {
    id: 1,
    name: "Slaggie",
    role: "Captain",
    image: "/src/assets/image/slaggie.png",
    description: "Slaggie is de baas van de cockpit. Vliegt alles wat vleugels heeft — van dikke A380 tot zo’n kleine 737. Zonnebril op, smile erbij, en landen zo smooth dat je denkt je bent nog steeds in de lucht. Straatpiloot met vleugels, broer."
  },
  {
    id: 2,
    name: "Bruine",
    role: "First Officer",
    image: "/src/assets/image/bruine.png",
    description: "Bruine checkt elke knop 3x want safety first, maar hij heeft ook altijd die side-eye voor als je stoer doet. Co-piloot met precisie, maar als je lastig doet, gooit hij je zonder parachute eruit. Vliegen, lachen, en nooit stressen."
  },
  {
    id: 3,
    name: "Stroop",
    role: "Tankwagen Operator",
    image: "/src/assets/image/stroop.png",
    description: "Stroop? Die lacht als ‘ie tanks vult, maakt grapjes met de crew en steekt ondertussen je vliegtuig vol kerosine alsof het Red Bull is. Geen brandstof? Geen vlucht. Dus respect voor Stroop, de tankbaas van Yusu."
  },
  {
    id: 4,
    name: "Dijke",
    role: "Security",
    image: "/src/assets/image/dijke.png",
    description: "Dijke staat para. Eén blik en je weet: geen gezeik hier. Checkt je paspoort, je tas én je attitude. Wie raar doet, gaat eruit. Vliegtuig of club, maakt niet uit — Dijke houdt alles safe en strak."
  },
  {
    id: 5,
    name: "Cloakje",
    role: "Cabin Crew",
    image: "/src/assets/image/cloakje.png",
    description: "Cloakje is die vibe bringer, broer. Regelt drankjes, deelt snacks uit met een knipoog en maakt je vlucht gezelliger dan een huisfeest. Je mist niks bij Cloakje, want hij fixt alles, van kussen tot kattig praatje."
  },
  {
    id: 6,
    name: "Jay",
    role: "Bagage Loader",
    image: "/src/assets/image/jay.png",
    description: "Jay? Die gooit je koffer in het ruim alsof ‘ie in de sportschool staat. Maar altijd met liefde, geen stress. Spot een dikke jet, maakt stiekem een foto, en lacht. Iedereen’s bagage komt safe aan. Jay is de bagage don van Yusu."
  }
];


  return (
    <div className="crew-container">
      <h1>Yusu Crew</h1>
      <div className="crew-gallery">
        {crewMembers.map((member) => (
          <div key={member.id} className="crew-card" >
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crew;
