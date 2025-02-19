# Contributing

Тут ви можете знайти необхідну інформацію, щодо внесення змін в репозиторій. 

## Повідомлення до GIT коммітів

Ми використовуємо [conventional commits convention](https://www.conventionalcommits.org/en/v1.0.0/). Станом на зараз це  не перевіряється ніякими інструментами, проте ми додамо таку перевірку в майбутньому.

### Деякі зауваження

- Мова коммітів: `Англійська`. Як показує наш досвід, більшості розробників так робити зручніше.
- Починайте тіло комміта(тіло іде після префікса і двокрапки) з дієслова в інфінитиві: `add`, `update`, `create`, тощо.

### Можливі префікси коммітів:

- `feat`: новий функціонал
- `fix`: випраалення дефекту чи багу
- `build`: оновлення процесу збірки 
- `chore`: мінорні зміни, які не впливають на функціонал
- `ci`: зміна в Continius Integration процесі
- `docs`: оновлення документації
- `style`: зміна стилей або зовнішньго вигляду. Через те, що тут розробляється CSS бібліотека, то більшість змін технічно будуть "зміною стилів", ми радимо використовувата `feat` для оновлення стилей самої бібліотеки. 
- `refactor`: рефакторинг коду без додавання нового функціоналу
- `test`: оновлення в тестах
- `other`: якісь інші зміни

### Приклади GIT коммітів

- `feat: add heading classes`
- `fix: change the way how app looks on small screens`
- `docs: add NPM scripts section to the README`
