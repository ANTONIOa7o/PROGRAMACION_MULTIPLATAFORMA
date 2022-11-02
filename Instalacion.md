# Instalación de aplicaciones

Instalación de aplicaciones y programas necesarios para el Curso de Angular del SEPE

## Instalación de Node.JS y NPM

Pulsar el siguiente enlace [node.JS](https://nodejs.org/es/download/), seleccionar la versión que nos interese y seguir los pasos que nos indica después de descargar el fichero.

### Comprobar la versión instalada

```bash
~$ node -v
v16.15.1
```

## Instalación de Angular

#### Actualizar npm a la última versión
```bash
~$ npm install -g npm@latest
```

#### Limpiar la caché de npm
```bash
~$ npm cache clean --force
```

#### Desactivar las auditorías de npm
```bash
~$ npm set audit false
```

### Preparar la instalación del CLI de angular

#### Desinstalar las versiones previas de angular
```bash
~$ npm uninstall -g angular-cli
~$ npm uninstall -g @angular/cli
~$ npm cache clean --force
```

#### Instalar la última versión de angular
```bash
~$ npm install -g @angular/cli@latest
```

#### Instalar una versión específica de angular
```bash
~$ npm install -g @angular/cli@version.elegida
```

#### Solucionar error con Jasmine
##### Modificar el archivo package.json
```json
"devDependencies": {
    ...
    "jasmine-core": "~3.10.0",
    ...
  }
```
##### Desde el directorio del proyecto
```bash
~$ npm install
```

#### Instalar librerias de Bootstrap

##### Desde el directorio del proyecto
```bash
~$ npm install bootstrap
```

##### Modificar el fichero angular.json
```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.css"
],
"scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```