# 🗺️ Hoja de Ruta (Roadmap): SimplePomodoro

Este documento centraliza el estado de las mejoras planificadas para la aplicación, divididas en funcionalidad, experiencia de usuario (UX) y diseño visual (UI).

## 🎯 Visión General

Transformar la aplicación en una herramienta de productividad orientada a objetivos, donde cada pomodoro esté justificado por una tarea activa y alineado con una identidad de marca cohesiva.

---

## 🚀 Próximas Mejoras

### 🛠️ Funcionalidad

- [ ] **Visibilidad Condicional del Timer**: 

    - *Descripción*: El componente `TimerDisplay` permanecerá oculto hasta que exista al menos una tarea en la lista.

    - *Objetivo*: Reducir ruido visual y obligar a la planificación previa.

- [ ] **Pomodoros por Tarea (Task-Specific Counters)**:

    - *Descripción*: Eliminar el contador global. Cada tarea tendrá su propio contador de pomodoros realizados.

    - *Objetivo*: Permitir el seguimiento real del esfuerzo invertido en cada actividad.

### 🎨 Diseño y UI

- [ ] **Rediseño de Imagen de Marca**:

    - *Descripción*: Aplicación de una nueva paleta de colores, tipografía y elementos visuales basados en el manual de marca.

    - *Objetivo*: Lograr una estética premium y profesional.

---

## 📝 Metodología de Implementación (Estándar de la Industria)

Para cada una de estas mejoras, seguiremos este flujo profesional:

1.  **Especificación (Specs)**: Definir detalladamente cómo se comportará la función.

2.  **TDD (Test Driven Development)**: Escribir las pruebas antes de programar (según `.cursorrules`).

3.  **Branching**: Trabajar cada mejora en una rama separada (ej: `feat/task-counters`).

4.  **Pull Request**: Revisión y mezcla final.
