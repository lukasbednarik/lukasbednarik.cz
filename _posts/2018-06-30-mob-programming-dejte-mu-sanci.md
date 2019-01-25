---
layout: post
title: Mob Programming - dejte mu šanci
tags: mobování praktiky programování
---

Mob programming je fenoménem posledních let.
V rozdělení innovators, early adopters, majority, late majority,
řadí InfoQ mobování do vlny early adopters.
Odpovědi na otázky typu "jak mobování vůbec může fungovat" jsou
známy a některé týmy se mobování aktivně pokoušejí dostat do praxe.

<!--more-->

## Co je to Mob Programming

Mobování je, když všichni ti úžasní lidé pracují
- na stejné věci,
- ve stejný čas,
- na stejném místě,
- na témže počítači.

Zatímco první tři body mohou znít jako obecný Agilní vývoj,
čtvrtý bod je nový, neintuitivní.
Mob Programming je *continous integration of ideas* - tým nepotřebuje
code review, standupy ani další meetingy, protože nejlepší ze všech nápadů
jsou integrovány do produktu v reálném čase.

<iframe width="560" height="315" src="https://www.youtube.com/embed/p_pvslS4gEI?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

Proč bychom takto měli pracovat? Protože to tým tak chce.
Mobování totiž rozhodně není pro každého.

## Filozofie mobování

Proč používáme k psaní klávesnici? Klávesnice není nejefektivnější způsob,
jak komunikovat s počítačem. Vždyť mačkat *p-í-s-m-e-n-k-o p-o p-í-s-m-e-n-k-u*
je strašlivě zdlouhavé. Musíme dlouho trénovat, než se tento způsob přenosu myšlenek
do počítače naučíme používat efektivně.

Mnohem lepší by bylo komunikovat s počítačem hlasem. Při programování mu říci:
"Vytvoř nový projekt. Napiš main. Vytiskni Hello World!" Bohužel takto technologicky
daleko ještě nejsme. Klávesnice zůstává jediným rozumným způsobem komunikace.

To ale nemusí být pravda v týmu. Jeden člověk může s počítačem komunikovat pomocí klávesnice,
zatímco ostatní mohou pracovat na vymýšlení všech těch úžasných věcí. Říkáme, že člověk
u klávesnice je "driver", zatímco ostatní jsou "navigátoři".

Driver nemusí moc přemýšlet. Zkrátka píše. Jde-li o zkušeného člověka, můžeme mu říci:
"S třídou Flexi budeme komunikovat pomocí observer pattern. Použijeme signal-slot knihovnu
a propojíme ji s funkcemi OnNewEvent." S juniorem budete naopak komunikovat více detailněji:
"Stáhni knihovnu SigSlot a připoj ji do projektu. Z funkce OnNewEvent uděláme slot tak,
že před ni přidáme definici SLOT..."

Detailnost vaší komunikace závisí jen na senioritě týmu. Přesto se všichni neustále učí.
Do produkčního kódu se dostanou jen nejlepší myšlenky.

## Jak to funguje v praxi?

Využít celý tým, aby pracoval jen na jedné věci, se zdá velmi neefektivní.
A ano, je to neefektivní. Jenže tato neefektivita je vyvážena obrovskou úsporou času v jiných oblastech.
Tak například:

- nejsou potřeba žádné meetingy (kromě 5 minutové denní retrospektivy a plánování),
- není potřeba code review (dělá se v reálném čase),
- tým se na rozdíl od jednotlivce nikdy nezasekne na nějakém těžkém problému,
- odpadají případy, kdy se někdo dostane do slepé uličky a musí kód předělávat,
- výsledný kód má extrémně nízký počet bugů (lidé nejčastěji říkají, že nula),
- lidé se u programování střídají v různých rolích, jsou odpočatější, což velmi zvyšuje produktivitu,
- kód je přehlednější a udržovanější, což se vyplatí z dlouhodobého hlediska,
- celý tým se učí a zlepšuje,
- hotové věci se ihned zkoušejí - rychlá zpětná vazba od produkťáka nebo zákazníka znamená
  méně zbytečné práce pro tým.

Největší síla mobování spočívá právě v eliminování zbytečné práce, zbytečné komunikace, zbytečných meetingů.
Rád bych otázku "jak může Mob Programming být efektivní" parafrázoval
otázkou "jak může programování, ve kterém každý pracuje na svém úkolu samostatně, být efektivní?"

Autor mobování, Woody Zuill, nedoporučuje tuto praktiku každému. Woody společně s týmem hledal způsob,
jak by lidé v týmu mohli pracovat společně efektivněji. Výsledkem je Mob Programming. Rozhodně jej zkuste,
avšak mějte na paměti, že vaše cesta k efektivnější spolupráci může vypadat úplně jinak.

