---
layout: post
title: Lineární myšlení - cesta do pekel
---

Lineární myšlení je v lidech velmi hluboce zakořeněno, avšak při řízení projektu
nám nemusí pomoci (do pekla je cesta dlážděná dobrými úmysly).
Lidská mysl miluje linearitu. Za oteplování atmosféry může CO<sub>2</sub>, za špatnou
atmosféru ve firmě manažeři a sousedovi děti budou mít špatnou práci, protože se špatně učí.

## Lineární myšlení

Smysl pro příčinu a následek je u člověka velmi dobře vyvinutý a v nebezpečných dobách mohl
mít značný význam pro přežití. Pokud jsou v okolí predátoři, je dobré utíkat. Cena za to, že někdy
budeme utíkat zbytečně, je velmi malá v porovnání s případnou ztrátou života.
Pokud někde uslyšíte šustit keře, budete předpokládat, že v nich někdo nebo něco je...

Experimenty s dětmi ve věku 7-8 let ukazují stejný způsob uvažování. Ptáci existují, aby pěkně zpívali;
řeka existuje, aby čluny měly na čem plout a skály jsou tu proto, aby se zvířata měla na co drápat.
(Zkuste se zeptat doma dětí...)

Smysl pro příčinu a následek používáme intuitivně v každodenním životě, i když ne tak jako děti.
Pokud například řekneme vývojářům, aby dělali méně bugů, budou dělat méně bugů
a psát kvalitnější software. Jestliže řekneme, že má být projekt hotový v lednu, bude hotový v lednu.
Rozvržení práce je také lineární: pokud vývojář dokončí design, je design hotový a může se začít programovat
(s věcmi jako změna požadavků nebo chyby v designu se nepočítá).

Letos v zimě se rozšířili zprávy o hrozícím protržení přehrady v Oroville, USA.
Doslova: "...přehrada se může protrhnout během hodiny..." Je-li v přehradě hodně vody
a odpadávají-li z ní kusy betonu, budete předpokládat, že se přehrada brzy protrhne.
V okolních městech USA bylo zbytečně evakuováno 200 000 lidí. Zpětné vyšetřování ukázalo,
že protržení přehrady nikdy nehrozilo.

Gerald Weinberg pojmenoval tento způsob uvažování Causation Fallacy:
"Každý následek má příčinu a můžeme rozeznat, co je co. (Neplatí!)"

## Systémové myšlení

Fenoménem šedesátých let je systémové myšlení. Ve filozofii systémového myšlení
se lidé pokoušeli popsat obecné nelineární systémy pomocí diagramů.

Příkladem může být velmi zjednodušený model počtu bugů na projektu.
Čím více je v projektu bugů, tím je větší tlak na vývojáře, aby chyby opravovali.
Větší tlak ale může nutit vývojáře spěchat a dělat další chyby.

![]({{ site.url }}/assets/pocet-bugu.png)

Do tohoto diagramu bychom mohli přikreslit další vlivy (například "míra deprese vývojářů"),
ale pro jednoduchou ilustraci to stačí.

Jiným velmi známým příkladem je tzv. [Brooks Law](https://en.wikipedia.org/wiki/Brooks%27s_law).
Brooks Law říká: "Přídáním lidí ke zpožděnému projektu dosáhnete ještě většího zpoždění."
Brooks Law je způsobené tím, že přidáním nových lidí na projekt práci z počátku neurychlíme
(noví lidé ještě nejsou zaučeni), ale zvýšíme celkové množství práce kvůli zaškolování nových
kolegů.

Pravidlo špatného manažera je: *"Pokud něco nefunguje, dělejte toho ještě více!"*

Pokud tedy vidíte, že přidání lidí projekt neurychlilo, přidejte ještě více lidí!

## Teorie chaosu a komplexita

Počáteční nadšení ze systémového myšlení postupně zchladila skutečnost,
že ne všechny systémy lze takto popsat. Náš model na obrázku výše
skvěle poslouží pro zjednodušenou analýzu, nicméně neobsahuje
"náhodné fluktuace" a komplexní chování, které může vést na nepředvídatelnost
celého systému.

![]({{ site.url }}/assets/pocet-bugu-chaos.png)

V devadesátých letech se lidé začaly pokoušet aplikovat teorii komplexity v managementu.
[Stephen Hawking](https://cs.wikipedia.org/wiki/Stephen_Hawking) označil komplexitu za nejdůležitější vědu pro 21. století
a komplexita vedla mj. na několik obecných předpovědí v řízení projektů:

- dlouhodobé plánování není možné,
- dramatické změny se mohou objevit nečekaně,
- komplexní systémy vykazují vzory a krátkodobou předvídatelnost,
- organizace mohou být více inovativní a adaptabilní.


