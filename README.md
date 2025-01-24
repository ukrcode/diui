# 🇺🇦 diui

**Неофіційна** CSS бібліотека побудована на основі відкритої дизайн системи [Дії](https://uk.wikipedia.org/wiki/%D0%94%D1%96%D1%8F_(%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81)). У 2020 році Дія була відзначена нагородою Red Dot в категорії Дизайн інтерфейсу.

## Локальний запуск і розробка

Ми використовуємо [pnpm](https://pnpm.io/) менеджер пакетів. 

Тому перед тим як почату розробку, будь ласка встановіть його на свій компьютер: [Інсталяція pnpm](https://pnpm.io/installation)

Після встановлення `pnpm`, запустіть команду а корені проєкту, яка встановить всі локальні залежності:

```bash
pnpm i
```

## Специфікація

Для кращого розуміння цієї бібліотеки, ми розробили специфікацію (набір вимог) до неї. 

Во можете ознайомитись з цими вимогами ось тут: [Специфікація](./SPECIFICATION.md). Там також відображений порядок функціоналу для майбутніх релізів.

Треба зазначити, що станом на зараз **бібліотека перебуває в стадії активної розробки**, тому специфікація постійно доповнюється і деякі положення можуть бути змінені.

## Матеріали

Список матеріалів, які ми брали за основу.

1. Офіційний анонс: [https://thedigital.gov.ua/news/diia_design](https://thedigital.gov.ua/news/diia_design)
2. Офіційний анонс від агенції Федорів: [https://diia.fedoriv.com/](https://diia.fedoriv.com/)
    Тут найбільша кількість інформації щодо елементів дизайн системи.
3. Анонс від київського дизайн-бюро Spiilka: [https://spiilka.com/projects/diia-web](https://spiilka.com/projects/diia-web)
4. Мінінстерство цифрової трансформації: [https://thedigital.gov.ua/](https://thedigital.gov.ua/)
    Тут як ніде багато прикладів використання дизайн системи Дії.
4. **Неофіційна** реалізація в `Figma`: [https://www.figma.com/community/file/1270778058754270235](https://www.figma.com/community/file/1270778058754270235)
5. Шрифти і заголовки:
    - Опис: [https://thedigital.gov.ua/fonts](https://thedigital.gov.ua/fonts)
    - [Завантажити шрифти](https://www.dropbox.com/scl/fo/gylb537vfe58stu3wubg0/AMPXS4cao0-0UCPWYaSkXDM?rlkey=mkgtdslwk272lps89wb9hiqqq&e=1&dl=0)
    - [ОФІЦІЙНА Типографіка в Figma](https://www.figma.com/file/t4n0PcuOT0qBGU61QVR5z0/Digital-State-UI-kit?node-id=1%3A893)
    - [ОФІЦІЙНИЙ Приклад типографіки в Figma](https://www.figma.com/design/t4n0PcuOT0qBGU61QVR5z0/Digital-State-UI-kit?node-id=8-101&node-type=frame&t=TNXMlOBniViQWoCn-0)
6. Логобук щодо використання логотипа Дії: [https://diia.gov.ua/img/diia-october-prod/sites/1/Diia_LOGO_GUIDE.pdf](https://diia.gov.ua/img/diia-october-prod/sites/1/Diia_LOGO_GUIDE.pdf)

### Чого немає в неофіційній реалізації. 

Ми звʼязалися з автором [**неофіційної** реалізація в Figma](https://www.figma.com/community/file/1270778058754270235) і він сказав, що в цій реалізації присутні не всі компоненти з дизайн системи. Для того щоб зрозуміти щоб ми зробили, подивіться будь ласка [cпецифікацію](./SPECIFICATION.md).

## NPM скрипти

- `pnpm serve:watch:docs`: запустити застосунок `docs` в режимі розробника.
- `pnpm build:all`: запустити збірку всіх пакетів.
- `pnpm build:lib`: запустити збірку тільки самої бібліотеки.
- `pnpm dev`: запускає `docs` і `lib` в режимі розробки, тобто буде оновлювати сторінку при кожній зміні.