import "./Navbar.css"

function Navbar() {
    return (
        
        <ul>
        <li className="title"><a href="#home">Giraffe</a></li>
        <li className="moveRight"><a href="#">Home</a></li>
        <li className="moveRight"><a href="#">About</a></li>
        <li className="moveRight"><a href="#">Plans</a></li>
        </ul>
    )
}

export default Navbar