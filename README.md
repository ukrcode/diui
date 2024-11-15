# 🇺🇦 diui

**Неофіційна** CSS бібліотека побудована на основі відкритої дизайн системи, яка використовується для українських цифрових державних сервісів. У 2020 році Дія була відзначена нагородою Red Dot в категорії Дизайн інтерфейсу.

## Специфікація

Для кращого розуміння цієї бібліотеки, ми розробили специфікацію (набір вимог) до неї.
Во можете ознайомитись з цими вимогами ось тут: [Специфікація](./SPECIFICATION.md).

Треба зазначити, що станом на зараз **бібліотека перебуває в стадії активної розробки**, тому специфікація постійно доповнюється і деякі положення можуть бути змінені.

## Матеріали

Список матеріалів, які ми брали за основу.

1. Офіційний анонс: <https://thedigital.gov.ua/news/diia_design>
2. Офіційний анонс від агенції Федорів: <https://diia.fedoriv.com/>
3. Анонс від київського дизайн-бюро Spiilka: <https://spiilka.com/projects/diia-web>
4. Мінінстерство цифрової трансформації: <https://thedigital.gov.ua/>
    Тут як ніде багато прикладів використання дизайн системи Дії.
4. Неофіційна реалізація в `Figma`: <https://www.figma.com/community/file/1270778058754270235>
5. Шрифти і заголовки:
    - Опис: <https://thedigital.gov.ua/fonts>
    - [Завантажити шрифти](https://www.dropbox.com/scl/fo/gylb537vfe58stu3wubg0/AMPXS4cao0-0UCPWYaSkXDM?rlkey=mkgtdslwk272lps89wb9hiqqq&e=1&dl=0)
    - [ОФІЦІЙНА Типографіка в Figma](https://www.figma.com/file/t4n0PcuOT0qBGU61QVR5z0/Digital-State-UI-kit?node-id=1%3A893)
    - [ОФІЦІЙНИЙ Приклад типографіки в Figma](https://www.figma.com/design/t4n0PcuOT0qBGU61QVR5z0/Digital-State-UI-kit?node-id=8-101&node-type=frame&t=TNXMlOBniViQWoCn-0)
6. Логобук щодо використання логотипа Дії: <https://diia.gov.ua/img/diia-october-prod/sites/1/Diia_LOGO_GUIDE.pdf>

## NPM скрипти

- `npm run serve:watch:docs`: запустити застосунок `docs` в режимі розробника.
- `npm run build:all`: запустити збірку всіх пакетів.
- `npm run build:lib`: запустити збірку тільки самої бібліотеки.