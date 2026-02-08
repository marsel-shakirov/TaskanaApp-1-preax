# TaskanaApp

name - Marsel
nickname - marsel-shakirov

# Инструкция по запуску проекта

1. Установить зависимости (ввести инструкция в терминал `npm install`)
2. Запустить проект (ввести инструкцию в терминал `npm run dev`)
3. Собрать проект (ввести инструкцию `npm run build`)

# Плагины для Prettier

1. @trivago/prettier-plugin-sort-imports - плагин для сортировки импортов в удобном порядке [trivago/prettier](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
2. npm i prettier-plugin-css-order - плагин для сортировки css (по concentric-css) [CSS Order Prettier Plugin](https://www.npmjs.com/package/prettier-plugin-css-order)

# Utils

1. простая реализация clsx которая позволяет вам передавать имена классов в виде строк или объектов с условиями, а на выходе получать готовый css module

```jsx
		className={clsx(styles, 'button', { // обязательный первый параметр
			active: isActive,
			disabled: isDisabled, // Класс 'disabled' будет применен, если isDisabled === true
		})}
```
