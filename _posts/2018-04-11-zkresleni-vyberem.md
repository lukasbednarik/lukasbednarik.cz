---
layout: post
title: Zkresleni výběrem
tags: principy statistika
published: false
---


### Selection bias (česky "výběrové zkreslení", ale "zkreslení výběrem" je lepší)

#### Kupujemem rajčata

Je pondělí ráno a vy jdete si koupit pár rajčat na trh. Zastavíte se u obchodníka, důkladně si prohlédnete tři rajčata a když nejsou pomačkaná a zdají se dostatečně zralá, řeknete, ať vám jich dá kilo.

Nemusí se vám to líbit, ale právě jste provedli něco, čemu se říká "statistical inference". Z vlastností třech rajčat jste zkusili odhadnout kvalitu všech rajčat u obchodníka, který vám z nich náhodně vybere kilo. Statistical inference funguje dobře, pokud je výběr reprezentativního vzorku čistě náhodný.

Představme si novou situaci, kdy za nás tři testovací rajčata vybere obchodník. Protože je to dobrý obchodník, vybere nejkrásnější rajčata z bedýnky. Naivně bychom si mohli myslet, že takto krásná budou všechna rajčata - tomu se říká výběrové zkreslení. Náš úsudek o všech rajčatech je zkreslen špatným výběrem reprezentativního vzorku.

Odhalit zkreslení výběrem nemusí být někdy snadné, protože "nemáme možnost volby". Obchodník může vybrat bedýnku krásných rajčat, která ukazuje na trhu, ale zákazníkům prodává rajčata z pytle pod pultem. Zde si můžeme (mylně) myslet, že všechna rajčata, která obchodník má, jsou krásná.

Podobná je situace, pokud obchodník umístí nejkrásnější rajčata na vrchol bedýnky a my si koupíme celou bedýnku. Z našeho vzorku, což jsou rajčata která vidíme, usuzujeme, že takto budou vypadat rajčata v celé bedýnce. Ve skutečnosti na spod jsou ta rozmačkaná a zhnilá.

#### Anketa marketingového oddělení

Vaše společnost vyvíjí nový produkt BestMessanger, který se má stát nejlepším komunikačním nástrojem na trhu. BestMessanger funguje na platformách Windows a Linux. Jste v beta fázi vývoje a rozhodnete se, že zkusíte oslovit 500 zákazníků, kteří by mohli mít o nový produkt zájem. Pět set potencionálním zákazníkům poskytnete zkušební beta verzi zdarma výměnou za zpětnou vazbu. Vaše zkušební verze zobrazí po třech dnech používání dialogové okno s dotazníkem, ale dotazník lze i přeskočit. Bug lze nahlásit kdykoliv během používání pomocí menu "nápověda".

Používali by jste BestMessanger v praxi?

1. Rozhodně ano. (80%)
2. Možná. (15%)
3. Rozhodně ne. (5%)

Výsledek ankety je povzbudivý. Dodejme, že nebyl nahlášen jediný bug. Podařilo se vytvořit dokonalý software.

A nebo také ne...

I když neúmyslně, účastníci ankety jsou filtrováni. Anketa se zobrazí jen lidem, kteří vydrželi produkt používat déle něž 3 dny. Nespokojení lidé, kteří produkt ihned odinstalovali, nejsou součástí výsledků.

Mohlo se stát, že v instalačním skriptu byla chyba a produkt se nepodařilo na platformě Windows vůbec nainstalovat. Lidé, kteří produkt nenainstalovali, nemohli nahlásit chybu. Pokud se ankety účastnili jen uživatelé s Linux, mohly být výsledky dále zkresleny, protože na Linux existuje méně software a uživatelé jsou obecně tolerantnější v tom, co jsou schopni zvládnout.

#### Náhodný výběr uživatelů

Společnost S-Noir vyvinula nový produkt X-Communicator. Produkt byl původně vyvíjen pro dvě společnosti, které byly z produktu nadšeny. Další 3 zákazníci hodnotily produkt jako "výborný". Nyní má X-Communicator zasáhnout širší trh.

