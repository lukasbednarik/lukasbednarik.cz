---
layout: post
title: Multitasking
tags: efektivita management
---

Při současné práci na dvou a více zcela odlišných projektech dochází k tzv. přepínání
kontextu. Programování je druh činnosti, při které si musí člověk pamatovat milion
věcí: názvy proměnných, datové struktury, důležitá API, názvy funkcí, dokonce i název
adresáře, ve kterém jsou uloženy zdrojové kódy. K tomu všemu musí vývojář vědět, jak
daleko s implementací již pokročil a kam se chce dostat. Pošlete vývojáře na tři týdny
na dovolenou na Maledivy a on všechno zapomene.

Vývojář je tím produktivnější, čím více věcí si zvládne zapamatovat. Pracuje-li na dvou projektech,
je jeho dlouhodobá paměť rozdělena mezi dva projekty a krátkodobá se při přeskoku mezi projekty
vymazává. Tak nějak to alespoň funguje u mě.

Gerald Weinberg ve své knize Quality Software Management navrhuje
následující výpočet velikosti ztráty času při přepínání kontextu.
Hodnoty docela dobře souhlasí s mou vlastní zkušeností.

| Počet souběžných projektů | Ztráta přepínáním kontextu | Čas na jeden projekt |
|:-------------------------:|:--------------------------:|:--------------------:|
|             1             |             0 %            |         100 %        |
|             2             |            20 %            |         40 %         |
|             3             |            40 %            |         20 %         |
|             4             |            60 %            |         10 %         |
|             5             |            75 %            |          5 %         |
|          6 a více         |           náhodná          |        náhodný       |

Jiný druh multitaskingu je přepínání mezi prací na projektu a různými drobnými činnostmi,
jako je například vyřizování emailů. Studie [BBC](http://news.bbc.co.uk/2/hi/uk_news/4471607.stm)
a [Kathy Sierra](http://headrush.typepad.com/creating_passionate_users/2006/03/multitasking_ma.html)
tvrdí, že multitasking nás dělá "hloupějšími" - v tom smyslu, že nejsme schopni odvádět
práci stejně kvalitně, ačkoliv si myslíme opak. Domácí úkol napsaný při sledování
seriálu nebude nikdy tak dobrý, jako domácí úkol vypracovaný při plném soustředění.
Přesto stále věříme tomu, že bude a také že dokážeme vyřizovat emaily při plné účasti na pracovním
meetingu.

Koncept hluboké práce, schopnosti se bez přerušování soustředit na kognitivně náročné úkoly,
popisuje Cal Newport v populární knížce [Hluboká práce](https://www.melvil.cz/kniha-hluboka-prace/).
