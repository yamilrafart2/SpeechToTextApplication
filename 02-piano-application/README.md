# 🎹 Piano Application

Una aplicación de piano digital interactiva desarrollada con **JavaScript Vanilla**, diseñada para ofrecer una experiencia visual y auditiva sincronizada.

## 🚀 Características

* **Sonido en tiempo real:** Reproducción instantánea de notas musicales (escala completa con alteraciones).
* **Feedback Visual Activo:** Sincronización de animaciones CSS con la duración real del audio mediante el evento `ended`.
* **Diseño Realista:** Teclas negras posicionadas mediante márgenes negativos y capas (`z-index`) para imitar un teclado real.
* **Optimización de Audio:** Reinicio del puntero de reproducción (`currentTime = 0`) para permitir repeticiones rápidas de una misma nota.

## 🛠️ Tecnologías utilizadas

* **HTML5:** Estructura semántica y uso de atributos `data-*` para vinculación de activos.
* **CSS3:** Layout con Flexbox, variables CSS (`--width`) y cálculos dinámicos con `calc()`.
* **JavaScript (Vanilla):** Manipulación de la Audio API y gestión dinámica de clases de estado.

## 📦 Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/yamilrafart2/SpeechToTextApplication.git
   ```

2. Abre el archivo `index.html` dentro de la carpeta `02-piano-application` en tu navegador.

3. Haz clic sobre cualquier tecla (blanca o negra) para reproducir el sonido.

    > 💡 **Nota de Idioma:** Las etiquetas de las notas siguen el cifrado americano estándar (C, D, E, F, G, A, B).

## ⚠️ Notas de compatibilidad

Esta aplicación utiliza la API de Audio estándar de HTML5, por lo que funciona de manera óptima en:
-   Google Chrome
-   Microsoft Edge
-   Mozilla Firefox
-   Safari

    > **Nota:** Asegúrate de que los archivos de la carpeta `/notes` estén presentes para que el sonido funcione.

## 🎨 Vista Previa
El piano presenta un diseño con fondos degradados y teclas con una animación de "hundimiento" al ser activadas, simulando la presión mecánica.

---

Desarrollado con ❤️ por [Yamil Arturo Rafart](https://github.com/yamilrafart2)