Opět i v tomto případě můžeme narazit na selection bias. Pomocí 5 zákazníků usuzujeme, jak na X-Communicator bude reagovat celý trh. "Early adopters" (uživatelé novinek) jsou tolerantnější k chybám a obvykle produkt používají kvůli několika požadovaným vlastnostem. Větší publikum bude pravděpodobně využívat širší spektrum vlastností a objeví několikanásobně více chyb.

#### Výběr bugů z backlogu

Manažer společnosti Com Soft si všimnul, že se v backlogu nebezpečně kupí bugy. Protože chtěl předejít kolapsu kvality, rozhodl, že všichni vývojáři budou opravovat jen chyby. Za první týden bylo opraveno 20 ze 100 nahlášených chyb a manažer slíbil, že za další měsíc bude opraveno vše.

V tomto případě mohli selection bias do systému zavléci sami vývojáři, kteří si začali vybírat bugy, které lze snadno a rychle opravit. Rozhodně nemusí platit, že za dalších 5 týdnů budou všechny chyby opraveny. (Nyní neuvažujme fault feedback ratio, tj. případ, kdy oprava chyby může způsobit chybu jinde.)

#### Ropná pole

Analogií výběru bugů z backlogy je navrtávání ropných polí v Texasu.
V následujícím grafu ukazuje osa *x* počet pokusných vrtů a osa *y* normované množství objevené ropy.

![images/plot-discovery-rate.png](images/plot_discovery_rate.png)
[citace: Root, Drew: The pattern of petroleum discovery rates]

Z grafu je vidět, že několik málo vrtů vedlo k objevení většiny známé ropy. Lineární aproximace
"uděláme dvojnásobek vrtů, abychom objevili dvojnásobek ropy" rychle přestala fungovat.
Na začátku 20. století se odhadem ropných zásob nikdo nezabýval, protože se zdálo, že ropy
bude navždy dostatek.

David H. Root a Lawrence J. Drew vysvětlují, že velká ložiska jsou objevena první,
protože je nejsnadnější je objevit.
[citace: Root, Drew: The pattern of petroleum discovery rates]
Zkreslení výběrem spočívá v častějším objevování velkých ložisek při prvních
průzkumných vrtech.

Stejnou křivku jako na obrázku výše můžeme zaznametat při objevování počtu bugů v testování.
Na ose *x* je doba testování, na ose *y* počet objevených bugů. Během prvního dne
testování je objeveno nejvýce chyb a množství nově objevených chyb další dny klesá.
Stejným způsobem, jakým bychom odhadovali množství neobjevené ropy, můžeme odhadnout
množství bugů, které zatím unikly objevení v testech.

#### Nedokončené projekty

Manažer společnosti Com Soft si ve své honbě za optimalizací firmy vyžádal statistiku počtu nahlášených bugů na tisíc řádků kódu pro každý projekt.
Výsledky ze všech 150-ti projektů byly vyneseny do histogramu, který vykreslil očekávanou exponenciálně klesající distribuci.

Na meetingu, kde byl histogram prezentován, padl dotaz, jestli jsou v histogramu zakresleny i nedokončené projekty.
Nebyly. Nedokončené projekty byly záměrně vynechány, "protože... no... jsou prostě nedokončené".
Po další diskuzi se ukázalo, že nedokončené projekty jsou zejména tři. Všechny tři patří mezi největší, které firma akceptovala.
Na jednom z nich se stále aktivně pracuje. Závěr mohl být, že společnost Com Soft neumí dodávat velké projekty.
Bohužel, data histogramu, záměrně určitým způsobem vybraná, tomu nenasvědčovala.

Analogie tohoto histogramu může být "dobu práce na projektu dělená prvotním odhadem práce"
nebo "celková délka vývoje". Snadno můžeme udělat stejnou chybu a vynechat nedokončené projekty.

*Nevynechávejte nedokončené projekty ze statistik!*

#### Filtrování informací

Ke zkreslování informací nemusí docházet jenom na grafech, ale zkreslení výběrem
se může projevit i na informacích, které dostáváte od svých kolegů při své každodenní práci.

Předpokládejme, že jste v roli šéfa malého vývojářského týmu. Pokud mezi vámi a týmem
není naprostá důvěra, budou vám vývojáři prezentovat jen určitý druh informací.
Vývojáři:

