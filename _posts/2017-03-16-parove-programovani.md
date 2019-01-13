---
layout: post
title: Párové programování
tags: programování praktiky
---

Mohou dva lidé pracující u jednoho počítače dodat produkt za stejný
čas jako dva lidé pracující každý na svém počítači?
Zastánci párového programování tvrdí, že ano, i když je to neintuitivní.

<!--more-->

Extrémnější analogií párového programování je tzv.
[mob programming](/mob-programming-dejte-mu-sanci), kdy u jednoho počítače sedí celý tým.

## Co vidíme

Myšlenka párového programování je velmi jednoduchá. V letadle nesedí sám pilot, ale má co-pilota.
Závody rally nejezdí sám řidič, má navigátora. TV zprávy uvádějí dva moderátoři, operaci neprovádí
sám chirurg (i když by to zvládl), ale má asistenty. Ani sniper nepracuje sám, má pozorovatele.
Programovat mohou také dva lidé - jeden řídí (driver), druhý naviguje (navigátor). O co se jedná?

- dva lidé pracují na stejném úkolu jako tým
- oba mají stejný cíl, ale rozdílné znalosti
- jeden píše kód
- druhý naviguje (promýšlí alternativy, souvislosti, design, požadavky, opravuje)

Párové programování není mentoring, kdy zkušenější radí juniorovi. Oba programátoři
si na sebe musí nejprve nějakou dobu zvykat. To je na párovém programování ta těžší část.

## Není to plýtvání?

Je těžké přesvědčit management, že to není plýtvání prostředky. Vždyť přece:

- dva vývojáři dělají práci jednoho,
- junior bude zpomalovat seniora,
- udělá se méně práce,
- bude to stát dvakrát tolik peněz (H. Erdogmus, L. Williams. On the Economic Feasibility of Pair Programming),
- proč nechávat dva lidi dělat práci, kterou zvládne jeden člověk?

## Přínos párového programování

Vývoj software vyžaduje dovednost a znalost. Hodně přemýšlení, hledání abstrakcí, zkoušení věcí.
Programování je evoluční, iterativní a kolaborativní proces. To je mnohem více než jen psaní kódu.
Ve výsledku nevadí, že u párového programování má klávesnici jen jeden člověk.

- real-time review kódu → méně chyb
- chyby jsou objeveny brzy → vývoj chybného kódu nepokračuje (ztráta času), ale chyba je opravena
- zlepšení kvality designu → může mít přímý vliv např. na rychlost vývoje!
- lepší řešení problému
- práce ve dvojici může vytvořit tlak na včasné doručení (člověk se neponoří do své komfortní zóny)
- lepší zaučení nových členů týmu
- větší uspokojení z práce
- čas k zamyšlení → neplýtvá se časem k vývoji něčeho, co později nebude potřeba
- projekt management: snížení rizika projektu

## Srovnání klasického a párového programování

Výzkum univerzity v Utahu (A. Cockburn, L. Williams. The Costs and Benefits of Pair Programming)
ukazuje data, která bychom asi intuitivně očekávali. Párové programování nás
z počátku může stát více času, ale jakmile se tým sladí, je tento rozdíl zanedbatelný.

![](/images/blog/pair-programming-1.png)

Párové programování vede k odhalení více chyb během implementace. Výsledkem je kvalitnější kód.

![](/images/blog/pair-programming-2.png)

Dva vývojáři jsou schopni nalézt efektivnější řešení problému. Výsledný kód je kratší. Kratší kód znamená méně
práce při údržbě a další ušetřené peníze v delším časovém horizontu.

![](/images/blog/pair-programming-3.png)

Cena opravy jedné chyby roste exponenciálně s časem, kdy je chyba objevena a opravena. Párové programování
přispívá k objevování chyb v nejranější fázi implementace!

## Proč párově neprogramují všichni

Mezi překážky párového programování patří:

- je těžké přesvědčit stakeholdery, aby nechali dva lidi pracovat na stejném úkolu,
- lidé mají tendenci se vracet do "komfortní zóny", což párové programování narušuje,
- silné vlastnictví kódu (pokud každý kus kódu má svého vývojáře, který jediný jej může upravovat),
- nezájem lidí,
- vývojáři, kteří se neúčastní odhadování a plánování úkolů,
- jiné osobní nastavení počítače (někdo např. používá jen českou klávesnici a vim pro editování kódu),

## Techniky párového programování

### Ping-Pong

[Ping-pong](http://wiki.c2.com/?PairProgrammingPingPongPattern) je jedna z variant TDD.
Vývojář *A* napíše test, který selže. Vývojář *B* implementuje feature tak,
že test projde, a napíše nový test, který selže. Vývojář *A* implementuje...

Refactoring se provádí kdykoli je potřeba a dělá jej ten, kdo je právě u klávesnice.

### Klávesnice a myš

Jeden vývojář má klávesnici, myš a implementuje program. Druhý vývojář je navigátor - pozoruje a
určuje taktiku, opravuje chyby. Je důležité si dát pozor, aby všechnu práci nedělal člověk u klávesnice,
ale aby se jednalo o skutečně kolaborativní proces.

### Další techniky

- selective pairing
- [cross functional pairing](https://www.solutionsiq.com/resource/blog-post/experience-design-and-cross-functional-pairing/)
- distributed pairing

## Anti-patterns - co nechceme

Nakonec si uvedeme pár bodů, na co si dát pozor při párovém programování.
K praktickým zkušenostem se snad dostanu v jiném článku.

- žádné střídání párů
- všechno vymýšlí i programuje jen jeden člověk
- manager určuje páry
