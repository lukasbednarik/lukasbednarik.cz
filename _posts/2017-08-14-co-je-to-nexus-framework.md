---
layout: post
title: Nexus framework
tags: agile scrum
---

Nexus je framework pro vývoj produktů, u kterých je nutné koordinovat 3 až 9 Scrum týmů.
[Nexus](https://www.scrum.org/resources/online-nexus-guide) navrhnul a udržuje Ken Schwaber
společně se [Scrum.org](https://www.scrum.org/).

## Role

Nexus definuje tzv. Nexus integrační tým, který je zodpovědný za to, že
práce dodaná jednotlivými Scrum týmy bude na konci sprintu úspěšně integrována v produktu.
Členové integračního týmu jsou:
- Produkt Owner (PO),
- Scrum Master (SM),
- členové integračního týmu.

### Produkt Owner

V Nexus frameworku je pouze jeden backlog a právě jeden produkt owner, který má konečné slovo.

### Scrum Master

Scrum Master integračního týmu je zodpovědný za pochopení a správné používání Nexus frameworku.
Tento SM může být zároveň SM některého z týmů.

### Integrační tým

Členové integračního týmu mohou být také členy některého z vývojářských týmů, nicméně práce
spojená s integračním týmem má vyšší prioritu. Nexus si uvědomuje, že integrace
"není zadarmo" - v nejjednodušším případě je nutné alespoň nastavit a udržovat automatizované workflow.

Integrační tým se stará o zjišťování závislostí v projektu a může ostatním vývojářům vysvětlovat návrh
architektury systému nebo je vzdělávat v současných trendech vývoje.

## Události

Události v Nexus frameworku jsou podobné Scrumu, jen se klade zvláštní důraz na zjišťování
a zaznamenávání závislostí mezi týmy.

### Standup

Zástupci každého z týmů se účastní Nexus Standupu. Tento standup se točí kolem tří otázek:
- Byla práce z předchozího dne úspěšně integrována?
- Objevily se nějaké nové závislosti v systému? (Pokud ano, zaznamenáme je do Nexus Sprint Backlogu.)
- Jaké informace bychom měli sdílet skrz týmy?

Výsledek standupu se dále předává na standupech jednotlivých týmů.

### Sprint review

Nexus sprint review nahrazuje týmová sprint review. Zákazníkům se ukazuje kompletní produkt,
což umožňuje získání lepší zpětné vazby na funkce dodané ve sprintu.

### Retrospektiva

Velký důraz na zlepšování v Nexus frameworku je vidět na průběhu retrospektivy. Zástupci každého
týmu se nejprve sejdou, aby identifikovali problémy zasahující více týmů. Následně proběhnou
týmové retrospektivy, kde se tyto problémy prodiskutují.

Aby se mohl Nexus vyvíjet, musejí se výsledky z týmových retrospektiv znovu projednat v užším kruhu.
Zástupci každého týmu se tedy sejdou ještě jednou.

### Refinement

Refinement je doplňování backlogu. Ideální backlog by měl obsahovat detailní popis položek,
které se naplánují pro další sprint, a hrubější popis položek ležících na spodních příčkách backlogu.
Abychom mohli z tohoto hrubého popisu udělat popis přesnější, potřebujeme "refinement". Během
refinementu navíc identifikujeme a zaznačíme závislosti mezi týmy.

### Sprint planning

Účelem Nexus Sprint Planning je koordinace aktivit mezi jednotlivými Scrum týmy na další sprint.
Planning je dobré začínat revizí závislostí mezi týmy a dle těchto závislostí vytvořit finální úpravu backlogu.
Je dobré, pokud se planningu mohou zúčastnit všichni členové všech týmů, aby se omezily problémy s komunikací.

Během planningu se definuje Nexus Sprint Goal, tedy cíl, jehož by měly všechny týmy společnými silami
dosáhnout v následujícím sprintu. Na základě společného cíle si později každý tým
definuje svůj Sprint Goal. (Tj. Každý tým tak má dva cíle: jeden společný a jeden individuální.)
