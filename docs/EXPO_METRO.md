# 🚀 Guía Expo & Metro

Referencia rápida sobre el entorno de ejecución para el desarrollo de React Native.

## Expo SDK
Expo es la plataforma universal para aplicaciones nativas de React. Provee un conjunto de APIs unificadas que facilitan el acceso a hardware nativo.

*   **Expo Go**: Aplicación para previsualizar cambios en tiempo real en dispositivos físicos.
*   **EAS (Expo Application Services)**: Herramientas para construcción y envío a tiendas.

## Metro Bundler
Metro es el empaquetador de JavaScript específico para React Native. Su trabajo es combinar todos los módulos de código en un solo archivo `.bundle` optimizado para el motor de JavaScript (Hermes).

### Comandos Frecuentes
| Comando | Acción |
| :--- | :--- |
| `npx expo start` | Inicia el servidor de desarrollo y Metro. |
| `npx expo install <pkg>` | Instala dependencias compatibles con tu versión de SDK. |
| `r` | Recarga la aplicación en el emulador. |
| `d` | Abre el menú de herramientas de desarrollador. |
