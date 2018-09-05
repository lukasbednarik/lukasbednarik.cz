---
layout: post
title: Agilita z výprodeje
tags: agile
---

"Já jsem vlastně takovej Agilní nihilista. On možná ten Scrum ani takovou hodnotu nemá..." říká
Martin Jarčík na videu ze setkání [Jak to dělám já](https://jaktodelamja.cz/).
Až po roce jsem si uvědomil, jak moc s touto větou souhlasím.

Donese-li vám někdo jídlo, o kterém bude tvrdit, že je to svíčková, protože obsahuje všechny ingredience
svíčkové, neznamená to, že vám takové jídlo bude chutnat. Raději bych si dal improvizovanou specialitu
šéfkuchaře, který ví, co dělá, a umí dobře uvařit. Se Scrumem je to podobné. Dáte-li dohromady
všechny jeho ingredience, vůbec to neznamená, že se vám výsledek bude líbit, že vás bude bavit a že bude fungovat.

Existují konzultantské firmy, které mohou vaši firmu dokonce certifikovat, že "provozuje pravý Scrum".
Je to certifikace ingrediencí v trochu jiném světle. Máte-li rádi papíry, budete mít rádi i takový certifikát.

![Sleva 50%]({{ site.url }}/assets/sales-50-off.png)

Ve skutečnosti všechno začíná u dobrých vývojářských praktik a u podpory managementu.
To, co mě baví, jsou právě tyto praktiky. Podporu managementu si mohou získat vývojáři,
kteří umí vysvětlit, v čem je která praktika přínosná a proč dělají to, co dělají.
Vždyť vývojáři i management mají stejný cíl: Doručit fungující software rychle.

## Dvě strany téže mince

Ne s každým kódem můžete naskočit na Agilní vývoj. Bude-li někdo tvrdit, že ano, že jen stačí provést
reorganizaci a změnu procesů, nevěřil bych mu. Máte-li v codebase 1000 bugů (a v takovém týmu jsem pracoval),
nemůžete dělat Scrum už jen proto, že nejste schopni bug estimovat a tedy nebudete schopni
měřit velocity týmu. Oprava některých bugů může trvat i tři týdny (zažil jsem) a pak nejste shopni doručit
sprint. Navíc práce na bugu se špatně škáluje - je velmi těžké zařídit, aby na jedné chybě mohl dělat celý tým.

Další kritickou věcí je automatizace. Nemáte-li automatizované testy, nemůžete dělat release
na konci každého sprintu. Takže na konci sprintu nebudete mít použitelný produkt a opět neděláte Scrum.
I kdyby jste provedli kompletní reorganizaci celé firmy, těch 1000 bugů v codebase pořád zůstane.

Vyřešením problému kvality kódu, automatizace testování, continuous integration / release, kvalitních unit testů
(které téměř žádný vývojář neumí psát dobře a neví o tom), vytváření smysluplných metrik a DevOps praktik
se dostáváme to sféry technické Agility.

Druhá strana mince je tzv. Business Agilita. Business Agilita bývá definována jako schopnost
umět rychle a flexibilně reagovat na změny trhu a požadavky zákazníka.
Pro mě Business Agilita znamená *nenechat development pracovat na zbytečných věcech*,
což se z velké části kryje s Lean startup přístupem.

Předpokládejme, že jsme dostali geniální nápad. Založíme sociální síť založenou čistě na audio nahrávkách.
Uživatelé mohou nahrávat krátké, 42 vteřinové zprávy, které potom zveřejní ve své sociální síti.
Nahrávání funguje z počítače i mobilního telefonu.

Začneme pracovat na nové aplikaci. Po devíti mesících vývoje se rozhodneme síť zpustit, abychom zjistili,
jak na ni budou uživatelé reagovat. A uspějeme - uspějeme jen v tom, že uvidíme, co se stane.
Obrovský příliv nových nadšených uživatelů bych neočekával.

Nestačilo by jen vytvořit úvodní stránku sociální sítě, připravit reklamní video, v níž vysvětlíme,
jak síť funguje, a sledovat, kolik uživatelů se na základě těchto vstupních informací rozhodne
do naší aplikace přihlásit? Zpětnou vazbu můžeme získat ještě předním, než napíšeme první řádek kódu!
Skutečnost, že několik uživatelů naštveme, nám vynahradí všechny ty ušetřené peníze.

Každý kousek nově vytvořeného produktu testujeme na uživatelích
(cyklus build-measure-learn). Když nemáme jednoho zákazníka,
kterému bychom ukázali demo jako ve Scrumu, potřebujeme AB testování a rohovory s uživateli.
Může to být skličující zkušenost, ale jen tak si můžeme být jisti, že opravdu reagujeme
na potřeby skutečného zákazníka. Naopak stavěním produktu jen na domněnkách Product Ownera
se daleko nedostaneme.

![Sleva 50%]({{ site.url }}/assets/build-measure-learn.png)

Tohle je Business Agilita. Development nedělá zbytečné věci, na potřeby zákazníka se reaguje rychle a svižně.
Málo se mluví o tom, koliv firem ve své existenci
[provedlo Pivot](https://www.forbes.com/sites/jasonnazar/2013/10/08/14-famous-business-pivots/).
Trefit milionový business napoprvé se nepovedlo ani v Twitteru, PayPalu nebo Starbucks.

## Zpět do pralesa

Technická Agilita bez Business Agility nedává smysl, protože development bude pracovat na zbytečných věcech.
Business Agilita bez té technické nebude fungovat dobře, protože změny budou trvat dlouho a
nezvládneme častý release softwaru už kvůli nárokům na testování.
Vraťme se tedy opět na začátek - k nedoceněnému [Extrémnímu programování](/sluzby),
dobrým praktikám vývoje, software craftmanship, rychlé zpětné vazbě a
neustálému zlepšování. Agilita jako celem potom přijde sama.
