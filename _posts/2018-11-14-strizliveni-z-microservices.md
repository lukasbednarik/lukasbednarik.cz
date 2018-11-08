---
layout: post
title: Střízlivění z microservices
tags: programování
---

Byly doby, kdy se zdálo, že microservices jsou odpověď na všechno.
Vždyť přece Netflix je úspěšný, Netflix dělá microservices.
Proto když budeme dělat microservices, budeme také úspěšní.

Tím, že systém rozdělíme na menší části, se komplexita systému nutně nezmenší.
Jen přesuneme část komplexity do konfiguračního managementu a infrastruktury.
Vznikají nové problémy:

- **Verzování modulů.** Na papíře vypadá všechno jednoduše, ale v praxi spolu nebudou
všechny verze modulů kompatibiltní. Často se nakonec dostaneme do situace, kdy nenasazujeme jednotlivé
moduly, ale kompatibilní skupiny modulů.
- **Komunikace mezi moduly.** Modul A pošle požadavek modulům B a C. Teď si představme, že požadavek v modulu B skončí chybou.
Modul B musí uvědomit modul A. Modul A musí říci modulu C, že má na problému přestat pracovat.
S vyšším počtem podulů roste komplexita řízení.
- **Konzistentní výsledek.** Pokud je komunikace mezi moduly tak složitá, jak zajistíme, aby uživatel vždy viděl jen jeden
konzistentní výsledek?

Otázka, zda použít microservices, nezní "microservices vs. monolit", ale "systém modulární
na úrovni služeb nebo systém modulární na jiné úrovni (na úrovni kódu)".
Nedokážeme-li psát mudulární kód, jaká je šance, že dokážeme navrhnout dobré modulární služby?

K napsání těchto poznámek mě inspiroval článek
[The Death of Microservices](https://dwmkerr.com/the-death-of-microservice-madness-in-2018/),
asi nejlepší věc, kterou jsem tento měsíc četl. Díky, Dave.
