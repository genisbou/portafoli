# Documentació portafoli personal - Genís Bou Majós

Aquest projecte és el meu portafoli personal, desenvolupat amb React i Bootstrap 5, amb suport multilingüe (CA / ES / EN) mitjançant react-i18next.
L’objectiu és presentar el meu perfil, experiència i projectes d’una manera clara, responsive i professional.

## Disseny i estils

### Tipografia
S’utilitza una tipografia moderna i llegible com a base del projecte:

```
body {
    font-family: 'Inter', system-ui, sans-serif;
}
```

* Inter: font principal del projecte, moderna i molt llegible.
* System-ui: font de sistema del sistema operatiu
* Sans-serif: font genèrica com a última opció

Els títols (h1, h2, h3) tenen un pes lleugerament superior per reforçar la jerarquia visual.

Els paràgrafs mantenen un line-height còmode per millorar la llegibilitat.

```
h1, h2, h3 {
    font-weight: 600;
}

p {
    font-weight: 400;
    line-height: 1.6;
}
```
### Paleta de colors

Pensada per un portafoli seriós i professional

* Header/Capçalera: degradat amb gris-blau per donar contrast i elegància
    ```
  .navbar {
    background: linear-gradient(90deg, #1f2937, #374151);
    }
    ```
* Color d'accent: Un blau usat hover d'icones, enllaços a xarxes socials , etc.
    ```
    .social-link:hover {
    color: #0d6efd;
    }
    ```
* Contingut: Blanc i gris clar  ``` #333333 ``` per una millor lectura

##  Navegació activa
La pàgina actual es marca visualment per millorar l’experiència d’usuari:
```
.active {
color: #007bff;
border-bottom: 2px solid #007bff;
padding: 2px 0;
}
 ```

## Disseny responsiu
El projecte és totalment responsiu adaptant-se automàticament a les caraccterístiques de qualsevol dispositiu o pantalla

* Textos centrats
* Banner amb object-fit: cover
* navbar-collapse en dispositius mòbils
* Bootstrap Grid

## Estructura del projecte
1. Components reutilitzables:
* Header
* Footer

2. Pàgines
* Inici
* Sobre mi
* Contacte

3. Assets
* Imatges
* Documents

## Internacionalització
El projecte utilitza react-i18next per gestionar idiomes.
* L’idioma de l’aplicació es determina principalment a partir de la URL (/ca, /es, /en).
  En cas que la URL no contingui cap idioma, es recupera l’últim idioma seleccionat des de localStorage, amb català com a idioma per defecte.

Quan l’usuari canvia d’idioma, es manté la mateixa secció del lloc web, redirigint a la ruta equivalent en el nou idioma.

## Descàrrega de documents
Els documents es serveixen mitjançant l'atribut
```download``` , amb un nom d'arxiu específic amb què es
desarà el fitxer quan es baixi, evitant així el nom de
l'arxiu del servidor o qualsevol altre nom generat per
React que no ens interessi.

```
  <a type="button" className="btn btn-light"
                   href={Cv}
                   target="_blank"
                   rel="noopener noreferrer"
                   download={"Cv-Genis-es.pdf"}
                >
```
## Objectiu del projecte
Aquest portafoli no busca ser només visual, sinó demostrar:
* Bones pràctiques en React
* Cura pel disseny i la tipografia
* Cura de l’experiència d’usuari
* Capacitat de documentar decisions tècniques
