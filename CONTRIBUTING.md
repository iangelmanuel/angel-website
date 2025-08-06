# Contributing to Angel De La Torre Portfolio

¡Gracias por tu interés en contribuir a este proyecto! 🎉

## 🚀 Formas de Contribuir

### 🐛 Reportar Bugs

- Usa la [pestaña de Issues](https://github.com/iAngelManuel/angel-website/issues)
- Describe el problema claramente
- Incluye pasos para reproducir el bug
- Menciona tu sistema operativo y versión del navegador

### 💡 Sugerir Mejoras

- Abre un Issue con la etiqueta "enhancement"
- Describe la mejora propuesta
- Explica por qué sería útil
- Proporciona ejemplos si es posible

### 🛠️ Contribuir con Código

1. **Fork** el repositorio
2. **Clona** tu fork localmente
3. **Crea** una rama para tu feature (`git checkout -b feature/amazing-feature`)
4. **Realiza** tus cambios
5. **Testea** tu código
6. **Commit** tus cambios (`git commit -m 'Add some amazing feature'`)
7. **Push** a tu rama (`git push origin feature/amazing-feature`)
8. **Abre** un Pull Request

## 📋 Preparación del Entorno de Desarrollo

### Prerrequisitos

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recomendado)
- **Git**

### Configuración

```bash
# 1. Fork y clona el repositorio
git clone https://github.com/tu-usuario/angel-website.git
cd angel-website

# 2. Instala las dependencias
pnpm install

# 3. Inicia el servidor de desarrollo
pnpm dev

# 4. ¡Comienza a contribuir! 🚀
```

## 🎨 Estándares de Código

### Estilo de Código

- **Prettier**: Usado para formateo automático
- **ESLint**: Para análisis estático del código
- **TypeScript**: Tipado estático requerido

### Comandos de Verificación

```bash
# Verificar formato
pnpm prettier:check

# Formatear código
pnpm prettier

# Verificar linting
pnpm eslint
```

### Convenciones de Naming

- **Archivos**: kebab-case (`my-component.astro`)
- **Componentes**: PascalCase (`MyComponent`)
- **Variables**: camelCase (`myVariable`)
- **Constantes**: UPPER_SNAKE_CASE (`MY_CONSTANT`)

## 📝 Estructura de Commits

### Formato de Mensajes

```
type(scope): description

[optional body]

[optional footer]
```

### Tipos de Commit

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Cambios de formato (sin afectar código)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos

```bash
feat(hero): add new animation to hero section
fix(nav): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(global): improve CSS formatting
```

## 🧪 Testing y Calidad

### Antes de Hacer Commit

- [ ] El código compila sin errores
- [ ] Prettier ha formateado el código
- [ ] ESLint no muestra errores
- [ ] La aplicación funciona correctamente
- [ ] Los cambios son responsive
- [ ] Funciona en modo claro y oscuro
- [ ] Funciona en ambos idiomas (ES/EN)

### Checklist para Pull Requests

- [ ] Título descriptivo y claro
- [ ] Descripción detallada de los cambios
- [ ] Screenshots si hay cambios visuales
- [ ] Mención de issues relacionados
- [ ] Código testeado en múltiples navegadores
- [ ] Documentación actualizada si es necesario

## 🌟 Áreas de Contribución Prioritarias

### Alta Prioridad

- 🐛 **Corrección de bugs**
- ♿ **Mejoras de accesibilidad**
- 🚀 **Optimizaciones de rendimiento**
- 📱 **Mejoras responsive**

### Media Prioridad

- ✨ **Nuevas funcionalidades**
- 🎨 **Mejoras visuales**
- 📊 **Analytics y métricas**
- 🔍 **SEO optimizations**

### Baja Prioridad

- 📝 **Documentación**
- 🧹 **Refactoring**
- 🎯 **Mejoras de DX**

## 💬 Comunicación

### Canales

- **GitHub Issues**: Para bugs y features
- **GitHub Discussions**: Para preguntas generales
- **Pull Requests**: Para revisión de código
- **Email**: [iangelmanuel02@gmail.com](mailto:iangelmanuel02@gmail.com) para temas urgentes

### Código de Conducta

- Se respetuoso y constructivo
- Acepta críticas constructivas
- Ayuda a otros contribuidores
- Mantén un ambiente inclusivo y acogedor

## 🎁 Reconocimiento

Los contribuidores serán reconocidos en:

- Lista de colaboradores en GitHub
- Mención en el CHANGELOG
- Sección de agradecimientos en README
- Reconocimiento en redes sociales

## 📚 Recursos Adicionales

### Tecnologías Utilizadas

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GSAP Documentation](https://greensock.com/docs/)

### Herramientas de Desarrollo

- [VS Code](https://code.visualstudio.com/) (editor recomendado)
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Astro Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

---

¡Gracias por contribuir y hacer este proyecto mejor para todos! 🙌

**¿Tienes preguntas?** No dudes en abrir un Issue o contactarme directamente.

_Happy coding!_ 💻✨
