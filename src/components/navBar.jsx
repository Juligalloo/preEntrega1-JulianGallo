import LogoZPTL from "../assets/LogoZapatilla.png"
import "./navBar.css"


const NavBar = () => {


    return (
        <div className="headerNAV">
            <div className="divLOGO">
                <img src={LogoZPTL} className="imgLOGO" alt="" />
            </div>

            <div className="divNAV">                       
                <nav>
                    <ul>
                        <li> Nike</li>
                        <li> Adidas</li>
                        <li> Puma</li>
                        <li> Jordan</li>
                        <li> Rebook </li>
                    </ul>
                </nav>
            </div>

            <div>
                <h2 className="divMENU">MENU</h2>
            </div>
        </div>

    )
}

export default NavBar