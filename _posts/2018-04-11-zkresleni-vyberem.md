---
layout: post
title: Zkresleni výběrem
tags: principy statistika
---

Zkreslení výběrem je matematický fenomén, který chtě nechtě každý den zažíváme v praxi.
Zkreslení výběrem znamená, že naše pozorování, ze kterých tvoříme širší závěry,
nejsou pro danou situaci reprezentativní. Informace, které se k nám dostanou, mohou
být záměrně zkresleny nebo si je jen vybíráme dle určitého klíče a tedy si je zkreslujeme sami.
O co se konkrétně jedná?

## Kupujeme rajčata

Zkreslení výběrem bych nejnározněj vysvětlil na příkladu kupování rajčat.
Představte si, že se zastavíte v obchodě, prohlédnete si jedno, dvě, tři rajčata,
a pokud se vám líbí, vezmete si kilo. Gratuluji, právě jste provedli něco, čemu se říká
*statistical inference*. Z vlastností malého vzorku rajčat jste odvodili kvalitu všech rajčat
u obchodníka. Obchodník vám z nich náhodně vybere kilo.
Všechno funguje dobře jen do té doby, dokud je výběr rajčat čistě náhodný.

Vybral-li vám rajčata obchodník, mohlo se stát, že vám záměrmě ukázal tři nejlepší kusy.
Mylně se pak může zdát, že všechna rajčata jsou krásná. A to je právě zkreslení výběrem.

## Zkreslené informace tým lídra

Není-li k nějaké manažerské roli ze strany podřízenýc naprostá důvěra, je téměř jisté,
že se k této roli dostanou jen určité, filtrované, informace.
Ve chvílích, kdy se na první pohled může zdát, že tým exceluje, mohou lidé ve skutečnosti
zažívat své nejhlubší krize.

Vývojáři nemusí říkat všechno, protože:

- se bojí, že budou potrestání;
- nechtějí být sami pověřeni nápravou situace;
- nevěří, že k nápravě (ze strany třetích osob) dojde;
- mají strach o své prémie;
- nechtějí vedení naštvat.

Cesta informací ke střednímu managementu musí naopak projít přes nižší management.
Vzniká tzv. kognitivní bublina, ve které management žije.

## Objevování bugů při testování

Analogií výběru bugů z backlogy je navrtávání ropných polí v Texasu.
V následujícím grafu ukazuje osa *x* počet pokusných vrtů a osa *y* normované množství objevené ropy.

![images/plot-discovery-rate.png](images/plot_discovery_rate.png)
[citace: Root, Drew: The pattern of petroleum discovery rates]

Z grafu je vidět, že několik málo vrtů vedlo k objevení většiny známé ropy. Lineární aproximace
"uděláme dvojnásobek vrtů, abychom objevili dvojnásobek ropy" rychle přestala fungovat.
D. H. Root a L. J. Drew vysvětlují, že velká ložiska jsou objevena první, protože je nejsnadnější je objevit.

Při testování softwarového produktu se můžeme setkat se stejnou křivkou jako na obrázku výše.
Na ose *x* je doba testování, na ose *y* počet objevených bugů.
Během prvního dne je objeveno nejvýce chyb a množství nově objevených chyb další dny klesá.
Stejným způsobem, jakým bychom odhadovali množství neobjevené ropy, můžeme analogicky v některých případech
odhadnout množství bugů, které zatím unikly objevení v testech a budou nalezeny až u zákazníka.

## Závěr

Podobných příkladů zkreslení výběrem bychom mohli nalézt bezpočet. V praxi je důležité o možném
zkreslení vědět. Na zkreslení výběrem můžeme provést korekci nebo data interpretovat jiným způsobem.
