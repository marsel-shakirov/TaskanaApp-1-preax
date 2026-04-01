# TaskanaApp

name - Marsel
nickname - marsel-shakirov

# Инструкция по запуску проекта

1. Установить зависимости (ввести инструкция в терминал `npm install`)
2. Запустить проект (ввести инструкцию в терминал `npm run dev`)
3. Собрать проект (ввести инструкцию `npm run build`)

# Utils

1. простая реализация clsx которая позволяет вам передавать имена классов в виде строк или объектов с условиями, а на выходе получать готовый css module

```jsx
		className={clsx(styles, // обязательный первый параметр
		 'button', {
			active: isActive,
			disabled: isDisabled, // Класс 'disabled' будет применен, если isDisabled === true
		})}
```

# For reviewers

1. У TaskEditor при уменьшении высоты окна должен появляться скролл [Макет](https://www.figma.com/design/L0TfICqWhRI250H0AuafPx/TaskanaApp.-1-sprint.-3-task?node-id=7401-6355&t=nourf8qvy0lDxUQA-0)

- В макете это показано за счёт добавления нескольких `<PrioritySelector/>`, чтобы контент превышал высоту контейнера.
- Соответственно, чтобы добиться такого же поведения, нужно временно добавить несколько <PrioritySelector/>, чтобы переполнить контейнер — тогда появится скролл, как в дизайне.

2. Многие проверяющие ставят баг если по дефолту не стоит theme=light

- Исправил на light
