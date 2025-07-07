
# 🛂 Ecommerce React - Proyecto Web

Este es un proyecto de **Ecommerce** desarrollado con **React**, que permite visualizar productos, filtrarlos por categoría, agregarlos al carrito y finalizar la compra mediante un formulario que guarda la orden de compra en **Firebase**.

---

## 🚀 Funcionalidades

✅ Mostrar listado de productos.

✅ Filtrar productos por categorías.

✅ Agregar productos al carrito de compras.

✅ Eliminar productos individualmente del carrito.

✅ Vaciar el carrito completo.

✅ Finalizar la compra con un formulario, que se almacena en **Firebase Firestore**.

---

## 🛠️ Tecnologías y Dependencias

- **React** - Librería principal para construir la UI.
- **React Router** - Navegación SPA entre páginas. [Documentación oficial](https://reactrouter.com/)
- **Tailwind CSS** - Framework de estilos utilitario. [Documentación oficial](https://tailwindcss.com/docs/installation)
- **Bootstrap** - Componentes y estilos adicionales. [Documentación oficial](https://react-bootstrap.netlify.app/)
- **Lucide** - Íconos modernos y personalizables. [Documentación oficial](https://lucide.dev/)
- **SweetAlert2** - Alertas modales elegantes. [Documentación oficial](https://sweetalert2.github.io/)
- **Firebase** - Backend en la nube para almacenamiento de datos. Se utiliza Firestore para guardar las órdenes de compra. [Documentación oficial](https://firebase.google.com/docs)

---

## 📂 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables (Navbar, Cart, ProductCard, etc.)           
├── context/            # Contextos globales como el carrito
├── firebase/           # Configuración de Firebase
├── App.jsx             # Enrutamiento y estructura principal
├── App.css             # Estilos globales adicionales
└── main.jsx            # Punto de entrada
```

---

## 📦 Instalación y Configuración

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/ecommerce-react.git
cd ecommerce-react
```

2. Instalar las dependencias:

```bash
npm install
```

3. Configurar Firebase:

Crear un archivo `.env` en la raíz del proyecto y agregar tus credenciales:

```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

4. Levantar el servidor de desarrollo:

```bash
npm run dev
```

---

## ⚡ Preview

La app se abre por defecto en:

```
http://localhost:5173
```

---

## 💡 Notas

- La información de productos puede ser estática o provenir de una API.
- Las órdenes de compra se almacenan en **Firebase Firestore**, visible desde la consola de Firebase.
- El diseño es responsive gracias a Tailwind y Bootstrap.
- Se utilizan íconos de **Lucide** y alertas de **SweetAlert2** para mejorar la experiencia del usuario.

---

## 🎨 Capturas (Opcional)

*Podés agregar capturas de pantalla del proyecto funcionando acá.*

---

## 👩‍💻 Autora

**Yanina Prego**

[LinkedIn](https://www.linkedin.com/in/yanina-prego-1b9329144/) | ✉️ [Email](mailto:yaninaprego@gmail.com)

---
