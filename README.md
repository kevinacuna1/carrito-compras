# 🛒 Carrito de Compras - JavaScript

> Una aplicación web interactiva de carrito de compras desarrollada con JavaScript vanilla que permite a los usuarios agregar, eliminar y gestionar cursos en un carrito de compras con persistencia en Local Storage.

---

## 📋 Tabla de Contenido

- [🛒 Carrito de Compras - JavaScript](#-carrito-de-compras---javascript)
  - [📋 Tabla de Contenido](#-tabla-de-contenido)
  - [🎯 Características](#-características)
  - [💻 Uso](#-uso)
    - [Funcionalidades básicas](#funcionalidades-básicas)
  - [🛠️ Tecnologías](#️-tecnologías)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🔄 Estado del Proyecto](#-estado-del-proyecto)
    - [✅ Características Implementadas](#-características-implementadas)
    - [🚀 Posibles Mejoras Futuras](#-posibles-mejoras-futuras)
  - [👨‍💻 Autor](#-autor)
  - [🤝 Contribuciones](#-contribuciones)

---

## 🎯 Características

✨ **Principales funcionalidades:**

- 🛍️ **Agregar productos al carrito** - Selecciona cursos y añádelos instantáneamente
- 📊 **Gestión de cantidades** - Incrementa automáticamente si el producto ya existe
- 🗑️ **Eliminar productos** - Remueve elementos individuales del carrito
- 🧹 **Vaciar carrito completo** - Limpia todos los productos de una vez
- 💾 **Persistencia de datos** - Los productos se mantienen usando Local Storage
- 📱 **Diseño responsive** - Funciona perfectamente en dispositivos móviles y desktop
- ⚡ **Interfaz dinámica** - Actualización en tiempo real del carrito

---

## 💻 Uso

### Funcionalidades básicas

1. **Agregar al carrito** 🛒
   - Haz click en el botón "Agregar al Carrito" de cualquier curso
   - El producto se añadirá automáticamente con cantidad 1
   - Si ya existe, se incrementará la cantidad

2. **Ver el carrito** 👀
   - Click en el ícono del carrito en la esquina superior derecha
   - Visualiza todos los productos agregados con detalles

3. **Eliminar productos** ❌
   - Click en la "X" roja junto a cualquier producto para eliminarlo
   - Use "Vaciar Carrito" para remover todos los productos

4. **Persistencia** 💾
   - Los productos se guardan automáticamente en Local Storage
   - Al recargar la página, el carrito mantendrá su contenido

---

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 5 | Estructura del contenido |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white) | 3 | Estilos y diseño responsive |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ES6+ | Lógica de la aplicación |
| ![Skeleton CSS](https://img.shields.io/badge/-Skeleton%20CSS-333?style=flat) | 2.0.4 | Framework CSS minimalista |

---

## 📁 Estructura del Proyecto

```
📦 carrito-compras/
├── 📄 index.html          # Página principal
├── 📄 README.md           # Documentación del proyecto
├── 📁 css/
│   ├── 🎨 custom.css      # Estilos personalizados
│   ├── 🎨 normalize.css   # Reset de estilos CSS
│   └── 🎨 skeleton.css    # Framework Skeleton CSS
├── 📁 js/
│   └── ⚡ app.js          # Lógica principal de la aplicación
└── 📁 img/
    ├── 🖼️ logo.jpg        # Logo del sitio
    ├── 🛒 cart.png        # Ícono del carrito
    ├── 🎓 curso1-5.jpg    # Imágenes de los cursos
    └── 📱 hero.jpg        # Imagen principal
```

---

## 🔄 Estado del Proyecto

![Status](https://img.shields.io/badge/Status-Completed-green?style=for-the-badge)

### ✅ Características Implementadas
- [x] Agregar productos al carrito
- [x] Eliminar productos individuales
- [x] Vaciar carrito completo
- [x] Persistencia con Local Storage
- [x] Interfaz responsive
- [x] Validación de productos duplicados

### 🚀 Posibles Mejoras Futuras
- [ ] Sistema de autenticación de usuarios
- [ ] Integración con pasarela de pagos
- [ ] Filtros de búsqueda y categorías
- [ ] Sistema de favoritos
- [ ] Comparación de productos
- [ ] Historial de compras

---

## 👨‍💻 Autor

**Kevin Acuña**

- 💼 LinkedIn: [kevin-acuna](https://www.linkedin.com/in/kevinacu%C3%B1a/)
- 🐱 GitHub: [@kevinacuna1](https://github.com/kevinacuna1)
- 📧 Email: kevinacuna.uy@gmail.com

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir:

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔄 Abre un Pull Request

---

<div align="center">
  
**⭐ ¡Si te gustó este proyecto, no olvides darle una estrella! ⭐**

*Desarrollado con ❤️ por [Kevin Acuña](https://github.com/kevinacuna1)*

</div>