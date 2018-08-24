---
layout: post
title: Dobré unit testy
tags: testování programování praktiky
---

Před několika lety jsem pracoval na produktu, u nějž byla vyžadována extrémní spolehlivost.
Podle několika výzkumů unit testy snižují počet defektů následně nalezených v kódu o
40-80%. Zákazník si tedy vyžádal k produktu unit testy. A všichni vývojáři je psali.

Brzy jsem si uvědomil, že mí kolegové nepíší unit testy, ale "nějaké testy".
Jakoby si jen stačilo stáhnout unit-testovací framework a přečíst pár návodů na internetu.
Vzpomněl jsem si na knihu *The Art of Unit Testing*, kde
Roy Osherove popisuje, jak na svém prvním projektu s unit testy pohořel:

- jakákoliv malá změna požadavků vedla ke změně testů,
- některé testy byly nepoužitelné, protože nikdo nevěděl, jak fungují,
- jiné testy závisely na dalších testech,
- údržba testů stála více času, než kolik se ušetřilo za debugging.

Mnoho společností od unit testování upouští, protože špatné unit testy nenaplňují očekávání
a podpora managementu se pozvolna vytrácí.
Na druhou stranu *dobré unit testy* mohou skutečně zvýšit kvalitu kódu, zmenšit počet defektů
a dokonce i urychlit vývoj.

![]({{ site.url }}/assets/it-works-on-my-machine.jpg)

Dobrý unit test by měl:

- být automatický a opakovatelný,
- snadný na implementaci (jinak jej nebudeme chtít napsat),
- jednou napsán, měl by zůstat pro budoucí použití,
- každý by jej měl být schopen spustit,
- měl by jít spustit jedním kliknutím,
- měl by běžet rychle (jinak jej nebudeme pouštět často).

I když váš test po napsání splňuje všechno výše uvedené, ještě důležitější je otázka:
"Platí toto všechno pro test, který jsem napsal před dvěma měsíci?"

Dobrý unit test je navíc důvěryhodný, udržovatelný a čitelný.

### Důvěryhodné unit testy

Pokud test selže, nehledáme chybu v testu. Jestliže test projde, nepouštíme debugger, abychom
ověřili, že nový kód skutečně funguje.

Doporučuje se nepoužívat v testu logiku a testovat vždy jen jednu věc.

### Udržovatelné unit testy

Vyhneme se testování private funkcí. Chceme-li opravdu testovat private funkci, pak by tato
funkce neměla být private.

Testy musí být izolované. Jeden test nesmí záviset na ostatních testech,
takže můžeme kdykoliv spouštět libovolný výběr z testů a také můžeme kdykoli
libovolný test odstranit. Testy odstraňujeme při nalezení duplicitních testů.

Nakonec - měli bychom se vyhnout přespecifikování testu. Například testujeme-li *string*,
je lepší volit podmínku "*string* obsahuje řetězec" než podmínku "*string* je roven řetězci".
Podobně se raději vyhneme podmínkám testující volání funkcí v daném pořadí.
Testujeme jen požadované chování, ne způsob implementace.

### Čitelné unit testy

Pojmenovávání unit testů by mělo respektovat dohodnutý standard.
Jméno testu může vypadat například takto:
*JménoMetody_TestovanýScénář_OčekávanéChování*.

Čitelně pojmenováváme proměnné v unit testu a věnujeme značnou péči napsání smysluplného assertu.

## Kdy psát unit testy

Mnoho lidí si myslí, že je lepší psát unit testy před psaním produkčního kódu.
Ano, psát unit test první je neintuitivní, ale pokud to neuděláte, může se vám honit
hlavou například toto (moje zkušenost): "Měl bych napsat 5 unit testů, ale ještě potřebuji
doimplementovat tohle... A ještě tohle..." O 3 hodiny později: "Už ani nevím, co jsem chtěl
vlastně testovat... Jo toto... No to je triviální funkce... Raději napíšu 5 unit testů na tohle..."
V závěru jsem tak skončil s 5 unit testy. Kdybych psal test první, mohl jsem mít v tuto chvíli
unit testů 20.

Mnoho sportů je na profesionální úrovni také neintuitivních. Například sprinteři běhají po špičkách.
Hráči ping-pong jsou podivně nahrbení a mají pokřivená zápěstí. Na pokřivené zápěstí narazíte
také u bubnování, kde je držení paličky tak zvláštní, že noví hráči se jej učí měsíce!
Dělat *test first* je neintuitivní, ale vy jste také **profesionálové**.

## Design kódu

> Test driven development encourages simple designs and inspires confidence.
>
> --- Kent Beck

Unit testy mají vliv na design kódu, protože jsou dalším uživatelem kódu.
Metody, které chceme testovat, musíme zpřístupnit testu a musíme je umět
separovat od zbytku kódu, abychom mohli v testu vždy testovat jen jednu věc.

Řešení problémů spojených s designem testovatelného kódu vede - dle mé zkušenosti - na
lepší design. Možnost bezpečného refaktoringu je pak již jen třešničkou na dortu.
