---
layout: post
title: Principy Kanbanu
tags: agile metodiky
---

V jednom z předchozích článků jsem si dělal [legraci z pěti principů Kanbanu](/kanban-principles-explained):

- vizualizujte,
- omezte rozpracovanou práci,
- řiďte tok hodnoty,
- mějte psaná pravidla,
- neustále se zlepšujte.

Dnes si tyto principy popíšeme poctivěji.

## Vizualizujte

Kanban neříká, co a jak vizualizovat. Začněte tedy tam, kde jste teď:
snažte se porozumnět současnému procesu tak, jak se opravdu děje v praxi.

Jako příklad si můžeme vzít vývoj software. Zákazník zadá požadavek,
ten je schálen, je navržena patřičná změna architektury produktu,
změna je implementována, testována a předána zákazníkovi.
Zde máme šest stavů, ve kterých se můžeme nacházet: požadavek, schválení,
návrh architektury, implementace, test, předání zákazníkovi.

Kanban respektuje všechny role, tituly i rozdpovědnosti lidí ve firmě.
Nejdříve porozumějte současnému procesu. Kolik úkolů je průměrně v jednotlivých stavech?
Jak dlouho a kde úkol čeká? Kde je úzké hrdlo? Můžeme nějak rozšířit vizualizaci, abychom
získali ještě více informací? Co blokuje některé úkoly?
Vytvořte vizualizaci, která vám umožní vidět skutečné problémy a dělat lepší rozhodnutí.

## Omezte rozdělanou; práci

Přepínání kontextu je zlo. Kanban to ví. Kanban chce omezit rozdělanou práci.
Kromě zmenšení ztráty z přepínání kontextu má tato změna ještě další pozitivní efekt.

Limit na rozpracovanou práci může vypadat takto: "Tým A nebude mít nikdy
otevřeny více než dva tikety současně." Jakmile tým A jeden tiket zavře,
automaticky si otevře další. Tímto dochází ke změně "push" systému,
kdy týmu A zadáváme práci, na "pull" systém, kdy si tým A aktivně sám práci bere
z připravené hromádky.

Nakonec, méně rozpracovaných úkolů znamená, že to, co se jednou otevře, je rychleji doručeno zákazníkovi.
Firma má méně rozpracovaných úkolů "skladem" a doručené dodávky generují zisk.

Limit rozdělané práce, tzv. "Work In Progress" limit, se obvykle označuje zkráceně WIP limit.

## Řiďte tok hodnoty

Ne všechny úkoly jsou si rovny:

1. Dodávka zákazníka nemusí být hotova příliš brzy,
   ale musí být dokončena ve smluveném termínu. V opačném případě by zákazník nemusel
   zaplatit.
2. Refaktoring a redukce technického dluhu nikdy nespěchá, ale pokud se neprovede,
   někdy v budoucnu můžeme na nekvalitní kód velmi tvrdě doplatit.
3. Bug v produktu blokující podepsání nového kontraktu musí být řešen s nejvyšší prioritou.
   Jde o miliony.

Z příkladů je patrné, že některé úkoly ztrácí svou hodnotu rychleji než jiné.
Cena, kterou zaplatíme za zpožděné doručení, se nazývá *cost of delay* (CoD).

Kanban rozlišuje čtyři archetypy (typické příklady) CoD: expedite, fixed date,
standard, intangible (intangible = nespěchá, ale v delším časovém horizontu se může vymstít).
Maximalizovat tok hodnoty znamená být schopen správně prioritizovat a doručit maximum možné hodnoty.

## Mějte psaná pravidla

Stanovte explicitní pravidla pro svůj proces. Pravidla by měla být jednoduchá, dobře definovaná,
viditelně umístěná, měla by se vždy dodržovat a současně být připravena být okamžitě změněna.

Všimněte si, že dodržování pravidel a připravenost pravidla změnit, spolu souvisí.
Velmi špatnou aplikací principů Kanbanu je nastavit WIP limity a nikdy se nepokusit tyto limity překročit
nebo snížit. Pravidla jsou pevně dána právě proto, abychom odlišili, kdy dodržujeme proces a kdy
už experimentujeme a inovujeme.

WIP limity jsou jen jedním typem pravidel. Mezi další pravidla patří definice přechodů
mezi stavy na kanban tabuli (kdy je úkol připraven, kdy je dokončen...),
způsob alokace kapacit na úkoly, způsob doplňování nových lístečků na tabuli,
a například také kdy některý úkol můžeme prohlásit za zrušený a lísteček zahodit.

## Neustále se zlepšujte

Zlepšujte se společně pomocí drobných experimentů. Prvním krokem může být zlepšení zpětné vazby,
další opatření mohou cílit na problémy odhalené pomocí zpětné vazby.

Příležitostem pro zpětnou vazbu se v Kanbanu říká kadence (cadences).
Kadence jsou pravidelné meetingy, které pomáhají dělat postupné změny a zefektivňovat proces.
Druhý význam slova "kadence" je časová perioda těchto meetingů, tj. jak často se daný meeting opakuje.

Ideální perioda meetingů vždy závisí na kontextu. Příliš časté meetingy a
mrháve časem zaměstnanců, málo časté meetingy a změna nereflektuje aktuální potřeby nebo je příliš pomalá.
