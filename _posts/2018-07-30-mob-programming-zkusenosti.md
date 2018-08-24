---
layout: post
title: Zkušenosti z mobování
tags: mobování praktiky programování
---

Během přípravy na mobování v praxi jsem si sepsal několik situací, na které
můžeme narazit. Nejsou to mé zkušenosti, čerpal jsem z videí a blogů.

Nevíte-li, [co vlastně mobování je](/mob-programming-dejte-mu-sanci), přečtěte si můj první článek.

### Je to jako ve slepičinci

Začíná-li tým s Mob Programming, může to v místnosti vypadat jako v kurníku.
Každý mluví přes sebe. Každý ví nejlépe, jak daný problém vyřešit. Každý prosazuje své (nejlepší) řešení.

V tomto okamžiku je velmi důležitá role kouče. Vaším úkolem je přimět tým, aby se soustředil na problém,
který řeší, a vyřešil jej. Až potom můžete napsat test. A až potom můžete optimalizovat řešení.
Odložte tedy optimalizaci na později.

### Coding standard

Coding standard je naprosto kritický, chcte-li předejít hádkám o tom, jak pojmenovávat soubory,
funkce, jak procházet smyčky a které konstrukce přednostně používat.
Mobování prospívá dodržování coding standardu a velmi brzy bude celý kód vypadat jednotně.

### Angažovanost

Chcete, aby se do programování zapojil celý tým. Jenže v praxi to vypadá tak, že se jeden člověk chopí
klávesnice, píše, píše, píše... Ostatní se chvíli snaží držet krok a jak soustředění poleví, začnou se nudit.
Člověk u počítače jim právě ve svých myšlenkách utekl.

Řešení má dvě části. První část je zavedení časovače a pravidelného střídání u klávesnice.
Obecně se doporučuje střídat po 7 až 15 minutách (a raději bych se držel spodní hranice, tj. 7 až 10 minut).
Experimentujte. Pořiďte si kuchyňskou minutku nebo použijte některý z nástrojů, který už pro tyto potřeby
[napsali lidé před vámi](https://github.com/search?q=mob+timer).

Dejte pozor na to, aby tým konec časového intervalu neignoroval a skutečně se vystřídal.
Jednou z možností je po uplynutí časového intervalu celou obrazovku zatemnit.

Druhá část řešení problému angažovanosti je tzv. *strong pairing*.

### Strong pairing

Strong pairing je koncept původně vymyšlen pro párové programování. Intuitivní chování je, že člověk, který má nápad,
se chopí klávesnice a začne psát. Druhý kolega se zoufale snaží držet tempo.
Tento antipattern se nazývá *driver & observer*.

Možností, jak z toho ven, je tzv. strong pairing. Člověk s nápadem pokračuje v analýze svojí myšlenky, zatímco
klávesnice se chopí jeho kolega. Nabízí se analogie s řízením auta: pokud víte, kudy jet, raději by
jste se měli soustředit na nalezení nejoptimálnější cesty. Mačkat plyn, spojku a brzdu může váš kolega.
Driver zastřeší komunikaci s autem. Nebudete mu říkat: "Teď přeřaď na trojku." Necháte to na něm.
Soustředíte se na mapu a na cestu.

Podobné je to v programování. Neříkáte řidiči všechny detaily, ale soustředíte se na algoritmy,
design, architekturu a testovatelnost.

### Jednotné prostředí

Dohodněte se na nastavení mobovacího počítače. Je nepraktické neustále přehazovat
editory a zvykat si na nové klávesové zkratky. Použijte jednotné prostředí s defaultním
nastavením klávesových zkratek. Jako operační systém většina týmů volí Linux.

### Nastavení očekávání

Zkuste TDD. Napište test, implementujte a až nakonec refaktorujte. Styl *test first*
sjednotí očekávání týmu *jaký problém se bude řešit* a *jak se bude řešit*.

### Ergonomie

Pracujete-li v mobu denně, dbejte na ergonomii. Ne, gauč není ideální. Použijte pracovní židle,
velkou obrazovku nebo promítací plátno, před kterým je stůl s klávesnicí. Neseďte bokem k obrazovce,
z otáčení hlavy vás bude bolet za krkem.

### No branches!

Protože celý tým pracuje na téže věci a code review probíhá v reálném čase, není potřeba vytvářet branche.
Vytváříte-li branche, pak neděláte continuous integration.

Obohacením continuous integration o continuous deployment vytvoříte workflow pro continuous delivery.
Při continuous delivery přistane s drobným zpožděním u zákazníka všechno, co přistane do codebase.

### Paralerní práce

Někdy dává smysl, aby jeden člověk pracoval samostatně. Píšete-li kód, který komunikuje s databází,
může jeden člen týmu připravovat příklad takové databáze pro testování. Celý tým stále pracuje na jedné věci,
jen jeden vývojář podporuje plynulou práci zbytku týmu.

### 0 bugů

Někdo je dobrý na TDD a umí psát testovatelný kód, jiný člověk zná výborně programovací jazyk Java, dalšího
baví nejvíc databáze.

Bude-li produkční kód psát expert na Javu, použije výborně jazyk, ale jeho kód nebude dokonale testovatelný.
Jeho kód nebude ani interagovat s databází optimálním způsobem.

Naopak, píše-li kód celý tým současně, dostane se do produkce jen to nejlepší z celého týmu.
Častou zkušeností týmů praktikujících mobování je, že vzniklý kód má nula bugů v produkci.
(Je to neuvěřitelné.)

### Meetingy

Kdokoliv z týmu může na kterýkoliv meeting, protože každý ví, na čem se pracuje a jaký je stav práce.
Týmové meetingy jsou naopak téměř eliminovány. Odejde-li jeden člen týmu, není třeba předávat žádnou práci,
protože každý je stoprocentně zastupitelný.

### Klasická code review

V klasickém code review objevíte některé chyby v kódu, nikdy se ale nedozvíte, která řešení byla
zamítnuta a proč. To vede na doptávání a další diskuze typu: *Proč jsme věc X udělali takto, ale ne takto?*

Real-time code review neslouží v mobování jen k opravování chyb, ale především k hledání optimálního řešení problému.

### Co na to Product Owner?

V jednu chvíli je rozpracována jen jedna věc. Tato jedna věc je rychle doručena.
Product Owner by měl být spokojen, protože ihned vidí výsledky práce a může ji testovat na zákazníkovi.
Nemá smysl mít rozpracováno pět úkolů současně a nevidět žádný výsledek.

Další věcí je rychlost. Týmy, které úspěšně praktikovaly mobování delší dobu, reportovaly 4 krát více
vyřešených tiketů než dříve (při zachování průměrné velikosti tiketu).

### Pracujeme jako tým

Na začátku se musíte ujistit, že každý v týmu chce takto pracovat. Tým má společný cíl, všichni pracují na stejné
věci ve stejný čas u jednoho počítače. Mob programming nelze nikomu vnutit.
