---
layout: post
title: Cena změny v agilním vývoji
tags: management praktiky agile
---

Jeden ze starých univerzálních předpokladů ve vývoji software je, že cena za změnu požadavků
v programu roste exponenciálně s časem. (Viz např. Steve McConnell, Code Complete,
kde uvádí tabulku.) Budeme-li tomuto předpokladu věřit, agilní vývoj nedává žádný smysl.

Předpoklad agilního vývoje je jiný. Věříme tomu, že můžeme křivku ceny za změnu požadavků
zploštit. Možná až do té míry, že asymptoticky dosahuje jen konstantní (konečné) hodnoty.

Plochá křivka dělá agilní praktiky možnými. A naopak. Agilní praktiky jsou možné jen díky tomu,
že tuto křivku kontrolujeme. Z toho tak nějak plyne, že využívání agilních praktik
znamená psát kvalitní kód. Křivka samotná je výsledkem použitých praktik a technologií.

![]({{ site.url }}/assets/cena-zmeny-klasicky-a-agilni-vyvoj.svg)

Ve snaze co nejvíce omezit křivku ceny za změnu se dle mého názoru dostalo nejdále
[Extrémní programování](/xp-jako-puzzle/).
Extrémní programování je založeno na třech klíčových praktikách: refaktoringu, [párovém programování](/parove-programovani/),
[unit testování](/unit-testing/).

## Refaktoring

Systém není možné kdykoliv refaktorovat. Refaktoring trvá dlouho, je špatně kontrolovatelný a velmi pravděpodobně
rozbije současnou funkcionalitu. To nemusí platit, pokud:

- jste zvyklí na kolektivní vlastnictví kódu, takže není problém dělat změny i v jiných modulech;
- dodržujete *coding standards*, takže nemusíte přeformátovávat kód před refaktoringem (nebo během refaktoringu);
- praktikujete párové programování, takže pravděpodobnost chyby je menší;
- design systému je snadno pochopitelný, což dělá refaktoring snazším;
- máte unit testy, takže si všimnete, pokud jste náhodou něco rozbili;
- děláte *continuous integration*, takže v rámci hodin zjistíte, pokud jste rozbili systém ve větším měřítku;
- jste odpočatí, takže je menší pravděpodobnost, že uděláte chybu.

Možná potom můžete refaktorovat kdykoliv, když uvidíte možnost, jak udělat systém jednodušší a přehlednější.

## Párové programování

Nedává smysl psát všechen produkční kód v párech. Párové programování je příliš pomalé. Pár se spolu nemusí umět
dohodnout, což může vést na spoustu neproduktivních diskuzí. To nemusí platit, pokud:

- *coding standards* omezují počet hloupých konfliktů;
- všichni jsou odpočatí a plní energie, což snižuje počet neproduktivních diskuzí (žádné přesčasy!);
- páry píší společně unit testy, což jim dává šanci se sjednotit v porozumnění právě napsaného kódu před psaním dalšího;
- páry pracují s jednoduchým designem, takže všichni rozumí tomu, co se děje.

Možná potom má smysl psát kód v páru. Lidé pracující sami velmi často program předesignují a častěji udělají nějakou chybu.

## Unit testování

Nemá smysl psát všechny ty testy. Testy zaberou příliš mnoho času. Vývojáři nechtějí psát testy.
To nemusí platit, pokud: 

- design je maximálně jednoduchý, takže psaní testů není obtížné;
- praktikujete párové programování. Nenapadá-li vás žádný další test, vašeho kolegu pravděpodobně napadne. A naopak;
- máte dobrý pocit, když vidíte, že všechny testy prošly;
- váš zákazník má dobrý pocit, když vidí všechny ty testy.

Možná potom má smysl psát automatické testy. Pokud psaní testů vynecháte, refaktoring a párové programování
nebudou nikdy dobře fungovat.

Chcete-li vědět víc, příhlašte se na můj [workshop eXtrémního programování](/workshop-extremniho-programovani).

