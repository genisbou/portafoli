# Documentación portafolio personal - Genís Bou Majós

Este proyecto es mi portafolio personal, desarrollado con React y Bootstrap 5, con soporte multilingüe (CA / ES / EN) mediante react-i18next.  
El objetivo es presentar mi perfil, experiencia y proyectos de una manera clara, responsive y profesional.

## Diseño y estilos

### Tipografía
Se utiliza una tipografía moderna y legible como base del proyecto:

    body {
        font-family: 'Inter', system-ui, sans-serif;
    }

* Inter: fuente principal del proyecto, moderna y muy legible.
* System-ui: fuente del sistema operativo
* Sans-serif: fuente genérica como última opción

Los títulos (h1, h2, h3) tienen un peso ligeramente superior para reforzar la jerarquía visual.

Los párrafos mantienen un line-height cómodo para mejorar la legibilidad.

    h1, h2, h3 {
        font-weight: 600;
    }

    p {
        font-weight: 400;
        line-height: 1.6;
    }

### Paleta de colores

Pensada para un portafolio serio y profesional.

* Header/Cabecera: degradado con gris-azulado para aportar contraste y elegancia

``` 
  .navbar {
  background: linear-gradient(90deg, #1f2937, #374151);
  } 
  ```

* Color de acento: azul utilizado en hover de iconos, enlaces a redes sociales, etc.

``` 
 .social-link:hover {
  color: #0d6efd;
  }
  ```

* Contenido: blanco y gris oscuro `#333333` para una mejor lectura

## Navegación activa
La página actual se marca visualmente para mejorar la experiencia de usuario:

    .active {
        color: #007bff;
        border-bottom: 2px solid #007bff;
        padding: 2px 0;
    }

## Diseño responsive
El proyecto es totalmente responsive, adaptándose automáticamente a las características de cualquier dispositivo o pantalla.

* Textos centrados
* Banner con `object-fit: cover`
* `navbar-collapse` en dispositivos móviles
* Bootstrap Grid

## Estructura del proyecto
1. Componentes reutilizables:
    * Header
    * Footer

2. Páginas
    * Inicio
    * Sobre mí
    * Contacto

3. Assets
    * Imágenes
    * Documentos

## Internacionalización
El proyecto utiliza react-i18next para gestionar los idiomas.

* El idioma de la aplicación se determina principalmente a partir de la URL (`/ca`, `/es`, `/en`).
* En caso de que la URL no contenga ningún idioma, se recupera el último idioma seleccionado desde `localStorage`, siendo el catalán el idioma por defecto.

Cuando el usuario cambia de idioma, se mantiene la misma sección del sitio web, redirigiendo a la ruta equivalente en el nuevo idioma.

## Descarga de documentos
Los documentos se sirven mediante el atributo `download`, con un nombre de archivo específico con el que se guardará el fichero al descargarse, evitando así el nombre del archivo del servidor o cualquier otro nombre generado por React que no nos interese.

    <a type="button" className="btn btn-light"
       href={Cv}
       target="_blank"
       rel="noopener noreferrer"
       download={"Cv-Genis-es.pdf"}
    >

## Objetivo del proyecto
Este portafolio no busca ser solo visual, sino demostrar:

* Buenas prácticas en React
* Cuidado por el diseño y la tipografía
* Cuidado de la experiencia de usuario
* Capacidad de documentar decisiones técnicas
