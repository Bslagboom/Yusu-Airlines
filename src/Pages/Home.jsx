import "../App"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

const Home = () => {
    return(
         <div className="container">
      <img src="../assets/Images/yusuheader.png" alt="Airplane" className="main-image" />
      <div className="filters">
        <select><option>Retour</option></select>
        <select><option>Vertrek vanaf...</option></select>
        <select><option>Vertrek naar...</option></select>
        <button>Vluchten bekijken</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Bestemming</th>
            <th>Klasse</th>
            <th>Route</th>
            <th>Prijs</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Antalya</td><td>Economy</td><td>Retour</td><td>€89</td></tr>
          <tr><td>Milaan</td><td>Premium</td><td>Retour</td><td>€139</td></tr>
          <tr><td>Venetië</td><td>Premium</td><td>Retour</td><td>€119</td></tr>
          <tr><td>Stockholm</td><td>Premium</td><td>Retour</td><td>€159</td></tr>
          <tr><td>Los Angeles</td><td>Business</td><td>Retour</td><td>€399</td></tr>
        </tbody>
      </table>
    </div>
    )
}
 
export default Home;