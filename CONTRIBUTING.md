# Contributing

Тут ви знайдете необхідну інформацію щодо внесення змін до репозиторію.

## Як контриб'ютити до проєкту

1. Ви можете взяти задачу з [існуючих відкритих задач](https://github.com/ukrcode/diui/issues), або написати [коментар ось тут](https://github.com/ukrcode/diui/issues/3), щоб для вас створили задачу. Щоб закріпити задачу за собою, залиште коментар до відповідного issue.
2. Після отримання задачі створіть форк репозиторію під своїм GitHub-акаунтом.
3. Виконайте розробку у своєму форку.
4. Створіть pull request до основного репозиторію.
5. Дочекайтеся схвалення (approve) та мерджу вашого pull request.

Дякуємо за ваш внесок!

## Повідомлення до GIT коммітів

Ми дотримуємося [conventional commits convention](https://www.conventionalcommits.org/en/v1.0.0/). Наразі це не перевіряється автоматично, але ми плануємо додати таку перевірку в майбутньому.

### Деякі зауваження

- Мова коммітів: `Англійська`. Як показує наш досвід, більшості розробників так зручніше.
- Починайте тіло комміта (частина після префікса і двокрапки) з дієслова в інфінітиві: `add`, `update`, `create` тощо.

### Можливі префікси коммітів

- `feat`: новий функціонал.
- `fix`: виправлення дефекту чи багу.
- `build`: оновлення процесу збірки.
- `chore`: мінорні зміни, які не впливають на функціонал.
- `ci`: зміни в процесі Continuous Integration.
- `docs`: оновлення документації.
- `style`: зміни стилів або зовнішнього вигляду. Оскільки тут розробляється CSS-бібліотека, більшість змін технічно будуть "змінами стилів". Ми рекомендуємо використовувати `feat` для оновлення стилів самої бібліотеки.
- `refactor`: рефакторинг коду без додавання нового функціоналу.
- `test`: оновлення в тестах.
- `other`: інші зміни.

### Приклади GIT коммітів

- `feat: add heading classes`
- `fix: change the way how app looks on small screens`
- `docs: add NPM scripts section to the README`
