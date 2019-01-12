---
layout: post
title: Jak na toxické code review
tags: praktiky programování
---

Podaří-li se vám najít ty správné vývojáře a utvořit z nich tým,
můžou být vaše code review opravdu toxická.
Níže je praktický návod, jak na to.

<!--more-->

## Posmívejte se

Nejlepší způsob, jak zajistit, aby se daná chyba nikdy neopakovala,
je uvést diskuzi slovy: “Nechápu, jak toto mohl někdo napsat…” nebo
“Ještě to ani není v repozitáři a už je potřeba to přepsat…”
Podobné věty mohou dotyčnému velmi pomoci se zlepšovat a vnášejí
nové myšlenky do problematiky, která se řeší.

## Říkejte své názory jako fakta

Není potřeba diskutovat nad tím, jestli by tato metoda měla být statická.
Ona by měla být statická! To je fakt. Pokud to tak váš kolega nemá,
musí to opravit. Je to chyba. Koneckonců, co by vás zrovna on měl co učit o programování.
Nejlepší styl psaní kódu je ten váš, protože jste si jej za dlouhá léta vytříbili.
V dalším případě délky metod můžete odcitovat několik studií, které ukazují,
jak dlouhé metody snižují čitelnost a zvyšují pravděpodobnost chyby.
Je zbytečné bavit se o tom, proč jsou metody tak dlouhé. Času je málo.

## Nespěchejte

Je-li hodinové core review dobré, desetihodinový maraton bude přímo skvělý.
Cokoliv je špatně, musí být opraveno. “Neber si to osobně, ale tvůj kód je kupa hnoje.
Bude s ním ještě hodně práce...” Ujistěte se, že jste opravdu poukázali na všechny
nedostatky kódu a váš kolega se tak bude moci maximální měrou poučit.
Za cenné rady, které jsme mu dali, by vám mohl na závěr poděkovat.

## Používejte nástroje

Proč se bavit v kanceláři osobně, když vám vaše firma poskytla tak dobrý nástroj pro code review.
Všechny poznámky výhradně pište. Výhoda je, že dotyčný nemusí být v kanceláři přítomen.
Vaše poznámky navíc poslouží jako důkaz vašeho pracovního nasazení a vašich znalostí.

Buďte důkladní
Proč jsou v kódu dvě “for” smyčky, když by stačila jedna? Proč je v “if” znegovaná podmínka?
Proč je na konci řádku zbytečná mezera? Buďte důkladní.
Nevadí, že některé kontroly za vás může udělat automatický nástroj.
Buďte to vy, kdo nic nepřehlédne.

## Nerozlišujte kód od lidí

Není rozdíl mezi blbým člověkem a blbým kódem. Jestli někdo píše špatný kód, musí to být blbec.
Místo obecných vět typu “vyhodí-li metoda Func vyjímku, program spadne,”
pište přímočařeji: “Vyhodí-li metoda Func vyjímku, spadne ti to.”

U problémů, které jsou v kódu již delší dobu, si vždy dohledejte autora zodpovědného za danou změnu.
Tak budete vždy moci oslovit tu správnou osobu, která je za chybu zodpovědná.

## Nedejte se snadno

Možná se někdy ukáže, že nemáte pravdu. Ale nedejte se! Poukažte na některá videa o programování,
která jste v poslední době viděli. Můžete také říct něco ve stylu:
“Četl jsem více knih o unit testování než ty. Co jsi četl ty?”
Tím hodíte otázku na hlavu dotyčného a pokud jste vůbec nic nikdy nečetli,
code review skončí rychleji než si kolega stihne nějaké relevantní informace zjistit.
