---
layout: post
title: Agilita z výprodeje
tags: agile
---

"Já jsem vlastně takovej Agilní nihilista. On možná ten Scrum ani takovou hodnotu nemá..." říká
Martin Jarčík na videu ze setkání [Jak to dělám já](https://jaktodelamja.cz).
Až po roce jsem si uvědomil, jak moc s touto větou souhlasím.

<!--more-->

Donese-li vám někdo jídlo, o kterém bude tvrdit, že je to svíčková, protože obsahuje všechny ingredience
svíčkové, neznamená to, že vám takové jídlo bude chutnat. Raději bych si dal improvizovanou specialitu
šéfkuchaře, který ví, co dělá, a umí dobře uvařit. Se Scrumem je to podobné. Dáte-li dohromady
všechny jeho ingredience, vůbec to neznamená, že se vám výsledek bude líbit, že vás bude bavit a že bude fungovat.

Existují konzultantské společnosti, které mohou vaši firmu dokonce certifikovat, že "provozuje pravý Scrum".
Je to certifikace ingrediencí v trochu jiném světle. Máte-li rádi papíry, budete mít rádi i takový certifikát.

![Sleva 50%](/images/blog/sales-50-off.png)

## Dva díly Agility

### Technická Agilita

Ne s každým kódem můžete naskočit na Agilní vývoj. Bude-li někdo tvrdit, že ano,
že jen stačí provést reorganizaci a změnu procesů, nevěřil bych mu.
Máte-li v codebase 1000 bugů (a v takovém týmu jsem pracoval),
nemůžete dělat Scrum už jen proto, že nejste schopni bug estimovat a
tedy nemůžete měřit velocity týmu. Oprava některých bugů trvá i tři týdny (zažil jsem)
a pak nejste schopni doručit sprint. Navíc práce na bugu se špatně škáluje - je velmi těžké zařídit,
aby na jedné chybě mohl dělat celý tým.

Další kritickou věcí je automatizace. Nemáte-li automatizované testy,
nemůžete dělat release na konci každého sprintu. Takže na konci sprintu nebudete mít použitelný
produkt a opět neděláte Scrum. I kdyby jste provedli kompletní reorganizaci celé firmy,
těch 1000 bugů v codebase pořád zůstane.

Vyřešením problému kvality kódu, automatizace testování, continuous integration / release,
unit testů (které téměř žádný vývojář neumí psát dobře a neví o tom),
vytváření smysluplných metrik a DevOps praktik se dostáváme to sféry Technické Agility.

### Business Agilita

Druhá strana mince je tzv. Business Agilita. Business Agilita bývá definována jako
schopnost umět rychle a flexibilně reagovat na změny trhu a požadavky zákazníka.
Pro mě Business Agilita znamená nenechat development pracovat na zbytečných věcech,
což se z velké části kryje s Lean startup přístupem.

Předpokládejme, že jsme dostali geniální nápad.
Založíme sociální síť založenou čistě na audio nahrávkách. Uživatelé mohou nahrávat krátké,
42 vteřinové zprávy, které potom zveřejní svým kamarádům. Nahrávání funguje z počítače i mobilního telefonu.

Začneme pracovat na nové aplikaci. Po devíti měsících vývoje se rozhodneme síť spustit,
abychom zjistili, jak na ni budou uživatelé reagovat. A uspějeme… Uspějeme jen v tom,
že uvidíme, co se stane. Obrovský příliv nadšených nových uživatelů bych neočekával.

Nestačilo by jen vytvořit úvodní stránku sociální sítě, připravit reklamní video,
v němž vysvětlíme, jak síť funguje, a sledovat, kolik uživatelů se na základě těchto
informací rozhodne do naší aplikace zaregistrovat? Zpětnou vazbu můžeme získat ještě předním,
než napíšeme první řádek kódu! Několik uživatelů sice naštveme, ale všechny ty ušetřené peníze nám to vynahradí.

![Cyklus build-measure-learn](/images/blog/build-measure-learn.png)

Každý kousek nově vytvořeného produktu testujeme na uživatelích (cyklus build-measure-learn).
Když nemáme jednoho zákazníka, kterému bychom ukázali demo jako ve Scrumu,
potřebujeme AB testování a rozhovory s uživateli. Může to být skličující zkušenost,
ale jen tak si můžeme být jisti, že opravdu reagujeme na potřeby skutečného zákazníka.
Naopak stavěním produktu na domněnkách Product Ownera a věštěním z křišťálové
koule jeho nadřízeného se daleko nedostaneme.

Tohle je Business Agilita. Development nedělá zbytečné věci, na potřeby zákazníka se reaguje rychle a svižně.
Někdy je potřeba [udělat Pivot]((https://www.forbes.com/sites/jasonnazar/2013/10/08/14-famous-business-pivots/
už v zaběhnutém byznysu. Trefit milionový trh napoprvé se nepovedlo ani Twitteru,
PayPalu nebo Starbucks.

## Zpět na začátek

Technická i Business Agilita firmě pomůže. Nicméně spojíte-li oba díly skládačky dohromady, stane se malý zázrak.

Technická Agilita bez Business Agility nedává smysl, protože development bude pracovat na zbytečných věcech.
Business Agilita bez té technické také nebude fungovat dobře.
Změny budou trvat dlouho a nezvládne se častý release softwaru (např. už kvůli nárokům na testování).
Teprve oba díly společně mohou vytvořit funkční a extrémně efektivní celek.

Navrhuji vrátit se opět na začátek a tam začít. Vraťme se k nedoceněnému Beckovu Extrémnímu programování
(workshop [Technické praktiky ve Scrumu](/workshop-technicka-agilita/)),
dobrým praktikám vývoje, rychlé zpětné vazbě, těsnějšímu propojení prodeje, podpory, vývoje a marketingu.
Agilita potom přijde sama.
