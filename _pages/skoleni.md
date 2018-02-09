---
layout: page
title: 'Školení'
permalink: /skoleni
---

## Workshop eXtrémního programování

- **Kapacita:** max 8 lidí na workshop
- **Délka:** 1 den, 9:00 - 15:30
- **Jazyk:** C++ nebo Java
- **Zaváděcí cena:** 600 Kč

| Termín                   | Prostor                                       | Jazyk | Volná místa |
|:------------------------ |:--------------------------------------------- |:-----:|:-----------:|
| 2. únor 2018             | [Impact Hub Brno](https://www.hubbrno.cz/en/) | Java  | obsazeno    |
| duben 2018               | [Impact Hub Brno](https://www.hubbrno.cz/en/) | ?     | 8           |

![Lukáš Bednařík]({{ site.url }}/assets/xp-fall.png)

### Obsah

Původní Scrum využíval všechny praktiky extrémního programování (XP),
ale Ken Schwaber přesvědčil Jeffa Sutherlanda, aby tyto praktiky ze Scrumu vynechal
a sousředil se pouze na proces a organizaci týmu.
Bez ověřených vývojářských praktik ale nelze dosáhout
slibovaného nárůstu výkonnosti týmu. Cena za změnu
požadavků v pozdní fázi projektu, kdy jsme nuceni bojovat s nepřehledným kódem,
může být velmi vysoká.

V tomto workshopu se zaměříme právě na tyto *best practices* agilního vývoje.
V praxi si vyzkoušíme TDD (test-driven development), unit-testování a párové programování
v cyklu unit-test &rarr; implementace &rarr; refaktoring &rarr; unit-test. Vysvětlíme si,
co je to stub, mock, seam a naučíme se psát unit-testy, které jsou udržovatelné,
důvěryhodné a čitelné.

Mimo jiné se dozvíte, jak do sebe zapadá XP a Scrum, jak zavést XP ve Scrum frameworku,
jak do sebe zapadají praktiky XP a v čem je jejich spojení vyjímečné.

### Osnova

1. Historie Extrémního Programování (XP)
1. Praktiky XP jako puzzle
1. Unit-testování
     - Dobrý unit-test
     - Stub
     - Mock
     - Frameworky Catch a FakeIt
1. Párové programování
1. Průběžná integrace (CI)
1. Další praktiky XP
   - Sdílené vlastnictví kódu
   - Jednoduchý design
   - Metafora
   - Plánovací hra
1. Práce s legacy kódem
   - Unit-testování v legacy kódu
   - Refaktoring
1. Role v XP
1. XP a Scrum
   - Společné praktiky Scrumu a XP
   - XP ve Scrumu jako cesta ke zlepšování
1. Kvalita softwaru
1. Nástroje a frameworky

### Materiály

Prázdný projekt s nastaveným testovacím prostředím a dalšími instrukcemi naleznete v [GIT repozitáři](https://github.com/sand-dollar/clean-project):

```
git clone https://github.com/sand-dollar/clean-project
```

Na workshop je nutné si přinést svůj notebook a **předem si vyzkoušet**, že jste schopni projekt zkompilovat.
