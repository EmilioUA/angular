# ANGULAR

Despliegue a github pages:

- Creamos una rama a parte de despliegues para no tener problemas y para evitar que github actions se dispare con cada commit.
- En el repositorio vamos a 'Settigns > Code and automation > Pages'. Configuramos el despliegue como 'Deploy from a branch' y seleccionamos la rama que hemos creado antes como carpet /docs.
- Para compilar y ejecutar el build necesitamos hacer algunos cambios. Podemos automatizar el proceso configurando scriopts en el package.json:
```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:href": "ng build --base-href",
    "build:github": "npm run delete:docs && npm run delete:dist && npm run build:href && npm runcopy:dist && npm run delete:dist",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "prettier": "prettier --write \"**/*.{js,,ts,tsx,css,scss,md}\"",
    "delete:docs": "del docs",
    "delete:dist": "del dist",
    "copy:dist": "copyfiles dist/bases/* ./docs -f"
},
```
- Para copiar y borrar se puede user los comando propios del sitema opertativo, pero para tener compatibilidad con cualquier SO, se puede usar del-cli y copyfiles.
    npm i del-cli --save-dev
    npm i copyfiles --save-dev