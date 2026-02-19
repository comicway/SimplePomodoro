# 🌳 Workflow de Git: SimplePomodoro

Guía de estándares para el control de versiones del proyecto.

## 1. Ramas (Flow)
*   `main` (o `master`): Código estable listo para producción.
*   `feature/nombre`: Para desarrollar nuevas funcionalidades.
*   `fix/nombre`: Para correcciones de errores.

### Cómo crear una rama:
```bash
git checkout -b feature/nueva-mejoras
```

## 2. Mensajes de Commit
Se recomienda seguir el estándar **Conventional Commits**:
*   `feat: ...` -> Nuevas funcionalidades.
*   `fix: ...` -> Corrección de errores.
*   `docs: ...` -> Cambios exclusivos en documentación.
*   `refactor: ...` -> Cambios en código que no corrigen bugs ni agregan funciones.

## 3. Sincronización
Antes de empezar a trabajar:
```bash
git pull origin main
```
Para subir cambios:
```bash
git add .
git commit -m "feat: implementar alarma sonora"
git push origin feature/nombre
```
