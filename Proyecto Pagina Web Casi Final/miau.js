function generarNavbar() {
    let navbar = `
        <div class="container-fluid">
            <div class="row">
                <div class="col-11">
                    <nav class="navbar navbar-expand-md" style="background-color: #e4e2dd;">
                        <div class="container-fluid">
                            <div class="container" style="width:100px;">
                                <a class="navbar-brand" href="#">
                                    <img src="IMG\\zero .png" alt="Grupo Zero" width="80" height="50">
                                </a>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="file:///C:/Users/gatit/OneDrive/Desktop/Proyecto%20Pagina%20Web%20Casi%20Final/index.html">Inicio</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Categorías
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Esculturas</a></li>
                                            <li><a class="dropdown-item" href="#">Pinturas</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="file:///C:/Users/gatit/OneDrive/Desktop/Proyecto%20Pagina%20Web%20Casi%20Final/catalogo.html#">Ver todo</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Artistas
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="file:///C:/Users/gatit/OneDrive/Desktop/Proyecto%20Pagina%20Web%20Casi%20Final/PerfilArtista.html">Maria Pinto Saavedra</a></li>
                                            <li><a class="dropdown-item" href="#">Jose Pablo Errazuriz</a></li>
                                        <li><a class="dropdown-item" href="#">Cristina Montenegro</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Ver todo</a></li>
                                    </ul>
                                </li>
                                </ul>
                                <div class="boton-modal">
                                    <label for="btn-modal">
                                       Ingresar
                                    </label>
                                  </div>
                                          <!-- fin boton -->
                                      
                                          <!-- ventana modal -->
                                      <input type="checkbox" id="btn-modal">
                                      <div class="container-modal">
                                          
                                          <div class="content-modal">
                                                      <div class="formulario">
                                                          
                                                          <!-- Agregamos titulo -->
                                                          <h1>Inicio de sesion</h1>
                                                         
                                                          <!-- Form con metodo post para enviar información -->
                                                          <form method="post">
                                                              <div class="username">
                                                                  <input type="text" required>
                                                                  <label>Nombre de usuario</label>
                              
                                                              </div>
                                                              <div class="contrasena">
                                                                  <input type="text" required>
                                                                  <label>Contraseña</label>
                                                              </div>
                                                              <div class="recordar">¿Olvido su contraseña?</div>
                                                              <input type="submit" value="Iniciar">
                              
                                                              <div class="registrarse">
                                                                  <a href="a">Registrarse</a>
                                                              </div>
                                                          </form>
                                                      
                                                              <div class="btn-cerrar">
                                                                  <label for="btn-modal">cerrar</label>
                                          
                                                              </div>
                                                      </div>
                                                      <label for="btn-modal" class="cerrar-modal"></label>       
                                          </div>                
                                      </div>               
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <!--Carrito-->
            <div class="col-1">
                <div class="popover" style="padding-top: 20%; background-color: #e4e2dd;">
                    <button class="popover-button"><i class="bi bi-cart" style="font-size: 25px;"></i></button>
                    <div class="popover-content">
                    Ningun producto seleccionado...
                    </div>
                </div>
              </div>
        </div>
        
    </div>
    `;
    
    document.getElementById("miNavbar").innerHTML = navbar;
}

// Para utilizar la función y obtener el código HTML del navbar
document.addEventListener("DOMContentLoaded", function(){
    generarNavbar();
});

const listaUsuarios = async() => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comentarios = await respuesta.json();
    let cajaComentario = ``;
    comentarios.forEach((comentario,index)=>{
        cajaComentario += `
        <div>${comentario.name}</div>
        <div>${comentario.body}</div>
        
        `;
    });
    document.getElementById("cajaComentario").innerHTML= cajaComentario;
};

window.addEventListener("load",function(){
    listaUsuarios();
});
