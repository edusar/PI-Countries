import "./LandingPage.css"

export default function LandingPage() {


    const onClick = () => {
        window.location.assign("/home")
    }

    return (

        <div className="container">
            <h1>
                Bienvenido a Turism and Countries
            </h1>
            <p className="text-cont">
                La pagina que te brinda una busqueda completa de todos los paises y las distintas actividades turisticas.
                <br />Esta pagina tambien cuenta con un elemento de creacion de actividades para que puedas <br />incluir la actividad que gustes.
                Es muy practica, rapida y sencilla.
            </p>

            <h5>Haz click en siguente para continuar</h5>
            <button className="btn-lp"onClick={() => { onClick() }}>
               SIGUIENTE
            </button>

        </div>

    )
}