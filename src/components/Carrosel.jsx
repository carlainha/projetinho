import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export function Carrosel(){
    return(
        <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./src/assets/carrosel1.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./src/assets/carrosel2.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./src/assets/carrosel3.png" className="d-block w-100" alt="..."/>
            </div>
            </div>
      </div>
    )
}