---
layout: post
title: Co umí technický kouč
tags: koučování agile xp
---

V minulém článku [co umí technický kouč](/co-dela-technicky-kouc) jsem psal o tom, s čím vám
může kouč pomoci prakticky. Dnes bych se chtěl zaměřit na to, co technický kouč umí.

### Metodiky

Metodik a frameworků kolem vývoje softwaru existují spousty. Například:

- [Scrum](/ceska-scrum-guide),
- [Kanban](/principy-kanbanu),
- [Extrémní Programování](/workshop-technicka-agilita),
- [Lean Startup](/lean-startup),
- ScrumBan,
- škálované metodiky (SAFe, LeSS, Nexus, ...).

Neočekával bych, že technický kouč bude mistream desítek metodik, ale že bude znát všechny alespoň
přehledově, s několika má praktické zkušenosti a dokáže je vhodně nasadit.

### Vývojářské praktiky

Vývojářských praktik jsou desítky. Například:

- párové programování / [Mob programming](/mob-programming-dejte-mu-sanci),
- TDD, FDD, ATDD, BDD, DDD, ...,
- continuous integration / continuous delivery,
- [unit testing](/unit-testing),
- DevOps,
- refactoring,
- user stories,
- spikes.

Mnohé z těchto praktik jsou často zjednodušovány, takže se zdá, že je dokáže snadno používat každý.
Není tomu tak. O tom, jak rychle a efektivně refaktorovat velmi ošklivý kód, aniž bychom ho rozbyli,
bylo napsáno mnoho knih. Stejně tak o psaní testů - někdy je opravu lepší málo testů, než
mít mnoho špatných testů, které vývojářům nepomáhají, ale vyžadují mnoho času na svou údržbu.
Jak víte, že vaše testy jsou *dobré*?

### Frameworks

Očekával bych, že technický kouč dokáže týmu doporučit vhodné frameworky pro continuous integration,
continuous delivery, DevOps praktiky, virtualizaci a testování.
Rozhodně nemůže znát všechny, ale stále může mít velmi dobrý přehled.

### Architektura

Několik témat z architektury softwaru zahrnuje

- UML,
- typy architektury,
- práce s daty,
- enterprise architecture.

### Design

Jestliže "architektura je strategie", "design je taktika" k dosažení cílové struktury softwaru.
Nejde jen o návrhové vzory a UML, ale také o SOLID principy dobrého OO designu
(které bohužel zná tak málo lidí) a efektivní používání vámi zvoleného programovacího jazyka.

### Trendy

Technický kouč by měl mít přehled o technických trendech. Co se týče praktik, může to být například

- #NoProjects,
- #NoEstimates,
- [Mob Programming](/mob-programming-dejte-mu-sanci),
- Sociocracy,
- [Microservices](/strizliveni-z-microservices),
- DevEx,
- plně distribuované týmy (remote only teams).

### Language agnostic

Když jsem spustil své školení [Technické Agility](/workshop-technicka-agilita),
začal jsem dostávat dotazy typu "bylo by problém předělat workshop z C++ do PHP, Node.Js, Java, Python?"
Praktiky objektově orientovaného programování a psaní dobrých unit testů zůstávají stejné.
Náplň workshopu zůstává stejná. Jen jazyk se mění. Pro kouče je tedy důležité mít zkušenost
s různými programovacími jazyky, i když by ve většině těchto jazyků bez pomoci nic nenaprogramoval.

### Práce s týmem

Technický kouč, stejně jako například Scrum Master, musí umět pracovat s týmem.
Kouč by se měl orientovat ve všech fázích vývoje skupiny, umět vést tým a koučovat ho.

### Legacy systémy

Udržovat se na špici nejnovějších technologií a experimentálních praktik zní lákavě.
Bohužel technický kouč musí mít také zkušenost s legacy systémy bez jakýchkoliv testů a dokumentace, se systémy
s obrovským technickým dluhem. Čas od času na takový kód narazí a reakce typu "přepište to" nepřichází v úvahu.

Když jsem nastoupil do svého prvního zaměstnání, pracovali jsme skutečnou vodopádovou metodikou.
Nejprve revize požadavků, pak architektura, design, implementace a testování až na konec.
Následovaly testy u zákazníka a předání - tedy alespoň ve šťastnějších případech.
Psaní kódu bylo také "legacy". Za každý modul zdrojového kódu zodpovídal jeden člověk.
Pokud jste chtěli něco implementovat v modulu, který vám nepatřil,
museli jste o to požádat vlastníka modulu.

Tato situace a jí podobné jsou věci, které je fajn je někdy v životě zažít.
Na své praktické zkušenosti vám mohu vysvětlit, co ve vodopádovém vývoji fungovalo (ano! něco opravdu fungovalo), co nefungovalo
a v čem je dobré i špatné silné vlastnictví kódu.

Jen velmi málo vývojářů si uvědomuje, že to, co píší teď, bude za pět let znovu vnímáno jako technický dluh.
Nadčasový software nenavrhnete. Je na technickém kouči, aby našel nejkratší cestičku, jak ze starého kódu
dojít k něčemu, co bude v dnešních podmínkách alespoň přijatelné.

### Soft-skills

Soft-skills velmi vycházejí z praktické náplně práce. Bodovitě:

- efektivní komunikace,
- prezentační dovednosti,
- schopnost předávat své znalosti druhým,
- kreativita,
- přirozený "řešitel problémů",
- aktivně naslouchá,
- koučování (trošku hard-skill, trošku soft-skill).