- mohou mí strach, že budou potrestáni
- nechtějí být sami pověřeni nápravou, už tak mají mnoho práce
- myslí, že k nápravě nedojde
- mají strach o své prémie
- nechtějí naštvat vedení

Informace, které si najdou k vedení cestu, jsou nutně filtrovány. Vedení, což jste vy,
dostává více pozitivních zpráv než negativních. Z pohledu vedení se zoufalá situace
může jevit optimisticky. Často jsem začil, že vývojáři jsou v důsledku velmi deprivováni.

K dalšímu filtrování dochází v tom smyslu, že někteří lidé nejsou vůbec slyšení.
Například vrcholový management musí spoléhat na informace ze středního managementu,
přitom střední management má strach o své prémie.

V jedné firmě, kde jsem pracoval, se nedostatek důvěry vývojářů projevil osobitým způsobem.
Nově nastoupivši scrum master musel na retrospektivách vyřešit desítky problémů typu
"tupé nože v kuchyňce", chybějící sešívačka, nesvítící světlo, špatně chladící lednice...
Scrum master si získal reputaci, že "s problémy opravdu něco dělá", a po čase začal
řešit převážně věci týkající se vývoje.

#### Výhra ve sportce

Pravděpodobnost, že ve Sportce uhodnete 6 čísel z 49 možných je
"jedna ku čtyřicet devět nad šesti"

1 / (49 6) =  1 / 13983816

Průměrně tedy vyhraje jeden ze cca 14 miliónů vsazených losů.

Mám kamaráda, který uznává, že pravděpodobnost 1 : 14 miliónů
je malá, ale přesto "pokaždé někdo vyhraje!"

Zkreslení výběrem je opět v informacích, které se k člověku dostanou.
Všichni se dozvědí o jednom šťastlivci, který vyhrál 15 miliónů,
ale nikdo nemluví o miliónech vsazených losů, které
stály 20Kč (jeden sloupec) a nic nevyhrály. Informace, které se dostanou
k lidem v mass-mediích, jsou silně zkreslené.

Podobné zkreslení vidíme při leteckých neštěstích nebo pokousání žralokem.
Například pravděpodobnost pokousání žralokem je v USA menší, než pravděpodobnost
nechtěného zastřelení kojencem. Přesto se všichni bojí žraloků.

#### Kognitivní bublina

Až budou v České Republice opět volby, možná si přečtete pár článků o svém kandidátovi.
Čemu ale budete věřit? Jistě narazíte na důvody, proč kandidáta volit, i na negativa.
Člověk filtruje informace podle jednoduchého klíče: co podporuje jeho názor, tomu uvěří mnohem snáze
a text přijme jako pravdivý. Naopak text, který je k jeho pohledu nepřátelský, odsoudí
a označí jej za nerelevantní, nesmyslný nebo radikální.
Tato tendence je obzvláště viditelná, když ve volbách soupeří dva přibližně stejně silní kandidáti
(ČR 2013: Miloš Zeman vs. Karel Schwarzenberg, USA 2016: Donald Trump vs. Hillary Clinton).

Facebook i Google vás ve vašem výběru rádi podpoří a začnou preferovat hledání tématicky
zaměřená na stránky, které jste v poslední době navštívili. Možná napíšete někde něco do diskuze,
možná se přidáte k příslušné skupině na Facebooku a nevědomky se začnete obklopovat lidmi,
kteří smýšlejí stejně jako vy. Dostanete se do kognitivní bubliny. Informace, které přijímáte,
jsou silně polarizovány. Budete si jisti, že váš kandidát je jediná racionální volba.

Podobné chování najdeme i ve firmě. Lidé se sdružují kolem společných názorů, například:

- "Ředitel X je blbec."
- "Kdybychom unit-testovali, byli bychom mnohem produktivnější."
- "Dávají nám staré a pomalé počítače. Firma na nás šetří."

#### Shrnutí

Při pozorování nebo analýze musíme uvažovat možnost, že naše data mohou být zkreslena výběrem.
Takováto data nejsou reprezentativní vzhledem k populaci a nejsou z populace vybrána náhodně.
Pokud o zkreslení výběrem víme, můžeme na něj udělat korekci nebo data interpretovat jiným způsobem.