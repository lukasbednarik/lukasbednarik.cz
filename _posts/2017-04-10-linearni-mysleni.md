---
layout: post
title: Intuitivní lineární myšlení
tags: principy
---

Lineární myšlení je v lidech velmi hluboce zakořeněno, ale v komplikovaných situacích,
jako je například projektové řízení, nemusí vždy vést na optimální rozhodnutí.
(Cesta do pekla je dlážděna dobrými úmysly.)

Lidská mysl miluje linearitu. Za oteplování atmosféry může CO<sub>2</sub>, za špatnou
atmosféru ve firmě manažeři a sousedovi děti budou mít špatnou práci, protože se špatně učí.

## Lineární myšlení

Smysl pro příčinu a následek je u člověka velmi dobře vyvinutý a v nebezpečných dobách mohl
mít značný význam pro přežití. Pokud jsou v okolí predátoři, je dobré utíkat. Cena za to, že někdy
budeme utíkat zbytečně, je velmi malá v porovnání s případnou ztrátou života.
Pokud někde uslyšíte šustit keře, budete předpokládat, že v nich někdo nebo něco je...

Experimenty s dětmi ve věku 7-8 let ukazují stejný způsob uvažování. Ptáci existují, aby pěkně zpívali;
řeka existuje, aby čluny měly po čem plout. Skály jsou zde proto, aby se zvířata měla na co drápat.
(Zkuste se zeptat doma dětí...)

Smysl pro příčinu a následek používáme intuitivně v každodenním životě i když ne tak jako děti.
Například řekneme-li vývojářům, aby dělali méně bugů, budou dělat méně bugů
a psát kvalitnější software. Jestliže řekneme, že má být projekt hotový v lednu, bude hotový v lednu.
Rozvržení práce je také lineární: pokud vývojář dokončí design, je design hotový a může se začít programovat
(s věcmi jako je změna požadavků nebo chyby v designu se nepočítá).

Letos v zimě se rozšířili zprávy o hrozícím protržení přehrady v Oroville, USA.
Doslova: "...přehrada se může protrhnout během hodiny..." Je-li v přehradě hodně vody
a odpadávají-li z ní kusy betonu, budeme předpokládat, že se přehrada brzy protrhne.
V okolních městech USA bylo zbytečně evakuováno 200 000 lidí. Zpětné vyšetřování ukázalo,
že protržení přehrady nikdy nehrozilo.

Gerald Weinberg pojmenoval tento způsob uvažování Causation Fallacy:
"Každý následek má příčinu a můžeme rozeznat, co je co. (Neplatí!)"

## Systémové myšlení

Fenoménem šedesátých let je systémové myšlení. Ve filozofii systémového myšlení
se lidé pokoušeli popsat obecné nelineární systémy pomocí diagramů.

Příkladem může být velmi zjednodušený model počtu bugů na projektu.
Čím více je v projektu bugů, tím větší je tlak na vývojáře, aby chyby opravovali.
Větší tlak ale může nutit vývojáře spěchat a dělat další chyby.

![]({{ site.url }}/assets/pocet-bugu.png)

Do tohoto diagramu bychom mohli přikreslit další vlivy (například "míra deprese vývojářů"),
ale pro jednoduchou ilustraci to stačí.

Jiným velmi známým příkladem je tzv. [Brooks Law](https://en.wikipedia.org/wiki/Brooks%27s_law).
Brooks Law říká: "Přidáním lidí ke zpožděnému projektu dosáhneme jen ještě většího zpoždění."
Brooks Law je způsobené tím, že přidáním nových lidí na projekt práci z počátku neurychlíme,
protože noví lidé ještě nejsou zaučeni, ale naopak zvýšíme celkové množství práce právě kvůli zaškolování nových
kolegů.

Pravidlo špatného manažera je: *"Pokud něco nefunguje, dělejme toho ještě více!"*

Pokud tedy špatný manažer vidí, že přidání více lidí k projektu nepomohlo, přidá ještě více lidí.

## Teorie chaosu a komplexita

Počáteční nadšení ze systémového myšlení postupně zchladila skutečnost,
že ne všechny systémy lze takto popsat. Náš model na obrázku výše
skvěle poslouží pro zjednodušenou analýzu, nicméně neobsahuje
"náhodné fluktuace" a komplexní chování, které může vést na nepředvídatelnost
celého systému.

![]({{ site.url }}/assets/pocet-bugu-chaos.png)

V devadesátých letech se lidé začaly pokoušet aplikovat teorii komplexity v managementu.
[Stephen Hawking](https://cs.wikipedia.org/wiki/Stephen_Hawking) označil komplexitu za nejdůležitější vědu pro 21. století
a komplexita vedla mj. na několik obecných předpovědí o řízení projektů:

- dlouhodobé plánování není možné,
- dramatické změny se mohou objevit nečekaně,
- komplexní systémy vykazují vzory a krátkodobou předvídatelnost,
- organizace mohou být více inovativní a adaptabilní.


