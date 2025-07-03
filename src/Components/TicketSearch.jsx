import React, { useState } from "react";

const airports = [
  "Amsterdam Schiphol (AMS)",
  "Rotterdam The Hague (RTM)",
  "Eindhoven Airport (EIN)",
  "Brussels Airport (BRU)",
  "Paris Charles de Gaulle (CDG)",
  "London Heathrow (LHR)",
  "Frankfurt Airport (FRA)",
  "Berlin Brandenburg (BER)",
  "Madrid Barajas (MAD)",
  "Rome Fiumicino (FCO)",
  // Voeg er nog meer toe!
];

function TicketSearch() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [activeField, setActiveField] = useState(""); // 'departure' of 'destination'

  const handleChange = (e, field) => {
    const value = e.target.value;
    if (field === "departure") {
      setDeparture(value);
    } else {
      setDestination(value);
    }

    setActiveField(field);

    setFilteredAirports(
      airports.filter((airport) =>
        airport.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (airport) => {
    if (activeField === "departure") {
      setDeparture(airport);
    } else {
      setDestination(airport);
    }
    setFilteredAirports([]);
  };

  return (
    <div className="ticket-search-container">
      <div className="overlay"></div>

      <div className="ticket-search-content">
        <h1>Yusu vliegtickets & bestemmingen</h1>
        <p>Een onvergetelijke reiservaring</p>

        <div className="search-box">
          <select>
            <option>Retourvlucht</option>
            <option>Enkele reis</option>
          </select>

          <select>
            <option>1 Passagier, Economy Class</option>
            <option>2 Passagiers, Business Class</option>
          </select>

          <div className="input-group">
            <input
              type="text"
              placeholder="Vanaf"
              value={departure}
              onChange={(e) => handleChange(e, "departure")}
            />
            {filteredAirports.length > 0 && activeField === "departure" && (
              <ul className="autocomplete-list">
                {filteredAirports.map((airport, index) => (
                  <li key={index} onClick={() => handleSelect(airport)}>
                    {airport}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Naar"
              value={destination}
              onChange={(e) => handleChange(e, "destination")}
            />
            {filteredAirports.length > 0 && activeField === "destination" && (
              <ul className="autocomplete-list">
                {filteredAirports.map((airport, index) => (
                  <li key={index} onClick={() => handleSelect(airport)}>
                    {airport}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input type="date" />
          <input type="date" />

          <button>Bekijk vluchten</button>
        </div>
      </div>
    </div>
  );
}

export default TicketSearch;
