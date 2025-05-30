# 📁 Estructura del proyecto y configuración recomendada

🚧 **Estado actual del proyecto**  
Por ahora, solo está desarrollada la sección **about** con el cambio de idiomas dinámico. Las demás secciones están en construcción.

---
## 💻 Requisitos recomendados

Para facilitar el desarrollo y mantener el código limpio y organizado, se recomienda utilizar **Visual Studio Code (VSCode)** como editor principal, junto con las siguientes extensiones:

### 🧩 Extensiones para VSCode

1. **Live Server**  
   Ejecuta un servidor local que recarga automáticamente la página al guardar cambios. Muy útil para desarrollo frontend rápido.  
   🔗 [Live Server - Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

2. **Prettier - Code formatter**  
   Formatea el código automáticamente para mantener un estilo uniforme.  
   🔗 [Prettier - Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

3. **Error Lens**  
   Muestra errores y advertencias de forma más visible directamente en el código. Muy útil para detectar problemas rápidamente.  
   🔗 [Error Lens - Marketplace](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

---

## 🗂️ Nueva estructura de carpetas

A partir de ahora, el proyecto usará una estructura modular por secciones/páginas. Cada carpeta representará una vista del sitio y contendrá sus propios archivos HTML, CSS y JS. Un ejemplo sería:

```
about
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   └── languageAbout.js
competitions
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   └── languageCompetition.js
contact
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   └── languageContact.js
```

### 📌 Detalles:

- `index.html`: será la versión principal o neutral (por ejemplo, puede redirigir automáticamente según el idioma).
- Archivos terminados en `-cat`, `-eng`, `-es` son las versiones específicas por idioma.
- Cada carpeta puede tener sus propios archivos CSS y JS si lo requiere.
- Se busca mantener independencia entre secciones para mejorar el mantenimiento y escalabilidad del proyecto.

---

## ✅ Buenas prácticas

- Usa `Prettier` antes de hacer commit para formatear el código.
- Ejecuta con `Live Server` desde la raíz o desde la carpeta de la vista que estás desarrollando.
- Usa `Error Lens` para detectar errores en tiempo real y corregirlos antes de testear.

