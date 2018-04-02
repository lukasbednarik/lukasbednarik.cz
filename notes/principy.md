
Než začneme měnit systém, změníme naše myšlení.

## Statistika

OODA[cite: https://en.wikipedia.org/wiki/OODA_loop]
(Observe - Orient - Decide - Act, tedy Pozoruj - Zorientuj se - Rozhodni se - Jednej) je rozhodovacím procesem Americké armády
zmiňovaným například v Jeff Sutherland, Scrum [cite]. Ať vědomně či intuitivně, pravděpodobně používáte
některou z obměn tohoto rozhodovacího procesu. Nejtragičtější jsou selhání v prvním kroku, kdy neuspějeme v pozorování.

Spolehlivost pozorování je tématem všech vědeckých prací, které mají co dočinění s experimentem. V této kapitole
si mimo jiné vysvětlíme zkreslení výběrem, korelaci a kauzalitu.

### Systematická chyba

#### Omyl plánování

Auto je rychlejší než kolo. Bohužel, ne pokud jedete ranní kolonou do práce.

Každý den se mohu rozhodnout, jestli pojedu do práce na kole nebo autem.
Cesta autem mi trvá 15 - 40 minut. Pokaždé jsem přehnaně optimistický a se slovy
"dneska určitě nebude kolona" očekávám, že za 20 minut dojedu do práce.

Jeden týden jsem udělal měření. Typická doba jízdy byla 35 minut. Můj odhad 20 minut byl
úplně mimo! Možná si pamatuju pár jízd, kdy se mi to povedlo, ale průměr to není.
Za 35 minut bych mohl být v práci i na kole.

Odhad je "odhad". Jednou vyjde, jednou nevyjde. Problém nastává, je-li odhad *soustavně*
zatížen chybou. V tomto případě jsem dobu jízdy do práce odhadoval špatně každý den,
což mělo za následek volbu jiného dopravního prostředku. Dnes už jezdím na kole.

Neodhadujeme systematicky špatně také dobu práce na projektu? Statistika nás učí,
jak tuto systematickou chybu odhalit a korigovat.

#### Odhad projektu

Odhad práce na projektu 6 týdnů může znamenat hotový projekt za 5 týdnů, někdy za 7 týdnů, ale většinou 6 týdnů. Zřítka se může zkrátit i na 4 týdny nebo prodloužit na 8 týdnů.

Problém opět nastává, pokud se množství práce systematicky podhodnocuje. Například odhad je 4 týdny, ale projekt trvá 6 týdnů. Další projekt je odhadnut na 8 týdnů, ale trvá 12 týdnů. Každý projekt je odhadován na méně, než za jak dlouho je firma schopná jej dodat.

U jednoho projektu to není problém. Bohužel, jakmile začne práce na druhém projektu, nestačí lidské kapacity nebo musí druhý projekt začít až po skončení prvního. V obou případech dochází k dalšímu zpoždění dodávky.

Pracoval jsem ve firmě, kde projektoví manažeři fungovali jako zapisovači. Typický rozhovor projektového manažera s vývojářem vypadal takto:

Manažer: "Jak dlouho vám to ještě zabere?"
Vývojář: "Odhadem 6 týdnů."
Manažer: "Termín je už za 3 týdny. Myslíte, že to stihnete?"
Vývojář: "Nevím. Zatím je to práce na 6 týdnů."
Manažer: "Tak já napíšu 4 týdny. OK?"
Vývojář: "Napište si, co chcete..."

Situaci můžeme vyjádřit matematicky:

čas_dokončení = odhad_práce + náhodná_chyba_odhadu.

Problém nastane u více projektů. Mějmě pro jednoduchost *N* stejných projektů:

N * čas_dokončení = N * odhad_práce + N * náhodná_chyba_odhadu.

Pokud není odhad zatížen systematickou chybou, měla by se chyba odhadu vykrátit (s nějakou pravděpodobností).
Je-li odhad zatížen systematickou chybou, dostaneme

N * čas_dokončení = N * odhad_práce + N * systematická_chyba_odhadu + N * náhodná_chyba_odhadu

Celkové zpožděná na všech projektech je:

celkové_zpoždění = N * systematická_chyba_odhadu

### Korelace a kauzalita

Korelace je vzájemný vztah mezi dvěma procesy nebo veličinami. Změna jedné veličiny způsobí změnu druhé a naopak.
Ukáže-li se mezi dvěma procesy korelace, je možné, že na sobě závisejí. Samotná korelace však
nedovoluje rozhodnout, je-li jeden z procesů příčinou a druhý následkem.
Tj. *Korelace neimplikuje kauzalitu.*

Proč korelace neimplikuje kauzalitu? Nejčastější příčiny jsou:

- obrácená kauzalita
- skrytá proměnná (omitted variable bias)
- náhoda, dva jevy spolu vůbec nesouvisejí

#### Konzumace zmrzliny a počet úmrtí v bazénu

Předpokládejme, že jsme našli korelaci mezi množstvím konzumace zmrzliny a počtem úmrtí v bazénu. Závěr, že konzumace zmrzliny způsobuje utonutí v bazénu, je očividně nepravdivý. Jedno z možných vysvětleních je, že v letních měsících je vyšší konzumace zmrzliny a lidé se zároveň častěji koupou v bazénech. Náš model vynechal vliv teploty ovzduší, která má na obě proměnné zásadní vliv.

Neobsahuje-li naše rovnice některou proměnnou (tzv. skrytá proměnná), připíše se její vliv ostatním členům rovnice. V tomto případě se vliv slunce připíše množství konzumace zmrzliny.

#### Studenti, kteří kouří

Anonymní anketa mezi žáky střední školy našla korelaci: Studenti, kteří kouří, mají horší známky.
Znamená to, že pokud student přestane kouřit, zlepší se mu známky?
Pravděpodobně ne. Opět jsme opomenuli vliv neznámé proměnné,
což by mohla být sociální situace studenta nebo problémy v rodině.

#### Průměr známek

Na MFF fakultě Univerzity Karlovi jsme si mohli volně vybírat z velkého počtu předmětů. Mnoho studentů,
včetně mě, si také zapisovalo další zájmové předměty navíc.

Podmínky pro výplatu studijního stipendia se každý semestr lišily. Typicky se na stipendium dalo dosáhnout s maximálně
dvěma dvojkami. Mohou-li si studenti volit předměty sami, není pravda, že lepší průměr známek znamená lepšího studenta.

Někteří studenti si cíleně zapisovali snažší předměty nebo si nezapsali žádný předmět navíc. V důsledku mohli
za méně času věnovanému studiu dosáhnout na lepší známky. Korelace "lepší student - lepší známky" neimplikuje
kauzalitu.

#### Lidé, kteří převedli půjčku

Každý den v některé z televizních reklam slyšíme: "Lidé, kteří si převedli svoji půjčku k nám, ušetřili desetitisíce."
Jinými slovy, reklama nám vnucuje kauzalitu: "Lidé si převedli půjčku, proto ušetřili."
Nicméně skutečnost je pravděpodobně taková, že "lidé, kteří zjistili, že ušetří, si převedli svoji půjčku."
Kauzalita je v tomto případě obrácená.

Společnosti A a B mohou nabízet výhodněji jiný typ půjčky. Lidé společnosti A si mohli převést půjčku k B a zároveň lidé z B si mohli převést půjčku k A. Všichni mohli ušetřit.

#### Recese a válečný konflikt

Způsobuje ekonomická recese válečný konflikt, nebo lidé v důsledků očekávání brzkého válečného konfliktu změní své chování tak,
že se ekonomika země dostane do recese? Korelace mezi recesí a válečným konfliktem je známá, ale rádi bychom dokázali kauzalitu.
Edward Miguel, autor studie "Economic shocks and civil conflict"[citace], tento problém vyřešil pozoruhodným způsobem.

Edward si ke své studii vybral Africké země silně závislé na zemědělství. Jestliže recesi předcházelo méně srážek v dané oblasti,
nemohla být způsobena chováním lidí, ale skutečným nedostatkem úrody. Data z let 1981 - 1999 ukazují, že ekonomickou
recesi, která vedla k válečnému konfliktu, téměř vždy předcházelo méně srážek. Můžeme tedy konstatovat kauzalitu.
Recese způsobuje válečný konflikt.

Vliv recese na válečný konflikt není významně odlišný v bohatších, demokratičtějších nebo etnicky odlišných zemích.

#### Po čokoládě se hubne

Náhodné korelace využil J. Bohannon ve svém experimentu s novináři.
Bohannon chtěl zjistit, jak novináři ověřují své zdroje, z nichž přebírají podklady
pro články. Bohannon ze sebe udělal ředitele německého institutu pro dietu a zdraví
a publikoval článek *Chocolate with high cocoa content as a weight-loss accelerator*
[cite: Johannes Bohannon, Chocolate with high cocoa content as a weight-loss accelerator].

Článek se přímo nedopouští žádné lži, je ale plný zásadních nedostatků.
Bohannon provedl experiment na 15 lidech rozdělených do tří kontrolních skupin.
Při takto malém množství testovaných subjektů je pravděpodobnost náhodné korelace vysoká.

Bohannon předem neřekl, na základě čeho bude hubnutí měřit. Po dvou dnech statistické analýzy
objevil takovou korelaci, která byla statisticky významná. Je to podobné, jakobychom
házeli kostkou, a skupinu lidí, kterým padla šestka, označili za šťastlivce (obrázená kauzalita).

Studii převzalo mnoho novin, zejména bulvárních plátků.
Bohannon napsal: "Nejvíce mne překvapilo, kolik novin studii převzalo. Asi největší zadostiučinění jsem pocítil, když jsem zmínku zahlédl v magazínu Shape."
[cite: http://technet.idnes.cz/cokolada-hubnuti-socialni-experiment-falesna-studie-pcg-/veda.aspx?c=A160224_161048_veda_pka]

Za úspěšností studie stojí i vlastnost člověka uvěřit informacím, kterým uvěřit chce. Částečně také touha novinářů
i čtenářů po senzaci. Kdo jsou tito anonymní "vědci", kteří jsou ve stovkách článků citováni
s manipulativní větou "vědci zjistili, že..."?

#### Náhodné korelace

Náhodná korelace může vzniknout mezi jevy, které spolu vůbec nesouvisejí.
Například korelace mezi počtem lidí, kteří utonuli pádem do bazénu, a počtem filmů,
ve kterých se objevil Nicolas Cage[cite: http://www.tylervigen.com/spurious-correlations].

![images/spurious-correlation-small.png](images/spurious-correlation-small.png)

Přehlídku náhodných korelací můžete vidět online[cite: http://www.tylervigen.com/spurious-correlations]
nebo v tištěné verzi[cite: Tyler Vigen, Spurious Correlations].

Jak se náhodným korelacím bránit? Modelem. Není vědecké hledat korelace mezi libovolnými dvěma jevy,
ale raději vytvořit dobře podložený model, který potvrdíme pozorováním korelace.

### Reverend Bayes

Bayesova formulka byla objevena v 18. století reverendem Thomas Bayes a jeho přítelem, amatérským matematikem
Richard Price. Bayes si kladl otázku "jak můžeme aktualizovat to, čemu věříme, na základě nově zjištěných zkutečností.
Budete slepě věřit našemu původnímu tvrzení, dokud se nestane očividně nepravdivé, nebo budeme věřit
nové skutečnosti, i když pro ni je zatím jen málo důkazů?"

#### Nepoctivá mince

Předpokládejme, že dostaneme 3 mince. Dvě mince jsou "poctivé" a jedna mince je "cinklá" - stále na ná padá orel.
Vybereme jednu minci. Můžeme předpokládat, že pravděpodobnost, že mince je "cinklá", je 33% (1/3).
Nyní touto mincí třikrát hodíme. Pokaždé padne orel. Bayesova formule umí zodpovědět,
jaká je nyní pravděpodobnost, že mince je cinklá a že to nebyla náhoda. (Stále jsme nevyzkoušeli ostatní mince.)

Náš prvotní odhad, že mince je cinklá, je $P[cinklá] = 1/3$. Tuto pravděpodobnost nazýváme prior probabilidy - pravděpodobnost
před pozorováním nové skutečnosti. Bayesofa formule říká, že pravděpodobnost po pozorování nové zkutečnosti,
tzv. posterior probability je rovna:

1. pravděpodobnosti před pozorováním nové skutečnosti (prior probability)
2. násobené podmíněnou pravděpodobností pozorování, pokud je hypotéza pravdivá
3. dělené pravděpodobností nového skutečnosti

Tedy pravděpodobnost, že mince je cinklá, když jsme třikrát za sebou padl orel:

P[cinklá | 3 krát orel] = P[cinklá] * P[3 krát orel | cinklá] / P[3 krát orel]

Přitom víme, že $P[cinklá] = 1/3$ a pro cinklou minci vždy padne orel, tedy P[3 krát orel | cinklá] = 1.
Zbývá dopočítat pravděpodobnost, že na náhodně vybrané minci padne třikrát orel.

Protože tato náhodně vybraná mince může být cinklá, je
P[3 krát orel] = P[cinklá] * P[3 krát orel] + P[poctivá] * P[3 krát orel] = 1/3 * 1 + 2/3 * (1/2)^3 = 5 / 12

Dosazením do vzorce výše dostaneme
P[cinklá | 3 krát orel] = 4/5.

Díky novému pozorování jsme aktualizovali naši víru ve falešnou minci z pravděpodobnosti 1/3 na 4/5.

Můžeme něco podobného udělat, pokud řídíme projekty a nové pozorování je, že v 1/2 plánovaného času
je hotovo 65% produktu? Ano! K tomuto příkladu se vrátíme o pár stránek dále.

#### Odvození Bayesovi formule

Nechci vás trápit matematickým odvozením, ale můj problém je, že Bayesovu formuli velmi rychle zapomínám.
Toto je způsob, jak si ji můžete snadno zdůvodnit.

Předpokládejme, že chceme vypočítat posterior probability P[v | t] (čteme "v given t", tj. "v dáno t").
Posterior probability je pravděpodobnost, že nastane "v", pokud pozorujeme "t".
Pravděpodobnost, že nastane libovolné "v" a "t" současně označíme jako P[v, t] = (přesněji) P[v průnik t].
Potom:

P[v, t] = P[v | t] * P[t]

což je mimochodem definice podmíněné pravděpodobnosti. Symetricky platí

P[v, t] = P[t | v] * P[v].

Dosazením obou rovnic a do sebe a vydělením P[t] dostaneme Bayesovu formuli:

P[v | t] = P[t | v] * P[v] / P[t]

Zdá se vám tento způsob přemýšlení o statistice nový? Bayesova statistika byla po svém objevení 150 let
taboo a respektovaní statistici se jí vyhýbali. Současně však byla používána v praxi k řešení krizí
s nejistou nebo neúplnou informací. Bayesova formule pomohla při určování autorství dokumentů,
během druhé světové války přispěla k prolomení kódu Enigmy, dnes se používá při
škálování obrázků z nízkého rozlišení, filtrování spamu, určovánání pravděpodobnosti genetických vad a
testování úspěšnosti léků.
[citace: The Theory that Would Not Die: How Bayes' Rule Cracked the Enigma Code, Hunted Down Russian Submarines, & Emerged Triumphant from Two Centuries of Controversy]
Několik lidí se pokusilo s pomocí Bayesovi statistiky vytvořit model sázení na fotbal
[citace: Bayesian Data Analysis strana 13,
Bayesian hierarchical model for the prediction offootball results http://www.statistica.it/gianluca/Research/BaioBlangiardo.pdf,
http://danielweitzenfeld.github.io/passtheroc/blog/2014/10/28/bayes-premier-league/]

Bayesova interpretace statistiky je jen jednou z mnoha možných a je předmětem mnoha filozofických
debat, jestli můžeme o statistice takto vůbec přemýšlet (nejběžnější interpretací statistiky je frekvenční statistika).

TODO: překreslit obrázek.

![bayes-formula.jpg](images/bayes-formula.jpg)

#### Našeptávač Google

Bayesova formule se používá při korekturách textu nebo vyhledávání. Například pokud napíšete do seznam.cz
"wolcvagen" (překvapivě hodně Čechy komolené slovo), seznam.cz automaticky vyhledá "volkswagen"
a zeptát se, jesltli jste mysleli tohle slovo.

Ukážeme si příklad s anglickým vyhledáváním z Bayesian Data Analysis [TODO: citace, strana 8],
kdy máme 3 varianty slov, které uživatel mohl hledat.

Předpokládejme, že jsem zadali do vyhledávače "radom". Zajímá nás pravděpodobnost,
že jste skutečně hledali "radom" (město v Polsku nebo také polská 9mm poloautomatická pistole)
nebo že jste hledali "random" (angl. náhodný) nebo "radon" (vzácký plyn).

Protože nemáme žádný další kontext, dává smysl přiřadit prior probabilities relativní četnosti
těchto slov v nějaké databázi. Takto to udělali výzkumníci z Google:

t	P[v]
random	7.60*10^(-5)
radon	6.05*10^(-6)
radom	3.12*10^(-7)

Tyto pravděpodobnosti bychom mohli normalizovat, aby dávali součet 1. Toto uděláme o pár řádků později.

Google model pro pravopisné chyby a překlemy má i tabulku podmíněných pravděpodobností

P[radom, random]	0.000193
P[radom, radon]	0.000143
P[radom, radom]		0.975

Posterior probability získáme z Bayesovi formule. Víme, že P[v | radom]  je úměrné P[radom | v] * P[v] (vynechali jsme normalizační
faktor P[t]).

P[v | radom] PROPORTIONAL_TO P[radom | v] * P[v]

Uděláme tři výpočty. Pro "v = radom", "v = random", "v = radon". Nejprve vynásobíme prior probability
podmíněnou pravděpodobností. Následně normujeme všechny tři pravděpodobnosti tak, aby dávaly součet 1.

v	PROPORTIONAL_TO P[radom | v] * P[v]	P[v | radom]
random	1.47*10^(-7)	0.325
radon	8.65*10^(-10)	0.002
radom	3.04*10^(-7)	0.673

Je tedy dvakrát pravděpodobnější, že se uživatel nespletl a hledal "radom" než že se jedná o překlep slova "random".
Pravděpodobnost, že uživatel hledal slovo "radon" je jen 0.2%. Pokud bychom měli k dispozici širší kontext
vyhledávání, například že uživatel hledá v chemických textech a tedy slovo "radon" je docela běžné,
mohli bychom pomocí Bayesovi formule dále upravit pravděpodobnosti.

#### Risk projektu

Společnost Web Soap s.r.o má historii 20 malých webových projektů přibližně stejné velikosti.
13 projektů bylo dokončeno v zadaném termínu. Vedoucí týmu, který je nyní
přibližně v polovině času vyhrazenému pro projekt, by chtěl vědět, jaké je riziko
včasného nedodání produktu. Vývojáři hlásí, že projekt je z 64% hotov.

Poznámka: Je nutné zavést míru dokončení projektu. Není podstatné, že vývojáři jsou přehnaně
optimističní a v polovině projektu jsou si vždy jisti, že je projekt "skoro hotový".
Důležitá je konzistence mezi projekty. Jako jiná míra by mohl být použit i
poměr "zavřená_issues / všechna_issues".

Z pohledu Bayesovi statistiky vedoucího zajímá:

P[dodání včas | v 1/2 času hotovo 64%] = P[dodání včas] * P[v 1/2 času hotovo 64% | dodání včas] / P[v 1/2 času hotovo 64%].

Přitom víme, že v 1/2 času bylo 17 / 20 projetů hotovo z alespoň 64%, přitom jen 13 z nich bylo dodáno zákazníkovy v termínu:

- 13 z 20 projektů bylo dokončeno včas: P[dodání včas] = 13 / 20 = 0.65
- Z analýzy všech 20 hotových projektů: P[v 1/2 času hotovo 64% | dodání včas] = 13 / 13 = 1
- Z analýzy všech 20 hotových projektů: P[v 1/2 času hotovo 64%] = 17 / 20 = 0.85

TODO: Obrázek Venn Diagram: "více než 64%: 4", "včas: 0", "včas a více než 64%: 13", "pozdě: 3".

P[dodání včas | v 1/2 času hotovo 64%] = 0.65 * 1 / 0.85 = cca 0.76

Pravděpodobnost včasného dokončení projektu je tedy 76%!

Analogický model lze sestavit pro risk přesáhnutí rozpočtu, odmítnutí zákazníkem, nedostatečné kvality. Detailní analýzu předpovědi vývoje projektu provedl například Paolo Gardoni a spol. [cite: A Probabilistic Framework for Bayesian Adaptive Forecasting of Project Progress]. Rozšířením Bayesovi metody na více proměnných, které spolu navzájem souvisí, vznikne Bayesovská síť [Poznámka: Bayesovská síť je acyklický orientovaný graf, kde každý uzel odpovídá jedné náhodné veličině]. Předpovědi úspěchu projektu na základě této sítě se věnuje například B. C. Kim [cite: FORECASTING PROJECT PROGRESS AND EARLY WARNING OF
PROJECT OVERRUNS WITH PROBABILISTIC METHODS, http://www.dphu.org/uploads/attachements/books/books_5863_0.pdf]

## Fyzika

Chceme-li do managementu přinést nové myšlenky, nutně bychom je měli konfrontovat
s experimentem. Fyzika vždy vynikala ve srovnávání teorie s experimentem
a ve statistickém zpracovávání naměřených dat. I když v této knížce fyzikální zákony
potřebovat nebudeme, fyzika nás na stovkách příkladů učí, jak k pozorovanému
chování vytvořit model a jak tento model ověřit na nové předpovědi.

### Termodynamika

Velikost operačního systému je řádově 10^7 řádků kódu, Google codebase
má řádově 10^9 řádků (rok 2016). V budoucnu očekáváme ještě větší systémy.

Aplikování principů známých z fyziky by mohlo na systémy této velikosti
s jistými omezeními fungovat. Výzkum v této oblasti by mohl přinést lepší
porozumnění tomu, jak se software vytváří, a pomoci rozhodnout, kdy je
levnější nějaký modul přepsat než pokračovat v jeho údržbě.
Analýza kódu by mohla pomoci identifikovat křehká místa,
rozhodnout o úspěšnosti refaktoringu, odhadnout technický dluh na základě
"toků" kódu ve velkém měřítku. Výzkum big data odhaluje nové možnosti
(například levnější nákup letenek, viz český startup skypicker).
Při vývoji software máme k dispozici celou historii ve formě
verzování - vidíme kdo, kdy a jaký kód přidal.

Druhý termodynamický zákon říká, že entropie (populárně: "neuspořádanost") systému s časem roste.
Podobný fenomén pozorujeme také u codebase. Jakmile velikost kódu přesáhne mez,
kdy jej člověk může ještě chápat v celé komplexitě, opouští se od přísného
designu a jak říkájí vývojáři, další kód se "dolepuje".

Ačkoliv se aplikace termodynamiky na codebase přímo nabízí,
současná fyzika neumí zavést termodynamiku bez souřadnic a bez vysvětlování
s pomocí tekutiny, plynu, nádob, pístů. O alternativní zavedení termodynamiky
se pokusil například český profesor Miroslav Holeček [Abstract Thermodynamic],
ale myšlenku nedovedl do konce. Zavedení bezsouřadnicové termodynamiky
se pravděpodobně fyzika v budoucnu nevyhne. Jen se zatím neví, jak to udělat správně
[TODO: citace z Abstract Thermodynamic o odproštění se od prostoru a času].

## Teorie chaosu --- TODO

Největší objev teorie chaosu je existence samotného chaosu... TUTO KAPITOLU udělat jen hodně krátkou s jedním příkladem.

Chaos poprvé objeven Edwardem Lorentzem v 60-tých letech.
Uveden James A. Jorge a jeho spolupracovníky jako nové paradigma (new paradigm).
Dr. Kellert (1993) definuje teorii chaosu jako kvalitativní studium
nestabilního aperiodického chování deterministických nelineárních
dynamických sytémů (strana 2).

Chaos nebyl prvně publikován, jako většina teorií, ale vyvinul se s časem.
Přesně "citlivá závislost na počátečních podmínkách". Tato věta byly používána dříve, než
termín chaos.
...znamená, že systém může být velmi ovlivněn nepartnou změnou počátečních podmínek.
Normálně by tato změna byla tak malá, že by mohla být zanedbána...



Obrázkový průvodce teorií chaosu: https://www.amazon.com/Dynamics-Geometry-Behavior-Ralph-Abraham/dp/0201567172

http://mathworld.wolfram.com/Chaos.html
https://en.wikipedia.org/wiki/Logistic_map


I zdánlivě jednoduché fyzikální modely mohou vést k objevení nových vlastností systému,
například problém tří těles.

Problém tří těles studoval na konci 19. století Henri Poincaré.
U všech těles známe počáteční polohu, rychlost a hmotnost. Řešením Newtonových
pohybových rovnic můžeme spočítat další pohyb těles.
Henri si všimnul, že pohyb je neperiodický, ale tělesa se nevzdalují do nekonečna
ani se soustavně nepřibližují pevnému bodu.

TODO: obrázek jak se tělesa chaoticky kříží

Pohyb tří těles je v obecném případě deterministický (tj. lze předpovědět),
ale "nepravidelný". Právě tato "nepravidelnost" byla jedním z prvních kroků k objevení chaosu.

Podobné chování můžeme vidět například u dvojitého kyvadla, typického představitele chaotického
chování.

TODO: obrázek dvojitého kyvadla.

-----------

Ačkoli chaos nemá v managementu přímou aplikaci, jedná se o pozoruhodný jev, který
společně s teorií komplexity a samoorganizací dotváří chování nejrůznějších systémů.
Je důležité o existenci chaosu alespoň vědět.

Chaotický systém není nahodilý. Právě naopak. Mluvíme-li o chaosu, máme na mysli tzv.
deterministický chaos.


... Chaos totiž nabourává naši představu, že pokud máme systém popsaný rovnicí,
můžeme chování tohoto systému předpovědět na libovolnou dobu dopředu.
Vše je jen otázka výpočetního výkonu.


In particular, a chaotic dynamical system is generally characterized by

1. Having a dense collection of points with periodic orbits,
2. Being sensitive to the initial condition of the system (so that initially nearby points can evolve quickly into very different states), a property sometimes known as the butterfly effect, and



Chaotický systém je... chaos vs nahodilost.

chaos - můžeme předpovědět, že koně zůstanou v ohradě, ale nemůžeme předpovědět, co konkrétně
se bude v ohradě dít a kde budou chodit.

řád - edge of chaos - chaos - náhoda


Trhy jsou jako počasí. V dlohodobém horizontu můžeme předpovídat "letos bude více strážek". market také za 5 let průměr...

### Studium populace --- TODO

V roce 1838 navrhl Pierre-François Vernust tzv. logistický model růstu populace, později
známý jako Vernust-Pearl model. Tento model byl úspěšně aplikován na zvířecí i lidskou populaci.

Vernustův model předpokládá, že rychlost růstu populace je funkcí velikosti populace.
Protože populace sdílí téže zdroje, od určitého okamžiku začne být zdrojů nedostatek a populace začíná klesat.
Jakmile populace dostatečně klesne, může začít opět růst.

Pokud v čase t_0 je velikost populace P_0, potom matematický popis růstu je

(dP(t) / dt) = r * P(t) * (1 - P(t) / K); P(t_0) = P_0

kde K > 0 je tzv. kapacita prostředí, která je určena množstvím zdrojů dostupných v prostředí
a "r" je přirozený růst populace (r = počet_narození - počet_úmrtí).
[citace Introduction to Mathematical Modeling and Chaotic Dynamics, strana 79]

Populace se obvykle vyvíjí spojitě. Například ryby nejprve nakladou jikry a teprve příští rok můžeme pozorovat přírůstek
nové populace. Přepsáním rovnice do diskrétního tvaru dostaneme tzv. logistickou mapu

P(n + 1) = r * P(n) * (1 - P(n) / K); P(n_0) = P_0


TODO: Překreslit.

![logistic-map.gif](images/logistic-map.gif)



Range of r | Dynamic behavior
0 < r <= 1	populace vymře
1 < r <= 3	populace dosáhne stabilní hodnoty
3 < r < 3.44949	oscilace mezi dvěma hodnotami
3.44949... < r < 3.54409... oscilace mezi 4 hodnotami
3 < r < 3.56995... tzv. period doubling cascade
r = 3.56995... nástup chaotického chování
3.56995 < r chaotické chování s ostrůvky stability nebo oscilací
4 < r téměř všechny pořáteční podmínky divergují. Omezení našeho modelu.


Závislost na vstupních podmínkách P_0. Dva obrázky vedle sebe jen s mírně jinou počáteční podmínkou (třeba o 10^(-10)).


V tomto jednoduchém modelu uvažujeme jen existenci jedné populace (chybí například predátor).
Různé varianty uvažují například K(t) závisející na čase nebo K(t) periodické typicky s periodou jednoho roku.

---------

Otázka, jestli se tento typ chaotického růstu populace chování objevuje ve skutečném světě, viz
http://mathforum.org/mathimages/index.php/Logistic_Bifurcation

Does the type of chaotic growth predicted by the logistic map ever actually occur in the natural world? Though the logistic map was created to mimic real population development, this question is still highly controversial among biologists. Several laboratory experiments on microscopic organisms and insects seem to indicate that chaotic population patterns are possible, but none have been conclusively proven to arise spontaneously, outside the lab.

This is in large part due to the high number of variables, many of them difficult to measure, that contribute to population changes when the population in question is not in a controlled setting. These make it almost impossible to determine whether populations that appear to behave chaotically are doing so because of fecundity rates predicted to cause chaos or because of other factors such as disease, drought, or famine. Coral reefs, for example, seem to exhibit chaos in many of the populations they support, but they are also very delicate systems. It is unclear whether this delicacy is a sign of logistic chaos or simply a complex web of other variables making stability look like chaos.

Many scientists argue that, if chaos is possible in nature, it must be incredibly rare and short-lived. Recall that "chaos" in this case means that the population size moves, at some point, to every possible value, and does this in a manner that has no recognizable pattern. A population that has such frequent and erratic dips to low sizes would be particularly susceptible to any natural disasters or drops in levels of resources, most likely quickly leading to its extinction. In this way, some scientists say, natural selection would eliminate any traits that lead to levels of fecundity that cause chaos. This, however, is only a theory; the debate is ongoing.


-----

Tady na Wiki mluví ale o sigmoid curve v adaptaci technologií.

Z Wikipedie https://en.wikipedia.org/wiki/Logistic_function#In_economics_and_sociology:_diffusion_of_innovations
The logistic function can be used to illustrate the progress of the diffusion of an innovation through its life cycle.

In The Laws of Imitation (1890), Gabriel Tarde describes the rise and spread of new ideas through imitative chains. In particular, Tarde identifies three main stages through which innovations spread: the first one corresponds to the difficult beginnings, during which the idea has to struggle within a hostile environment full of opposing habits and beliefs; the second one corresponds to the properly exponential take-off of the idea, with {\displaystyle f(x)=2^{x}} {\displaystyle f(x)=2^{x}}; finally, the third stage is logarithmic, with {\displaystyle f(x)=\log(x)} {\displaystyle f(x)=\log(x)}, and corresponds to the time when the impulse of the idea gradually slows down while, simultaneously new opponent ideas appear. The ensuing situation halts or stabilizes the progress of the innovation, which approaches an asymptote.

In the history of economy, when new products are introduced there is an intense amount of research and development which leads to dramatic improvements in quality and reductions in cost. This leads to a period of rapid industry growth. Some of the more famous examples are: railroads, incandescent light bulbs, electrification, cars and air travel. Eventually, dramatic improvement and cost reduction opportunities are exhausted, the product or process are in widespread use with few remaining potential new customers, and markets become saturated.

Logistic analysis was used in papers by several researchers at the International Institute of Applied Systems Analysis (IIASA). These papers deal with the diffusion of various innovations, infrastructures and energy source substitutions and the role of work in the economy as well as with the long economic cycle. Long economic cycles were investigated by Robert Ayres (1989).[11] Cesare Marchetti published on long economic cycles and on diffusion of innovations.[12][13] Arnulf Grübler’s book (1990) gives a detailed account of the diffusion of infrastructures including canals, railroads, highways and airlines, showing that their diffusion followed logistic shaped curves.[14]




Stejný model můžeme využít například k modelování počtu aktivních projektů v organizaci, kdy
také dochází k "nasycení" organizace projekty a k ukončování projektů. Pokud k ukončování nedochází,
projekty se vlečou - nový model.

jako když třeba firma najímá lidi, pak nestačí prostředky a zase propouští a zase najímá... (hloupý příklad,
ale tak nějak...).

### Předpověď počasí --- TODO

Počasí. Velmi malá odchylka v rovnici vede úplně k odlišnému počasí.
To to matematická vlastnost, nejde o to, že bychom neuměli dobře změřit počáteční podmínky.
Není to dáno detailností modelu, výpočetním výkonem. Studenti meteorologie z toho můžou být smutní - memohou nic zlepšit.

Jak rovnice vznikly zjednodušením rovnic pro tekutinu...

http://mathworld.wolfram.com/LorenzAttractor.html

Vysvětlit atraktor.

Motýlý efekt a krásný obrázek lorenzova attarktoru:
http://rsta.royalsocietypublishing.org/content/369/1956/4705


![lorentz-attractor-small.jpg](images/lorentz-attractor-small.jpg)




## Teorie komplexity --- TODO

Dle S. Hawking je komplexita nejdůležitější věda pro 21. století.

> I think the next [21st] century will be the century of complexity. We have already discovered the basic laws that govern matter and
> understand all the normal situations. We don’t know how the laws fit together, and what happens under extreme conditions. But I
> expect we will find a complete unified theory sometime this century. The is no limit to the complexity that we can build using those
> basic laws.
>
> --- Stephen W. Hawking.


Rozdíl mezi komplexitou a chaosem: komplexita je pro nedeterministické systémy.

Complex systems are highly composite ones, built
up from very large numbers of mutually interacting
subunits (that are often composites themselves)
whose repeated interactions result in rich,
collective behaviour that feeds back into the
behaviour of the individual parts.

Viz: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2465602/pdf/933.pdf  --- mám to staženo v Downloads.

Viz také: System Theories: An Overview of Various System Theories and Its Application in Healthcare  --- také staženo.


Svět kolem nás není náhodný. Kdyby byl, ani bychom neexistovali. Kdybychom existovali a svět byl náhodný,
pravděpodobně bychom byli brzy zabiti nějakou náhodnou událostí...

Wiki - vysvětlit, co to je.
https://en.wikipedia.org/wiki/Complexity_theory_and_organizations
a viz také "Key concepts" a "Implications for organizational management".

Complexity theories:
http://www.innovation.cc/scholarly-style/amagoh3dec2008jag2rev1.pdf

Člověk také není jen soubor buněk. Komplexita = nové složité jevy, když hodně stejných a jednoduchých věcí něco dělá.

Viz prezentace z MIT a stažené PDF Applications and Limitations of Complexity Theory in Organizational Theory and Strategy.
Aplikace z pdf. Důsledky komplexity (viz pdf)
- Long-Term Planning Is Impossible
- Dramatic Change Can Occur Unexpectedly
- Complex Systems Exhibit Patterns and Short-Term Predictability
- Organizations Can Be Tuned to Be More Innovative and Adaptive


Další Aplikace z prezentace:

1.  Transportation Systems
Transport systems are complex networks, internally interconnected at different scales
The system is stochastic by nature and policy-makers introduce strategies that affect the overall behavior of the system

2.  Dynamic Markets and Firms
The market is ever changing, defined by firm interaction
Inside the firm: make boundaries permeable, allow the bottom-up flow of ideas, give up of the idea of equilibrium


Inovation and adaptability maximized at the edge of chaos. Kaufman 1995.
==> organizations can be more inovative.

## Biologie

### Princip samoorganizace --- TODO

organizace jako biologický systém. Nechte systém se samoorganizovat (po té, co se to naučí).
Kniha: Self-Organization in Biological Systems pdf


http://www.scottcamazine.com/Camazine_iWeb/Publications_files/ECS%20SO%20article.pdf
K samoorganizaci je nutná jen lokální informace, není žádný "velitel" [1].
Teoretické a experimentální studie ukazují, že k samoorganizaci
je pořeba jen pár jednoduchých pravidel, která se iterují [1].
Lidský mozek je obecně velmi špatný na předpovídání [1] vlastností těchto
struktur které se skládají z mnoha dílčích elementů (proto mají manažeři pocit,
že ztrácejí kontrolu).


Princip samoorganizace je jedním z příkladů, kdy celek nelze popsat jen pomocí částí.

Aby malá sladkovodní rybka Dánio pruhované (zebřička) získala svůj typický vzhled, musí se každá buňka pigmentu diferencovat, rozmnožit se, zemřít a migrovat. Buňka neví nic o tom, jak vypadá celá rybka, přesto se dostane na správné místo, má správný pigment i funkci.

![zebrafish.jpeg](images/zebrafish.jpeg)

K samoorganizaci stačí jen lokální informace a pár jednoduchých pravidel, centrální řízení neexistuje. Lidský mozek je velmi špatný na předpovídání vlastností samoorganizujících se systémů a možná proto těmto systémům podvědomě nedůvěřujeme.

Některé metodiky řízení (např. scrum) využívají samoorganizace, která se osvědčila v přírodě, a nechávají vývojářskému týmu prostor se svévolně uspořádat. Manažera zajímají jen výkony, které tým podává a které měří, aby poznal, jestli systém funguje. Fungující systém nepotřebuje vnější zásah.

Poznámka: Argumentem, že "váš systém nefunguje a proto je potřeba jej explicitně řídit neuspějete". Vývojáři se musí nejprve naučit se samoorganizovat a zvyknout si, že už je nikdo "nevodí za ručičku".

Kniha: Self-Organization in Biological Systems

TODO: Více rozebrat do detailů. Stejně jako principy ze statistiky princip samoorganizace si zaslouží více pozornosti.

Různí lidé jsou více efektivní v různém prostředí. Tak jako živočichové jsou přizpůsobeni danému prostředí...

Příklad s řetězem mravenců je zatím asi nejlepší... Skvělý článek.
http://www.freshvista.com/2014/natures-self-organizing-patterns/

Bill Graham kromě blogu napsal i knihu:
https://www.amazon.com/Natures-Patterns-Soul-Science-Engaging-ebook/dp/B00CI8IXH4/ref=la_B00CICYZ0E_1_3?s=books&ie=UTF8&qid=1406584231&sr=1-3

Jiný pohled:
https://www.amazon.com/dp/0691116245/ref=rdr_ext_sb_ti_hist_1

Příklady: Hejno ptáků, ryb, mravenci (a řetěz mravenců), včely. Včely mávají  a ochazují úl každá při jiné teplotě.

Pro samoorganizaci ve firmě je nutné budování důvěry a delegování zodpovědnosti. O tom mluví Management 3.0.

Myšlenka: Tým nemůže být zkonstruován, musí vyrůst! (Nelze konstruovat jako
v system thinking).

### Zákazník je virus

Styk se zákazníkem může být nebezpečný pro vaše zdraví. Nebo alespoň pro zdraví vaší organizace.

Větší organizace nápadně připomínají biologický systém. Zaměstnanci jsou buňky, které mají svou specifickou funkci. Systém musí správně pracovat, aby měl dostatek potravy (peněz) a přežil. V této perspektivě jsou zákazníci symbiotičtí paraziti: symbiotičtí, protože žádná organizace nemůže existovat bez zákazníků; paraziti, protože příliš blízký styk s nimi může uvést firmu do stavu podobného horečce.

V ideálním případě volá zákazník při potížích vaše zákaznické oddělení. Pokud se může zákazník dostat blíže, řekněme, že má přímo telefonní kontakt na jednotlivé vývojáře, bude volat přímo vývojářům. Vývojáře samozřejmě problém zajímá a začnou ho řešit (pokud ne, tak zákazník volá častěji, až ho opravdu začnou řešit). Do práce pro zákazníka se může zapojovat stále více lidí, takže nebude čas na vývoj nových věcí a produkt zastará a firma zkrachuje.

Jiná situace může nastat při vývoji nového produktu. Zákazník si určí těsnou deadline, vývojáři začnou psát nekvalitní kód, aby termín stihli, termín se nestihne a další vývoj se špatně navrženým kódem se protahuje. V důsledku spěchu na začátku projektu jsou na konci projektu objevovány nekončící série chyb a projekt není nikdy dokončen.

Cílem zákazníka určitě není položit vaši firmu, ale je nutné umět interakci s ním regulovat skrz předem stanovené lidi.

## Software engineering

### Programování

Je velká výhoda, pokud manažer nebo scrum master neumí programovat a nerozumí technickým detailům.
Jste-li dobrý vývojář, ostatní vývojáři budou věnovat pozornost vašim odborným znalostem a ne
vašemu smyslu pro organizaci a vedení. Pro mnoho lidí je velmi těžké vzdát se programování
a několik mých kolegů absolvovalo cestu "vývojář --> scrum master --> vývojář".

Znal jsem jednoho vedoucího oddělení software, o kterém každý věděl, že kdysi programoval a byl dobrý. Vývojáři se ho chodili ptát, jak řešit některé problémy v kódu. Vedoucí měl několik způsobů, kterými zkoušel diskuze ukončit. Bohužel ani jeden způsob nefungoval. Nejprve jen tiše poslouchal a nepřikyvoval, poté zkusil větu "je čas na kafe" a odešel (bohužel diskutující šel často s ním), nakonec - řešení z nouze - bylo otevření zásuvky a nalití malého panáka slivovice.

Většinou stačí jen řeč těla a pomlky v řeči, aby člověk poznal, že někdo tématu nerozumí nebo ho vodí za nos. Z pohledu manažera maximálně stačí mít přehled o dobrých praktikách v programování (k čemu je testování, design, architektura, ...) a mít k dispozici nějakého zkušeného vývojáře (často v roli architekta nebo software analytika), který je schopen navést tým na správnou cestu.

### Metrika kódu

Protože kvantitativní měření je základem pro všechny disciplíny, pokusili se lidé přenést tato měření i do programování.
Například Maurice Howard Halstead se pokusil objevit měřitelné vlastnosti kódu stejně jako známe měřitelvé vlastnosti
hmoty (hmotnost, objem, tlak plynu, ...) a zavedl Halsteadovu míru komplexity kódu.
"[Software metrics](https://en.wikipedia.org/wiki/Software_metric)" ze zabývá měřením různých vlastností kódu. Nejsnadnější na měření je LoC (Lines of Code = počet řádků kódu), i když extrémně obtížné na interpretaci.

Obtížnost projektu roste nelineárně (možná exponenciálně) s LoC. LoC závisí na programovacím jazyce, způsobu programování a coding standard. Nejlepší programátoři mohou mít dokonce měsíční produkci LoC zápornou. LoC může vypovídat o mnoha věcech, ale také nemusí.

Jinou veličinou je cyklomatická komplexita. Cyklomatická komplexita je míra počtu lineárně nezávislých cest skrz
zdrojový kód programu. Například jednoduchá podmínka "if" vytvoří dvě cesty - pro pravdivou i nepravdivou hodnotu.
Idea za cyklomatickou komplexitou je taková, že komplexní program je těžší na pochopení a udržování, tedy
cílem by mělo být tuto komplexitu snižovat. Na druhou stranu lze tuto míru "ošitit" nejrůznějšími triky,
takže měřená veličina sice klesne, ale kód se tím nezpřehlední.

Kombinací měření různých veličin (počet funkcí, tříd, abstraktních tříd, modulů, položek v databázi...) mohou vznikat další míry
jako je DSQI (design structure quality index) [A.A.Puntambekar (2009). Software Engineering. Technical Publications Pune. ISBN 9788184315592] nebo maintability index.

Connanescence je metrika zavedená Meilir Page-Jones, aby mu podpořila diskuzi o komplexitě programu způsobené
závislostmi mezi moduly. Dva moduly jsou connanescentní, pokud při změně jednoho z nich musí být druhý
modul také modifikován, aby byla zachována konzistence kódu.

### Teorie S

Podle http://davidboje.com/horsesense/psl/pages/postmoderndefined.html
je teorie X a Y nahrazena teorií S.

Proč tedy všude všichni píší o X a Y? Zastavili se v čase?

### Satyr change model

Satyřin model změny a jiné modely změny. Zaměřit se třeba jen na Satyr, ale zmínit, že jich existuje víc.

## Sociologie

### Teorie sociálních sítí

ÚPLNĚ SKVĚLÉ...

https://en.wikipedia.org/wiki/Social_network

Dále viz wiki: Social Network Analysis.

Google for "Wirearchy" - sociální sítě v podnicích.

### Skupinová dynamika --- TODO

https://en.wikipedia.org/wiki/Group_dynamics

Tuckmanův model vývoje skupiny se používá například ve Spotify.
https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development

White-Fairhurst TPR Life-cycle Model - je novější a vychází z Tuckmanova modelu. Uvést jej tady!
http://www.byggai.se/mats/att/Comfort-to-Performance.pdf
https://ronjcharity.wordpress.com/2013/11/11/sharepoint-and-the-white-fairhurst-performance-hypothesis-and-the-tuckman-model/

### Mentální modely

Životní zkušenost většiny profesionálů je charakterizována od studia na univerzitě po start
kariéry úspěchem, ne neúspěchem. Protože tito lidé málokdy selhali, nenaučili se
jak se učit z neúspěchu. Když se věci začnou vyvíjet špatně, zaujmou obranný postoj,
kritizují a hledají vinu u ostatních. Je ironické, že se jejich schopnost učit se neprojeví ve chvíli,
kdy je to nejdůležitější.

-----------

Vraťme se na chvíli k rozhodovacímu procesu *Pozoruj - Zorientuj se - Rozhodni se - Jednej*
ze začátku kapitoly. Druhý krok, orientace, je ovlivněn naší předchozí zkušeností, tradicí,
způsobem přemýšlení. Zorientovat se znamená zasadit naše pozorování do souvislostí.
Vytváříme si mentální model toho, co se děje.

![images/single-loop-learning.png](images/single-loop-learning.png)

TODO: překresil s Observe - Orient - Decide - Act, tj. "Jednej" místo "Real World".

Špatná rozhodnutí umíme napravit na základě pozorování, co se stalo v minulosti (zpětná vazba).
Mnohem obtížnější je opravit chybný mentální model.

> Protože mnoho profesionálů je téměř vždy úspěšných v tom, co dělají,
> zřídka kdy zažijí selhání. A protože tak málo selhávali, nikdy
> se nenaučili jak se se poučit z neúspěchu. Jaklime jejich "single-loop" (viz obrázek)
> strategie učení selže, začnou se bránit, kritizovat a ovniňovat všechny a všude,
> jen ne sami sebe. Zkrátka, odstaví svoji shopnost učit se přesně ve chvíli, kdy
> by ji potřebovali nejvíce.
> --- Chris Argyris, Teaching Smart People How to Learn

Chris Argyris propaguje tzv. double-loop learning. Lidé by se měli kriticky zamýšlet nad svým
vlastním chováním, uvědomit si, jakým způsobem neúmyslně přispěli k problémům
v organizaci, a pak změnit své chování. Je důležité si uvědomit, že proces
řešení problémů může být sám o sobě problémem.

![images/double-loop-learning.png](images/double-loop-learning.png)

Poznámka: Není jasné, je-li lidské uvažování založeno na mentálních modelech, nebo na formálních pravidlech dedukce (O'Brien, 2009), doménově-specifických pravidlech dedukce (Cheng & Holyoak, 2008; Cosmides, 2005), nebo pravděpodobnostech (Oaksford a Chater, 2007).

#### Kritéria hodnocení

Dejte každému prostor aby si určil, podle čeho chce být hodnocen. Jinak to bude kritizovat.

Viz: Chris Argyris, Teaching Smart People How to Learn

#### Nadané děti

Příklad s feedback loop.

https://en.wikipedia.org/wiki/Positive_feedback#In_physiology
In psychology[edit]
Winner (1996) described gifted children as driven by positive feedback loops involving setting their own learning course, this feeding back satisfaction, thus further setting their learning goals to higher levels and so on.[38] Winner termed this positive feedback loop as a "rage to master." Vandervert (2009a, 2009b) proposed that the child prodigy can be explained in terms of a positive feedback loop between the output of thinking/performing in working memory, which then is fed to the cerebellum where it is streamlined, and then fed back to working memory thus steadily increasing the quantitative and qualitative output of working memory.[39][40] Vandervert also argued that this working memory/cerebellar positive feedback loop was responsible for language evolution in working memory.
... Proč něco takového nemůžeme udělat i ve vývoji, kdy má vývojář více volnosti.
SCRUM se o to pokouší...

TODO: Obecně hledej "psychology feedback loop" - je jich tam hodně.

### Smysl práce

Manažeři čtou knihy o tom, jak udělat více bráce a jak být motivování, ale nedochází jim, že tohle by měli
v první řadě umožnit svým zaměstnancům.

Různé motivace viz Management 3.0. Přesto bych to rozdělil jako v přednášce na
job / carrereer / calling.

Kdysi byl jasný smysl práce. Dnes zákazníka nevidíme. Potřebujeme vytvořit feedback
loop a získat zpětnou vazubu od zákazníka.



Teorie X a teorie Y. Můžeme člověka motivovat penězi (viz motivátory v Management 3.0),
ale lepší je motivace z teorie Y, že člověk dělá to, co ho baví. Dát vývojářům smysluplnou
práci na smysluplném produktu.

Ještě existuje teorie S.

## Systémové myšlení --- TODO

Teorie systémů a systémy s pamětí. Viz Management 3.0.

Viz Daniel Aronson: Overview of System Thinking (pdf staženo). Analýza je rozsekání na části, ale systémové myšlení
hledá feedback loops (vztahy) v těchto částech.

Viz stažené pdf: System Theories: An Overview of Various System Theories and Its Application in Healthcare

System thinking vs complexity
System thinking looks at the whole pictures, the interaction and relationships holistically, and involves the sequential alignment of a series of steps in
already identified strategic approaches. Complexity means increased uncertainty in things outside our control and uncertainty in the results of implementing strategies. 

<!-- Na wiki je hodně růzbých příkladů feedback loop. https://en.wikipedia.org/wiki/Feedback#Biology
Určitě zmínit biologii. -->

V žádném modelu nemůžeme zahrnou všechny vlivy, ale obvykle jen to nejdůležitější . Příklady...


TODO Udělat jeden příklad a zbytek nechat do kapitoly Procesy.

### Nelineární efekty ve firmě

Příkladem v managementu může být například Brooks Law [5]. Manažer se může rozhodnout ke zpožděnému projektu přidat více lidí, aby zpoždění dohnal. Tím nechtě zvýší množství práce spojené se zaučováním nových kolegů a projekt nabere ještě větší zpoždění. Manažer se proto může rozhodnout přidat do projektu ještě více lidí!

Gerald Weinberg toto chování nazývá prvním pravidlem špatného managementu: *"Pokud něco nefunguje, dělejte toho ještě více!"*

![feedback-loop-brooks-law.svg](images/feedback-loop-brooks-law.svg)

Jsme tedy obětí těchto cyklů? Ne tak úplně.

Možným řešením může být kontrola způsobu, jakým se budou nový kolegové zaučovat - tak, aby příliš nevytěžovali lidi pracující na projektu. Nebo nové lidi nabírat postupně (odhaduje se, že přidaná zátěž na stávající vývojáře roste přibližně s druhou mocninou nově přidaných lidí).

V některých případech může být řešením vytvoření nové, negativní zpětné vazby, a systém tak stabilizovat (o tom někdy později). Kladnou a zápornou vazbu můžeme ve východní filozofii chápat jako dvě propojené síly, které spolu soupeří. Jako Yin a Yang.

![yin-yang.jpg](images/yin-yang.jpg)

## Filozofie

### Trilemma

Trilemma je obtížná volba ze tří možností. Jsou dvě logicky ekvivaletní formulace trilemma, tedy pokud jsou všechny tři volby chtěné nebo všechny tři volny nežádoucí. Tento termín je odvozen z mnohem staršího termínu "dilemma", tedy volba ze dvou možností.

Trilemma produktového manažera může být následující:

TODO: obrázek překreslit: "rychlé dodání" - "mnoho features" - "levně"

![project-triangle.png](images/project-triangle.png)

Volbu můžeme přeformulovat:

TODO: obrázek: "pomalé dodání" - "málo features" - "drahé"

Z trilema někdy může existovat překvapivé východisko. To, že jste tuto cestu nenašli neznamená, že ji nenajde někdo jiný.
Můj oblíbený příběh: V síni zůstane stát král, kněz, generál a voják. Voják jako jediný má meč. Král říká "zabij ty dva,
já jsem král!". Kněz říká "poslouchej víru, nemůžeš přece zabít kněze. Zabij ty dva.". Generál říká "já jsem tvůj nadřízený, mě musíš poslouchat, zabij ty dva a stanu se králem". Iluze je, že voják nemá možnost optimální volby. Jediné rozřešení je zabít všechny tři a může se stát králem sám.

S manažerskými diagrami je to podobné. Kvalita produktu se tiše předpokládá. Budete-li jako manažer chtít
rychlé dodání a mnoho features za málo peněz, mohou vývojáři najít východisko v nízké kvalitě produktu.
Začnete-li nějakým způsobem měřit kvalitu produktu [poznámka: Co je to kvalita? Kvalitou rozumím splnění něčích požadavků. Kvalita zmanená něco jiného pro zákazníka, pro člověka z marketingu a pro vývojáře. Absence bugů neříká nic o kvalitě produktu (třeba produkt nikdo nevyzkoušel).
Hodně bugů říká jen to, že produkt je nízké kvality (ale zákaznící stále mohou chtít jej používat, pokud např. na trhnu není konkurence).], může být východisko v technickém dluhu, který se projeví v tu nejméně vhodnou
dobu drastickým zpomalením vývoje.

Na honbu za počtem features a rychlým dodáním Gerald Weiberg říká: "Pokud software nemusí fungovat, je možné ho dodat v libovolném termínu." (TODO: Citace).

Stejně tak je iluzorní role manažera jako oběti, která musí splnit všechny požadavky v trilemma. Čas lze získat vyjednávání se zákazníkem, počet features lze upravit vyjednáváním a rozhodutím, které funkce produktu budou dodány jako první. Nakonec můžeme zrychlit a zlevnit vývoj zavedením lepších postupů vývoje (je paradoxní, že "když se spěchá", tak se nejvíce od těchto postupů upouští).

Mírně lepší je koncept projektového diamantu. Často je přínosné brát s sebou tento obrázek na poradu, protože

1. Rychle zjistíte rozdíly v prioritách stakeholderů a sponzorů
2. Váš tým vývojářů může udělat správné rozhodnutí ohledně rozsahu, kvality a časového plánu. (Předejdete paradoxní situaci, kdy na začátku projektu je pro vývojáře prioritou počet features a na konci rychlé dodání. Kompetentní vývojáři jsou schopni udělat kompetenstní rozhodnutí.)

![project-diamond.png](images/project-diamond.png)

TODO: Oprázek překreslit. Převzat z: http://www.betterprojects.net/2009/03/it-used-to-be-iron-triangle.html
Ekvivaletní obrázek je v Management 3.0, Jurgen Appelo, strana 186 (functionality - time - quality - resources).

## Ekonomie

### Paretův princip

Paretův princip nebo Paretovo pravidlo nebo též pravidlo 80/20 bylo formulováno na základě pozorování italského ekonoma Vilfreda Pareta. Podle Pareta pramení 80 % důsledků (např. zisk nebo počet zmetků) z 20 % příčin (např. produkty nebo celková výroba). Příklady Paretova principu lze vysledovat v různých oblastech života a lidské činnosti (např. ekonomika, kvalita výroby, životní každodennost aj.).[1]

V praxi bývá snahou odhalit ono malé spektrum příčin, které tak významně ovlivňuje celkový výsledek. Tento proces hledání se nazývá Paretova analýza.

80% bugů ve 20% kódu - nedivil bych se.

Existuje také ještě princip s rozdělením 90/10.

## Teorie her

### K čemu je teorie her

Teorie her je disciplína aplikované matematiky, která analyzuje široké spektrum konfliktních rozhodovacích situací, které mohou nastat kdekoliv, kde dochází ke střetu zájmů. Teorie her se uplatňuje v mnoha oborech přes politologii, sociologii, evoluční biologii až například pro počítačové vědy a filozofii. O významnosti teorie her svědčí například množství nobelových cen udělených za ekonomii
(1994 - John C. Harsanyi, John F. Nash Jr., Reinhard Selten; 2005 - Robert J. Aumann, Thomas C.
Schelling; 2007 - Leonid Hurwicz, Eric S. Maskin, Roger B. Myerson; 2012 - Alvin E.
Roth, Lloyd S. Shapley; 2014 - Jean Tirole).

"Hra" je situace charakterizována třemi komponentami:

1. Hráči - skupinou lidí hrajících hru
2. Strategie hráče - množina tahů, které hráč může udělat
3. Zisk - zisk každého hráče v závislosti na provedených tazích

V této hře závisí akce každého hráče na jednání ostatních. Teorie her studuje,
jak mohou hráči optimalizovat svá rozhodnutí a jak najít nejlepší strategii
pro daného hráče.

Znalost teorie her je přínosná ze dvou důvodů

1. pomůže nám rozpoznat strategické situace
2. pomůže nám dělat lepší rozhodnutí

V některých případech můžeme změnit pravidla hry a například patovou
situaci transformovat ke vzájemnému prospěchu nebo dosáhnout požadovaného jednání protistrany.

Poznámka pod čarou: Kombinací teorie her a Bayesovského přístupu definoval Johna C. Harsanyi tzv. Bayesovské hry, tedy hry s neúplnými informacemi, které jsou blíže praktické zkušenosti.

### Nashova rovnováha

Začneme barovou scénou z filmu Čistá Duše (2001) podle stejnojmenné knižní předlohy o životě amerického matematika Johna Nashe. Ty a tví tři přátelé jste v baru, když vcházejí čtyři brunety a jedna blondýnka.
Přirozeně, každý chce mluvit s blondýnkou, ale pokud s ní začne hovor více než jeden člověk, vytočí ji to a
ztratí zájem. V této chvíli bude pozdě mluvit s brunetkou, protože "nikdo nechce být až druhá možnost".
Kdokoliv začne jako první mluvit s brunetkou, vyhraje.

Kdyby všichni začali mluvit s brunetkami, mohl by si každý užít skvělou noc. Problém je s blondýnou.
Blondýnka všechny přitahuje nejvíc a pokud dojde ke střetnují s tvými kamarády, může každý
odcházet domů sám. Jaká je nejlepší strategie?

Definice: Předpokládáme, že každý hráč zná strategie všech ostatních hráčů.
Nashova rovnováha je situace, kdy žádný hráč nemůže
svoji situaci zlepšit jednostrannou změnou své strategie.

Představme si, že hráči navzájem znají svoje strategie. Pak se každý hráč může zeptat sám sebe: "Pokud znám strategie ostatních a budu je brát za pevně dané, mohu změnou mé akce získat nějaký prospěch?". Pokud bude odpovědí "ano", pak takováto situace není Nashovou rovnováhou. Pokud ale všichni hráči odpoví "ne" pak je toto řešení stabilním a označujeme ho za Nashovu rovnováhu. Nashovu rovnováhu tedy můžeme označit jako nejlepší možnou reakci na strategie ostatních.
[cite: Wiki Nashova rovnováha]
[cite: VON AHN, Luis. Preliminaries of Game Theory [online]. [cit. 2008-11-07]]

Ve filmu Čistá Duše barovou situaci analyzuje John Nash. Josh svým kamarádům poradí, aby všichni začali
mluvit s brunetkami, pak ale dostane nápad a vyběhne z baru pryč.

TODO: V knize Joy of Game Theory se analyzuje jaké máme možnosti. Jít pro blondýnu a co to znamená. Nebo jít pro brunetu? TODO: Chceme to rozebrat detailněji?

Situace, kdy každý začne mluvit s brunetkou není Nashovou rovnováhou, protože každý hráč
může od strategie upustit a začít mluvit s blondýnkou. Pokud ale jeden hráč bude mluvit
s blondýnkou a ostatní tři s brunetkou, situace bude Nashovou rovnováhou. Žádný hráč nemůže
svoji situaci nijak zlepšit.

V životě má většinou výhodu ten, kdo radí. Praktická rada ostatním by byla, že každý musí jít po brunetce.
Poradce sám se vlastní rady držet nebude a nechá si blondýnu. Naštestí, ne všechny Nashovy
rovnováhy jsou nespravedlivé.
[cite: Joy of Game Theory: Strana 46]

### Benzinky --- TODO

Příklad s benzinkami a klustrováním.

### Jak rozdělit sodu?

Krásným příkladem rozdělování prostředků z knihy Joy of Game Theory
[cite: The Joy of Game Theory: An Introduction to Strategic Thinking. Page 34.]
je rozdělování sody.

Matka každý víkend koupí plechovku sody svým třem synům. Protože soda je
drahá (alespoň v našem příkladu), matka koupí jen jednu plechovku a požádá jednoho syna, aby ji
pro všechny rozlil do sklenic. Všichni synové se na začátku snažili sodu rozdělovat spravedlivě,
ale poté, co jeden z nich - snad omylem - do jedné sklenice nalil více sody, začali se bratři šidit.
Kdo rozléval sodu, vždy nalil trochu víc sobě.

Než budete číst dál, zamyslete se, jakým způsobem by jste zajistli, aby vždy bylo rozdělení
spravedlivé. Poznámka: Jde o to definovat pravidla "hry", ne například měnit velkost sklenic.

Uvedená úloha je příkladem tzv. "mechanism design", což je oblast mezi ekonomií a teorií her,
která analyzuje způsoby, kterými trhy nebo instituce rozdělují své prostředky.

TODO: TOHLE PŘIPOMÍNÁ DAO SPOLEČNOSTI (bitcoin, https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)

Matka úlohu vyřešila pravidlem, že "kdo rozděluje sodu, vybírá si sklenici jako poslední."
Od té doby se syn, který sodu rozlévá, snaží do všech sklenic nalít stejné množství z obavy,
že by na něj zbyla sklenice s nejméně nápoje.

Mechanismus rozlévání sody má širší aplikace. Například v osobním životě bychom se měli chovat
zodpovědně a část vydělaných peněz odkládat na důchod.
Dle pravidla "kdo rozděluje, bere poslední"
bychom se měli nejprve měli zamyslet nad tím, kolik peněz chceme mít v důchodě,
a odpovídající částku si spořit ze svého současného platu.
Alternativní metoda - odkládat si tolik pěněž, kolik je nyní možné, není správná
z pohledu teorie her. V důchodu bychom mohli přijít zkrátka.

V diskuzi pomíjím fakt, že spousta lidí žije na hranici
živodního minima a odkládat bokem dostatek peněz.

Uvažujme firmu, kde je výše bonusu vázána na dokončené úkoly. Kritické rozhodnutí je,
jaký bonus přiřadit kterému úkolu. Bude-li toto rozhodování ponecháno týmu vývojářů,
můžeme použít pravidlo "kdo přiřazuje peníze úkolům, vybírá si úkol jako poslední".
Tímto způsobem můžeme očekávat maximálně spravedlivé rozdělení z pohledu člověka,
který rozděloval. Není důvod, proč by příště nemohl rozdělovat i někdo jiný.

### Dominovaná strategie --- TODO

Stop taxíku a křičící žena. Dominated strategy. Stejné jako křičící manager.
Příklad s křičícím v call centrum je lepší příklad než taxík.

Jiný pohled: Pokud nevyužijeme game theory, ale použijeme přímý rozkaz,
lidé se ve velkém měřítku mohou začít chovat způsobem, kterým bychom to nepředpokládali.

TODO: vysvětlit focal point.

### Opuštění operátora

Deset let jsem využíval stejný tarif u mobilního operátora. Operátor nabízel 40 minut volání a 100 SMS za 200 Kč.
Když jsem operátorovi sdělil, že s jeho podmínkami nejsem spokojen a chci odejít, nechal mě.
Situace, kdy zákazník hrozí odchodem, byla vzhledem k situaci na trhu běžná. Všichni tuzemští operátoři drželi ceny
jako přes kopírák, takže hrozba odchodu nebyla věrohodná - jiní operátoři mají přece stejné ceny.
Situace se změnila, když jsem zadal číslo k převodu a po dvou týdenní tahanici zbýval poslední pokyn, který by dokončil
převod mého čísla k jinému operátorovi. Hrozba odchodu se stala věrohodnou. Operátor mi nabídl 400 minut volání
za stejných podmínek.

Z pohledu teorie her se jedná o změnu pravidel u hry, kterou nemůžete vyhrát. V mém případě šlo o vyjednávání
o nabídce operátora. Hrozna může být dvojího druhu: věrohodná a nevěrohodná. Při vyjednávání můžete své
hrozbě dodat na věrohodnosti, nebo najít novou věrohodnější hrozbu.


--- TODO

Jiný příklad je případ zaměstnankyně, která vyzkoušela snad všechny prostředky, jak si říci o zvednutí platu.
Přidání platu - až když žena onemocněla, chaos v kanceláři. Ukázalo se, jak je důležitá nebo jak jsou ostatní nekompetentní.

### Předčasné ohlášení

Předčasné release date může přinést konkurenční výhodu, protože uživatelé se mohou rozhodnout
počkat na vydání vašeho software.
Například v listopadu 1982 ohlásila společnost VisiCorp vydání svého grafického prostředí Visi On na jaro 1983.
V důsledku tohoto se Quarterdeck Office v dubnu 1983 rozhodl stanovit termín vydání DESQ na listopad 1983.
Microsof odpověděl ohlášením Windows 1.0 na podzim 1983 a Ovation Technologies následovali ohlášením
Ovation na listopad. V květnu 1984 byl ze čtyř zmiňovaných produktů dostupný pouze Visi On s téměř
ročním zpožděním a jen se dvěma podporovanými aplikacemi.
[Shea, Tom (7 May 1984). "Developers Unveil 'Vaporware'". InfoWorld. InfoWorld Media Group. 6 (19): 48. ISSN 0199-6649. Retrieved 2010-04-13]

Praktika záměrného předčasného ohlášení je v USA považována za neetickou a je zakázána.
Jen málo společností bylo soudně usvědčeno, protože je těžké dodat přesvědčivé důkazy.

Vzkaz pro vývojáře: Pokud vaše společnost předčasně ohlásí software, zřejmě se o tom nedozvíte.
Nemá smysl trápit se tím, že se ohlášené datum vydání nestíháte.

### Proč má kolega lepší práci --- TODO

Získání lepší práce pomocí limiting options. Popsáno v Joy of Game Theory.

Nebo kdyz chce sef mi zrusit dovolenou reknu, ze uz mam letenky a hotel ve Spanelsku.

### Vůdcovo dilemma --- TODO

Vůdce se často musí rozhodnout mezi postupem


Popsáno v Joy of Game Theory jako Leaders Dilemma.

Analogií může být proces s málo pravidly. Vývojáři přesně nevědí, dle čeho jsou hodnoce, tedy dělají všechno tak, aby všechny procesy nějak fungovaly.


Viz strana 121.
Leaders often have to decide between great outcomes that might backfire and mediocre
ones that work for sure. It is what I call “The Leader's Dilemma.” 
The issue stems in large part because the game has a fixed order. Because the leader has
to act first, followers have time to observe flaws and make criticisms. Often, the good
outcomes need cooperation so they are risky and less likely to win out. In turn, safer but
mediocre outcomes rise to the top. 
Why can't we all just get along? 
Well, it turns out we sort of can. Here is an idea: if sequential play is the main cause of the
problem, why not change that feature? Why not change the game into simultaneous play
where players have to guess and commit to actions? Perhaps if all players moved without
full knowledge, they can all be made better off on average. Indeed, this turns out to be a
valuable option. 
...Příklad náhodným měněním strategie.

### Rozdělování prémií

Do loňského roku vyplácela firma Zero Byte Software svým zaměstrancům prémie
na základě zisku firmy. Byl-li dosažený zisk na konci roku vyšší než očekávaný,
byly vyplaceny prémie ve stanovené výši.

Vývojáři byli přesvědčeni, že nemohou vyplácení prémií ovlivnit. Jaký je vliv
jednoho člověka na společnost o 240 lidech?
(Stejný je případ, kdy lidé nechodí k volbám. Volební účast do parlamentních voleb
byla 60% v roce 2013.)

Letošní rok došlo ke změně. Prémie budou rozděleny pouze mezi ty vývojáře,
kteří budou výborně hodnoceni od svého nadřízeného.
Kdyby dostal výborné hodnocení pouze jeden vývojář, získal by všechny prémie
určené pro vývoj.

Vtip celého systému je v tom, že výborné hodnocení se budou snažit získat všichni.
Toto také vedení Zero Byte Software očekává. Jestliže získají výborné hodnocení
všichni vývojáři, není takové hodnocení žádná výhoda. Firmě se nezmění množství
rozdělených peněz a vývojářům se nezmění prémie.

Z pohledu teorie her se jedná o stejný princip jako v některých "vědomostních soutěžích".
Pošlete SMS se správnou odpovědí a jste zařazeni do slosování.
Protože každá SMS je zpoplatněna, organizátoři se snaží přimět co nejvíce diváků, aby SMS poslali.
Položí tedy jednoduchou otázku, například: "Které dvě řeky
mají soutok v Českých Budějovicích?". Protože odpověď na otázku všichni znají (nebo si ji snadno zjistí), není
znalost odpovědi konkurenční výhodou.

## nějaké poznámky --- TODO

Scotty principle: http://www.urbandictionary.com/define.php?term=Scotty%20Principle

# Procesy

Problém v ERA i iXperta: Chození marketingu přímo za vývojáři a ptaní se,
kdy to bude. Vývojáře zajímavá feature samozřejmě zajímá a začnou na ní pracovat
mimo svůj plán. To způsobí zdržení očekávaného úkolu.

## Model bugů

Některé zpětné vazby (spojit do jednoho diagramu)!

Počet bugů ->  pressure to fix -> higher FFR -> more bad fixes

pressure to fix -> deprese -> more bad fixes

bad fixes -> design debt -> bigger fix time -> presure to fix

## Omyl řízení

NE: Kontroller, který nemá mnoho práce, je špatný kontroller.
NE: Kontroller, který má hodně práce, je dobrý kontroler.

Vysvětlit na příkladu. Třeba code review odhaluje jen minimum chyb a vývoj
software funguje dobře. Mohlo by se zdát, že můžeme code review úplně odstranit.
Odstranění code review se ale projeví negativně a chyby se začnou objevovot.

Code review:
- motivating people to work with more precision
- raising awareness of the importance of quality work
- teaching people how to find faults before coming to reviews
- detecting indicators of poor work, before that work actually produces faults
- teaching people to prevent faults by using good techniques they see in reviews


Lepší příklad - podobně jako code review: policista měří rychlost aut na dálnici
a auta jezdí pomalu. Zdá se, že policista je zde zbytečný. Pokud ale odejde,
auta zrychlí.

TODO Udělat diagram s code review a vysvětlit...

Vicous cycle. Manažer má moc práce a proto musí pracovat ještě více a nedělá dobrá rozhodnutí.
Viz Weinberg, Zmiňuje to i Carnall

Ukázat, že zpětná vazba záčasto závisí jen na malých detailech. Např. jestli PO
kontroluje při schvalování commitu i kvalitu kódu. Tyto podměty by měly vycházet přímo
z týmu, aby si za nimi tým stál.

## PO

Jak rozloží firmu produkťák, který je povýšen za představení nějakého návrhu, ale už jej nemusí
realizovat.

## Double loop learning

Single loop vs double loop leargnin (upravujeme mental model).
https://en.wikipedia.org/wiki/Double-loop_learning


### Dobrý a špatný vývojář

Dobrý vývojář má na výběr psát kvalitní nebo špatný kód. Psaní kvalitního kódu je náročnější - ne časově, ale na soustředění a invenci.

Špatný vývojář umí psát jen špatný kód. Navíc je nepoučitelný, takže lepšímu vývojáři se nepodaří ho nic naučit (situace v ERA).

Investice:
- špatný kód: 1
- kvalitní kód: 3

Špatný vývojář ale dobrý kód kazí svým špatným. Tabulka celkového zisku je náledující:

|              | špatný kód | kvalitní kód |
|--------------|------------|--------------|
| špatný kód   | 1          | 3            |
| kvalitní kód | 3          | 6            |

Průměrný zisk na programátora pro "špatný + kvalitní kód" je 3 / 2 = 1,5. Tedy dobrý programátor dostane méně, než do systému vložil. Špatný vice, než do systému vložil.

Dobry programator muze byt deprimovan a jeho nejlepsi odpoved je hrat 1 a setrit vlastni kapacitu... pokud nezmane druheho cloveka je nejlepsi psat shit.

Toto se často stává, pokud jsou oba hodnoceni stejně (stejná pozice i finance).
"Proč se zbytečně snažit?"

Odtud také plyne, jak je důležité mít kvalitní lidi v týmu. A pokud je máme, tak jim věřit.

### Optimální pořadí implementace

Řekněme, že product owner chce naimplementovat 2 feature. Vývojář nabídne, že pokud udělá nejdříve refactoring, bude implementace rychlejší. Možnosti jsou tyto:

1. feature A (3 dny) ---> feature B (3 dny)
2. feature A (3 dny) ---> feature B (3 dny) ---> refactoring (5 dní)
3. refactoring (4 dny) ---> feature A (2 dny) ---> feature B (2 dny)


Ve 2. případě implementace nových věcí ztíží refactoring, který pak trvá ještě déle. Naopak refaktoring před další implementací usnadní tuto implementaci.

Pokud vývojář trvá na refaktoringu, rozhodne se obvykle product owner pro 2. (refaktoring odloží až bude čas). Pokud vývojář netrvá na refaktoringu, rozhodne se pro 1.

Tento obrázek dává smysl, pokud by pak nepřišlo hlášení bugů. Předpokládejme N = 10 bugů, kterým šlo refaktoringem předejít. Řešení každého bugu trvá 1/2 dne.
(V praxi jsou to často malé opravy, na které se však dříve či později přijde a uživatel je nahlásí. Například špatná chybová zpráva, neověřená nulová / chybová hodnota, dvě stejné věci řešeny pokaždé jinak takže se někdy jedna z nich chová pro uživatele divně, ...)

K možnostem výše doplníme:

1. (1) ---> 10 bugů (5 dní)
2. (2) ---> nic
3. (3) ---> nic

Celková doba (doba, kterou společnost vývojáři zaplatí za práci na projektu)

1. 11 dní
2. 11 dní
3. 8 dní (rychlejší o 27%)

Není divu, že vývojář, který toto vidí, může být zoufalý, protože kdyby byla práce jen na něm, mohl 3 dny strávit na dovolené v horách.

Místo dnů doplňte u většího projektu měsíce.

Tento model ovšem uvažuje, že vývojář ví, co dělá, a dokáže kvalitu kódu po refaktoringu uchovat i po implementování dalších featur (je dobré, ale ne nutné, pokud předem ví, co bude požadováno za features).

Pokud je vývojář špatný, nedokáže první refaktoring udělat úspěšně. Implementace se urychlí jen částečně a zmizí jen část bugů.

refactoring (4 dny) ---> feature A (2 dny) ---> feature B (3 dny) ---> 7 bugů (7/2 dní)

Celkem 12,5 dní. Protože produkt owner svým vývojářům nevěří, nezvolí variantu 3., která by mohla být rychlejší (8 dní).

## Scrum

Analyzovat scum (Jeff Sutherland, Scrum) na diagramech system thinking.

## Jak korporát dokáže zabavit sám sebe

Příkazy managementu se mění každý půlrok: pracujte na ICE, rozhodně nepracujte na ICE, pracujte na ICE, nepracujte na ICE, ...

Výsledkem je nedefinovaný stav dokončení ICE. Na nedokončený ICE jsou už reportovány bugy.

Overhead s reportováním bugů, přitom to nemá smysl pro nedokončenou feature.


## 500 bug backlog

Rozbor příkladu, jak pracovat s týmem, jehož backlog obsahuje hlavně sustaining (500 bugs).
Jaké jsou problémy scrumu (stručně) a jak to řeší kanban.
V našem příkladu zvládne vývojář za sprint (14 dní) vyřešit v průměru 2 issues.

Možnosti vedení:
1) kanban
2) samoorganizace. (Například jako v open source???)
Každý bug je pro začátek ohodnocen řekněme 2 story pointy.
Vývojář si může vybrat libovolný bug z backlogu. Product Owner přidává
story pointy těm bugům, na kterých chce, aby se pracovalo. Vývojář, který
vidí, že může získat mnoho story pointů (SP) vyřešením jednoduchého problému
začně na tomto problému pracovat. Pro vývojáře je to "snadná kořist".
Důležité: Vývojáři jsou (finančně) hodnoceni dle odvedené práce v SP
plus mají fixní část mzdy.
Výhody: každý může pracovat, jak moc mu to zrovna vyhovuje.
Každý si bere věci, které jsou snadné pro něj - tj. optimální rozložení kapacit / odbornosti.

## Team building vs. prémie

Proplacení team buildingových hospod vs. prémie pro zaměstnance na konci roku.
Každý zaměstnanec chce samozřejmě prémie. Prémie se rozdávají za splnění očekávaného ročního obratu.
Nicméně pro zaměstnance je tohle magické číslo, které nemůže nijak ovlivnit.
Naproti tomu team buildingové hospody mohou přispět k pohodě v práci a k motivaci lidí, tedy
i k vyšším výkonům. Pro společnost jsou výhodnější. I když stále - paradoxně - zaměstnanci chtějí prémie.
Je na vedení společnosti aby analyzovaly dopady svých akcí...


Více peněz vs teambuilding. Stejně jako výzkum více peněz vs každodenní procházky
a kdo je šťastnější (myslím že je to ze Sutherland, Scrum). Lidé mají velmi špatný odhad
ohledně toho, co je udělá šťastnými.


## Fault feedback ratio

Simulace šíření chyb, tj. pokud oprava existující chyby způsobý "e" nových chyb.
Pokud se proměnnou "e" rozhodneme měřit, můžeme se dozvědět hodně o kvalitě
systému. Odvození rovnic viz papír.
