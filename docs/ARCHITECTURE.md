# 🏗️ Arquitectura y Funcionamiento: SimplePomodoro

Este documento describe la estructura técnica y el flujo de datos de la aplicación móvil SimplePomodoro.

## 1. Estructura de Componentes
La aplicación sigue una arquitectura modular y jerárquica para garantizar la escalabilidad y mantenibilidad.

```text
[App.js] (Punto de entrada)
   │
   v
[PomodoroTimer.jsx] (Gestor de Estado Global)
   │
   ├───> [TimerDisplay.jsx] (Vista del Temporizador)
   └───> [TaskList.jsx] (Gestión de Tareas)
```

## 2. Responsabilidades

### 🔵 PomodoroTimer (Core)
*   **Estado**: Controla el tiempo (`isPlaying`), la lista de tareas (`tasks`) y el contador global.
*   **Lógica**: Gestiona el ciclo de vida del pomodoro y la persistencia de datos efímera.
*   **Audio**: Implementa `expo-av` para disparar el sonido de alarma al finalizar.

### 🔴 TimerDisplay (Visual)
*   Renderiza el temporizador circular (`react-native-countdown-circle-timer`).
*   Expone controles básicos (Comenzar, Pausar, Reiniciar).

### 🟠 TaskList (Tareas)
*   Renderiza una `FlatList` optimizada para móvil.
*   Permite acciones directas (Agregar, Completar, Eliminar).

## 3. Flujo de Datos
1. El usuario interactúa con `TimerDisplay`.
2. Las funciones de retorno (callbacks) actualizan el estado en `PomodoroTimer`.
3. El estado actualizado se propaga hacia abajo a todos los sub-componentes.
