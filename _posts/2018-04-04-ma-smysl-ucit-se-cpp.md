---
layout: post
title: Má smysl učit se C++ v roce 2018?
tags: programování
---

Má smysl učit se C++ i v roce 2018? Jednou větou: "Ano, pokud jsou
systémy psané v C++ to, co vás zajímá."
Více větami: viz zbytek článku.

Jazyk C++ vytvořil Bjarne Stroustrup v 80. letech v Bellových laboratorých.
Od té doby vzniklo několik standardů: C++98, C++03, C++11, C++14, C++17.
Nejvýznamnější změny jazyka přináší C++11 a vývoj v posledních letech
ukazuje, že jazyk C++ je stále živým jazykem. Standard C++14 opravuje a přidává
věci, které se do C++11 nevešly. Verze C++17 se zaměřuje na zlepšení čitelnosti
kódu.

Odpověď na otázku, zda zvolit C++ jako svůj další jazyk, závisí na tom,
zda chcete vyvíjet systémy, pro které je C++ vhodný. Každý jazyk se totiž hodí
na něco jiného. Cesta C++ byla *více matematická*, než u jiných jazyků. C++ umožňuje zvolit
z několika programovacích přístupů (objektově orientované programování, metaprogramování,
data abstrakce, hierarchie tříd).
C++ vám umožní vybrat si z mnoha cest, přičemž optimální variantou bývá kombinace
všech přístupů. Něco takového ve většině jazyků není možné.

Na druhou stranu je nutné říci, že v jazyce až donedávna
chyběly základní funkce pro interakci se souborovým systémem (např. vytvořit složku)
a psaní grafických aplikací vyžaduje externí framework, jehož studium vám pravděpodobně
zabere více času než studium samotného jazyka. C++ se v minulosti více zaměřilo na abstraktní
možnosti jazyka a zvětšování standardní knihovny nebylo prioritou.

Předností jazyka C++ je jeho rychlost a blízkost k hardware.
Osobně jsem C++ využil v práci při psaní software k vojenským radarům, stolním telefonům,
nativním Windows aplikacím (to jsou ty aplikace, které vypadají lépe než Java aplikace).
Vývoj programů pro věděcké výpočty většinou probíhal
přepisem kódu z Pythonu / Matlabu, odkud byly algoritmy převedeny kvůli rychlosti
a přenositelnosti do C++ (není nutné řešit, jakou verzy Python má zákazník nainstalovanou).
Často se setkáte s informací, že v C++ se píší operační systémy. V praxi ovšem musíte být velký
geek, aby jste se dostali ke kódu Linuxového jádra. Dokonce i Red Hat vás spíše zaměstná na vývoji
virtualizačního rozhraní než na fixování Linuxu.

Jazyk C++ tu je s námi už dlouho a ještě dlouho bude. Je to taková stálice.
Protože většina společností má spousty starého kódu, práce na vývoji nového
software se hledá obtížně, ale je tu. Jděte do C++, pokud by se vám líbilo dělat
na věcech zmíněných výše, nebo alespoň pokud chcete mít praktickou zkušenost
s jazykem blízkým k hardware.

P.S. Rozhodnete-li se učit jazyk C++, pozor na jeden častý mýtus:
"Při učení C++ se hodí nejprve znát jazyk C." Ne! To není pravda!
Přes podobnost syntaxe je C jiný programovací jazyk. "C-čkové myšlení"
se při přechodu do C++ jen těžko odnaučuje. Za důkaz by mi posloužily miliony
řádků starého C++ legacy kódu, který psali lidé zvyklí na C.
