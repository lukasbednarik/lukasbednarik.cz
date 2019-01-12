---
layout: post
title: Jak na programování při pohovorech
tags: pohovory
---

V jednom z [předchozích článků](/idealni-pohovor/) jsem psal, jak by bylo krásné vyzkoušet kandidáta na pohovoru
přímo pomocí [párového programování](/parove-programovani/). Pokud se nejedná o test teoretických znalostí, pak psaní kódu na tabuli zbytečně vyvádí kandidáty z komfortní zóny a navíc po nich chceme něco, co již
nikdy ve firmě dělat nebudou. Programovat ale umět musí. Jak na to?

<!--more-->

## Online nástroje

### CodePad

Nebudu vás napínat a začnu tím nejlepším - aplikací [CodeInterview](https://codeinterview.io). Na stránce si můžete zdarma vytvořit prostředí, ve kterém může současně programovat více vývojářů.
Výhodou i nevýhodou současně je jednoduchost prostředí. Sdílení kódu je možné přes vygenerovaný odkaz.
Ten, kdo prostředí založil, se stává jeho správcem. Na druhou stranu CodePad umožňuje pracovat jen v jednom souboru,
takže TDD takto nevyzkoušíte (ok, to nemusí vadit).

![CodePad]({{ site.baseurl }}/images/blog/codepad.jpg)

V situaci, kdy sedíte s kandidátem v jedné místnosti, je CodePad ideální. Kandidát může pracovat na vlastním notebooku,
na kterém se cítí pohodlně. Můžete testovat skutečnou dovednost programování a nikoli to,
jak vývojář umí vysvětlovat vlastnosti jazyka.

Potřebujete-li více systematický přístup k pohovorům (jeden jednoduchý CodePad vám nestačí) a chcete-li
komunikovat s uchazečem na dálku, doporučuji placenou verzi. Rozhodnutí, je-li 14 USD za test jednoho uchazeče ve druhém
kole pohovoru cena zbytečně vysoká, už nechám na vás.

Velmi podobnou službou je [CodeShare](https://codeshare.io). Doporučuji k vyzkoušení, je také zdarma.

### Paiza

[Paiza](https://paiza.io/en/) podporuje celou řadu jazyků a více otevřených souborů, bohužel podpora sdílení
kódu je zatím experimentální. Po grafické stránce (a zejména v porovnání s CodePad) nevypadá prostředí
Paiza tak profesionálně. Přesto - Paiza je zadarmo!

### Compiler Explorer

A co když nepotřebujete sdílení kódu? Co když vám stačí projektor připojený k notebooku, na kterém uvidíte,
co uchazeč dělá? Nebo jen hledáte online kompilátor pro vlastní prezentaci před publikem? Použijte
[Compiler Explorer](https://godbolt.org/).  Vše, co napíšete, je automaticky okamžitě zkompilováno do assemblerovských instrukcí.
Viděl jsem několik přednášek, které byly založeny jen na Compiler Exploreru místo klasických slajdů.

### Wandbox

[Wandbox](https://wandbox.org/) je něco pro opravdové geeky.
Kromě podpory několika jazyků umožňuje kompilování na nightly buildu GCC. V C++ tak můžete vyzkoušet,
jak daleko je implementována podpora C++20.

Jo, a klasickou [C++ Shell](http://cpp.sh/) všichni znáte. Ale tím už dnes nikoho neohromíte.

## Co budeme programovat?

Můžeme se zkusit zeptat na nějaké nové vlastnosti jazyka C++ (C++11, C++14, C++17, …).
Pokud tohle uchazeč zná, ukazuje to na jeho aktivní zájem o jazyk a o programování jako celek.
Dále můžeme zkusit některé z programátorských cvičení [Kata](http://codingdojo.org/kata/).

