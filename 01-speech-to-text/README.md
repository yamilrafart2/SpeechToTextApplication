# 🎙️ Speech to Text Converter

Una aplicación web sencilla y elegante que utiliza la **Web Speech API** para convertir voz en texto en tiempo real. 

## 🚀 Características

* **Reconocimiento en tiempo real:** Captura audio directamente desde el micrófono.
* **Transcripción fluida:** Diferencia entre resultados finales y resultados provisionales (interim results) mediante estilos visuales.
* **Interfaz Moderna:** Diseño limpio con fondos degradados y animaciones interactivas.
* **Iconografía:** Integración con Font Awesome para una experiencia de usuario intuitiva.

## 🛠️ Tecnologías utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Layout con Flexbox, gradientes y animaciones (`keyframes`).
* **JavaScript (Vanilla):** Lógica de la Web Speech API y manipulación del DOM.
* **Font Awesome:** Iconos para los controles de voz.

## 📦 Uso y Ejecución

Este proyecto es parte del [JS Projects Portfolio](https://github.com/yamilrafart2/JS-Projects-Portfolio).

1. Abre el archivo `index.html` de esta carpeta en tu navegador.
2. Se recomienda usar la extensión **Live Server** de VS Code para el correcto funcionamiento de las Web APIs.
3. Haz clic en el botón del **micrófono** para comenzar a hablar.
4. Haz clic en el botón de **stop** para detener el reconocimiento.

    > 💡 **Nota de Idioma:** Actualmente, el sistema está optimizado para reconocer únicamente el **idioma Inglés (EE.UU.)**.

## ⚠️ Notas de compatibilidad

Esta aplicación utiliza ``webkitSpeechRecognition``, por lo que funciona de manera óptima en:
- Google Chrome
- Microsoft Edge
- Navegadores basados en Chromium

   > **Nota:** Se requiere permiso de acceso al micrófono por parte del navegador.

## 🎨 Vista Previa
El convertidor cuenta con un contenedor translúcido y botones con una animación de "pulso" para indicar que la interfaz está lista para interactuar.

---

Desarrollado con ❤️ por [Yamil Arturo Rafart](https://github.com/yamilrafart2)