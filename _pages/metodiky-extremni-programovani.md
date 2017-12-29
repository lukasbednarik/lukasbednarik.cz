---
layout: page
title: Extrémní programování
permalink: /extremni-programovani
---

Kent Beck byl v roce 1996 přizván jako expert na Smalltalk k projektu C3 společnosti Chrysler.
C3 (též Chrysler Comprehensive Compensation) byla účetní aplikace, která měla nahradit několik do
té doby samostatných aplikací pro mzdové účetnictví.

Beck se chopil příležitosti. Aby zjistil, co je nutné na projektu udělat, naplánoval s každým vývojářem
C3 půlhodinový rozhovor. Diskuze s Donem Wellsem se protáhla na tři hodiny. Wells přesvědčil Becka,
že kód C3 se nemůže v současném stavu nikdy dostat do produkční fáze (Wells 2017). Když Beck prezentoval
své závěry vedení, poukázal na několik nedostatků v metodice vývoje. Během následujících měsíců zavedl
do Chrysleru mnoho ověřených praktik, které spojil do jedné metodiky nazvané Extrémní programování (Beck 2000).
O tři roky později své myšlenky, stojící za extrémním programováním, vysvětlil v knize Extreme Programming Explained.

Extrémní programování (XP) je jako puzzle. Ačkoliv byly jednotlivé díly skládanky známy dlouho předtím,
není na první pohled vidět, jak do sebe zapadají. Přínos XP spočívá ve vytvoření kompletního
a vysoce efektivního systému.

Na druhou stranu mnoho organizací není schopno nebo ochotno adoptovat všechny praktiky XP. Matt Stephens
a Doug Rosenberg spekulují, že toto je pravděpodobně jeden z důvodů, proč XP v mnoha společnostech nenaplní
očekávání (Stephens and Rosenberg 2003).

Specialitou XP není jen výběr ověřených praktik, ale dotažení těchto praktik do extrému. Pokud shledáme unit
testy užitečné, pokryjeme jimi celý kód. Je-li přínosná diskuze se zákazníkem, zajistíme, aby byl zákazník neustále k dispozici atd.

Z pohledu systémového myšlení je XP extrémní také v počtu zpětných vazeb. Management poskytuje týmu podporu
a možnost se samoorganizovat výměnou za schopnost pozorování, v jakém stavu se software nachází. Například:

- „zákazník na pracovišti“ dává zpětnou vazbu k produktu,
- párové programování a unit testy umožňují kontrolovat kvalitu kódu,
- párové programování a rotace v týmu dávají vývojářům zpětnou vazbu k jejich znalostem,
- měření tzv. velocity pomáhá při plánování,
- častou integrací zjistíme, jak dobře do sebe komponenty zapadají.

Závěr XP je velmi neintuitivní tvrzení: V mnoha případech je rychlejší a levnější psát kvalitní kód ověřenými
praktikami než vývoj „šidit“.

Proč XP nepoužívají všichni? XP vyžaduje, aby si vývojáři osvojili nové praktiky, jako je zvyk vždy psát test
před produkčním kódem, což není zpočátku přirozené. Další, mnohem větší překážkou je podpora XP managementem.
Je rozdíl, jestli management vnímá psaní unit testu jako ztrátu času, nebo jako metodu, jak psát kvalitní kód
rychleji. Lidské emoce a strach z neznáma hrají při zavádění XP největší roli. Kent Beck situaci shrnuje slovy:
„Extrémní programování je jednoduché, ale není snadné.“

> When people hear me talk about XP they say, „But you make it sound so simple.“ Well, that's because it is simple.
It doesn't take a Ph.D. in computer science to contribute to an XP project (in fact, the Ph.D.'s sometimes have
the most trouble). XP is simple in its details, but it is hard to execute.
>
> (Beck 2000, str. 113)

Beck dodává, že existují projekty, které XP neumožňují. XP není vhodné pro velké týmy, pro některé technologie
a při odmítavém postoji týmu nebo zákazníka.

