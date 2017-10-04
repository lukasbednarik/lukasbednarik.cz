---
layout: page
title: 'Kniha'
permalink: /knihy
---

## Rebelská historie vývoje softwaru

![Lukáš Bednařík]({{ site.url }}/assets/rebelska-historie-vyvoje-softwaru-cover.png)

### Download

[Stáhnout knihu (formáty PDF a ePub)](/download-rebelska-historie-vyvoje-softwaru)

### Obsah

- [Úvod](#úvod)
- [70\. léta: Krize softwaru](#70-léta-krize-softwaru)
- 70\. léta: Postmoderní management
- Rok 1985–1987: Smrt pacientů ozářením
- 90\. léta: Rozvoj objektově orientovaného programování
- Rok 1999: Mars Climate Orbiter se odmlčel
- Rok 1999: Kniha o extrémním programování
- Rok 2000: Milénium bug
- Rok 2001: Smrt ozářením v Panamě
- Rok 2001: Agilní manifest
- Rok 2005: Pokračování modernizace databáze FBI
- Rok 2011: Dokončení Duke Nukem Forever
- Rok 2011: Peterův princip
- Rok 2012: Vydání příručky Valve
- Rok 2015: Dvě miliardy řádků kódu
- Rok 2030: Budoucnost
- Závěr

### Úvod

> It's fine to celebrate success but it is more important to heed the lessons of failure.
> 
> --- Bill Gates

Je rok 2017, sedíme v Brněnské hospodě a bavíme se s produkt manažerem,
který nedávno odešel z jedné velké nadnárodní firmy. Michal vysvětluje své pohnutky:
„Věřil bys, že někteří lidé mají radost z toho, že mohou druhým škodit? Já jsem jednou
takto nedostal prémie. Kdo je v korporátu déle, má lepší kontakty. Kdo má lepší kontakty,
manipuluje s ostatními lidmi a může být povýšen. Nejhorší na všem je, že ani povýšení ti nepomůže,
aby ses dál nepotkával s blbci.“

Schopnost rozhodování a přesvědčivost, žádoucí vlastnosti klasického managementu,
mohou být jen špatně interpretovaným sklonem k dominanci a manipulaci s lidmi. O tzv.
psychopatech v managementu píše například firemní psycholog Paul Babiak (Babiak and Hare 2007).
Psychopati typicky postrádají empatii a svědomí, jejich chování je egocentrické a velkolepé.
Na druhou stranu někteří psychopati mohou být charismatičtí, mít šarm a schopnost jednat pevně 
a přesvědčivě. V mnoha firmách bývají právě uvedené vlastnosti těmi, které otevírají cestu na
vyšší příčky v kariérním žebříčku.

Z pohledu vývojáře není situace o nic více uspokojivá. Vývoj softwaru se vyznačuje specifikem,
že vývojářskou práci nelze dobře kontrolovat: „Opravdu trvala analýza této chyby dva dny? Byla
chyba opravena rychlým fixem nebo dokonce proběhl refaktoring?“ V prvním případě – oprava rychlým
fixem – řešíme nahlášený problém, takže zákazník může být v danou chvíli spokojen. Ve druhém případě
– kvalitní oprava s refaktoringem – budujeme stabilní a udržovatelný produkt, se kterým může být
zákazník spokojen dlouhodobě. Kontrola kvality řešení je však téměř nemožný úkol – kvůli komplexitě
kódu ve velkých projektech kvalitu často důkladně neposoudí ani samotní kolegové vývojáři.
Nemožnost kontroly vede k nedůvěře managementu, a příliš často se tak setkáváme s firemní kulturou,
ve které se jednoduše vývojářům nevěří. Problém důvěry a týmové spolupráce se stává výzvou, kterou
žádný tým lídr 21. století nemůže nechat bez povšimnutí.

Myšlenkově náročný proces psaní softwaru je komplikován špatným způsobem vedení, nevhodně zvolenou
metodikou, neporozuměním zákazníkovi a v neposlední řadě lidskými vlastnostmi a vztahy. Lidé neznají
způsob, jak psát perfektní kód. Systémy, pyšnící se extrémní bezpečností nebo spolehlivostí, nejsou
ve skutečnosti vůbec bezpečné nebo spolehlivé. Často jde jen o marketing. Nakonec neúspěchem končí
více softwarových projektů, než si drtivá většina jejich manažerů připouští1.

Způsob vývoje softwaru se během posledních desetiletí výrazně změnil. Bohužel lidé jen velmi obtížně
dokážou změnit svůj mentální model (tj. model fungování světa a věcí, na jehož základě dělají svá rozhodnutí).
Svět se mění velmi rychle a lidé stále opakují stejné chyby navzdory tomu, že vědí „jak to dělat správně“.

Nutností psát software bylo lidstvo postaveno před novou výzvu – alespoň do doby, než si vytvoří umělou
inteligenci schopnou i v tomto oboru člověka nahradit.

### 70\. léta: Krize softwaru

První automatické elektronické počítače byly všechny unikátní. Každý typ stroje existoval v jednom
provedení a byl cítit vzrušujícím pachem laboratoře. Postavit tyto stroje vyžadovalo kuráž a člověk
s podivem sledoval, že alespoň někdy fungují. O udržení počítače v provozuschopném stavu se musela starat skupina techniků.

Programování bylo jen okrajovou záležitostí. Programátor byl člověk, který na předpřipravené instrukce aplikoval
několik optimalizací a zapsal je do počítače. Převládal názor, že s rostoucím výkonem počítačů nebudou optimalizace
nutné a programování se stane rutinní záležitostí.

Na přelomu 60. a 70. let se počítače staly dostupné širší veřejnosti. Nižší cena hardwaru byla vykoupena vyšší
obtížností psaní softwaru. Počítač již nebyl deterministický stroj, ale objevila se náhodná I/O přerušení a bylo
nutné vyřešit strategii ukládání dat do několika typů paměti. Kromě těchto komplikací rostly se zvyšujícím se
výkonem také lidské ambice a počítače se používaly na řešení stále složitějších problémů. Netrvalo dlouho a ocitli
jsme se na pokraji „krize softwaru“. Programování se stalo větším problémem než kdy dřív (Dijkstra 1972).

> The major cause of the software crisis is that the machines have become several orders of magnitude more
> powerful! To put it quite bluntly: as long as there were no machines, programming was no problem at all;
> when we had a few weak computers, programming became a mild problem, and now we have gigantic computers,
> programming has become an equally gigantic problem.
> 
> --- Edsger Dijkstra (Dijkstra 1972)

Neefektivní vývoj, chyby v programech a nespokojenost mezi uživateli měly pro mnoho společností katastrofální následky.
Vývoj softwaru v požadované kvalitě a termín byly dva rozměry problému, který nikdo neuměl uspokojivě vyřešit.
Selhání programu v situacích ohrožujících život nezřídka přinášelo i smrt.

Krize se promítla do 80. let a tehdy vznikl termín vaporware. Vaporware označuje software, který byl dodán s obrovským
zpožděním nebo nebyl dokončen vůbec. Vaporware nesouvisí jen s problémem dodržení termínů, ale také s marketingovou
strategií mnoha firem, které ohlašovaly vydání svých produktů předčasně, aby získaly konkurenční výhody.

Předčasné release date může přimět některé zákazníky, aby počkali ještě „pár dní“ na vydání produktu a nekupovali
software od konkurence. Jedna z největších afér se odehrála kolem vydání Windows 1.0. Vše začalo tím, že společnost
VisiCorp stanovila vydání svého grafického prostředí Visi On na jaro 1983. Konkurenční Quarterdeck Office se v dubnu,
před plánovaným vydáním Visi On rozhodl stanovit termín vydání DESQ na listopad 1983. Microsoft odpověděl ohlášením
Windows 1.0 na podzim 1983 a Ovation Technologies následovali oznámením svého kancelářského balíčku Ovation na listopad.
V květnu 1984 byl ze čtyř zmiňovaných produktů dostupný pouze Visi On s téměř ročním zpožděním a jen se dvěma podporovanými
aplikacemi (Shea 1984).

Dnes je praktika záměrného předčasného ohlášení považována v USA za neetickou a je zakázaná. Bohužel předložení přesvědčivých
důkazů, že tato praktika byla použita záměrně, je obtížné a jen velmi málo společností bylo doposud potrestáno.

Můžeme si jen představovat, pod jakým tlakem byli nuceni pracovat vývojáři, aby rychle dokončili zmíněné čtyři produkty,
aniž by věděli, co se doopravdy děje.

Stáhněte si celou knihu a pokračujte ve čtení: [Download](/download-rebelska-historie-vyvoje-softwaru)
