# Procesy

!! TODO - v této kapitole bych asi chtěl rozebrat nelineární procesy stejně jako Weinberg.
Možná nějaký příklad z teorie her, ale do ničeho víc bych se nepouštěl.


Musíme googlit "organizational patterns", ne firemní kultury!
Kniha Organizational Patterns of Agile Software Development (kniha je jako paterny v organizaci 2, dobré pro tuto kapitolu!!!! Z této knihy lze vybrat mnoho příkladů.):
http://www.gbv.de/dms/hebis-mainz/toc/123300924.pdf
http://davidpritchard.org/wp-content/uploads/2013/12/Organizational-Patterns.pdf



Hodně příkladů z pattern 2 managementu. Analyzovat a rozebrat je.

mluvit o metodách v různých patternech
Software process dynamics (Mandachy) - doplnit diagramy analýzou jako má Mandachy.
Pozn.: Např. situaci, kdy se nějaká veličina měří a lidé se pak snaží, aby vypadala dobře.
Např. situaci, kdy se nějaká veličina měří a trestá a lidé ji úmyslně zkreslují (např. počet bugů).

! Nechat 10 diagramu efektů udělat nějakého kreslíře.
Obrázek efektu na celou stránku s vtipnou a jednoduchou
ilustrací ke každé měřitelné hodnotě.

TODO: Analyzovat fungování v era - viz sw_nápady.docx.

Včetně mnoha nelineárních diagramů. Začít Brook's law.

Vysvětlit některé best practices na diagramech.
Snaha je, aby si čtenář uměl jednotlivé praktiky sám promýšlet,
ne dávat seznam best practices jako je tomu v jiných knihách.
Proč se dělá review, proč unit testing, jak lze zkazit i agile...


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

----------------------

Více peněz vs teambuilding. Stejně jako výzkum více peněz vs každodenní procházky
a kdo je šťastnější (myslím že je to ze Sutherland, Scrum). Lidé mají velmi špatný odhad
ohledně toho, co je udělá šťastnými.

Ukázat, že zpětná vazba záčasto závisí jen na malých detailech. Např. jestli PO
kontroluje při schvalování commitu i kvalitu kódu. Tyto podměty by měly vycházet přímo
z týmu, aby si za nimi tým stál.

Jak rozloží firmu produkťák, který je povýšen za představení nějakého návrhu, ale už jej nemusí
realizovat.

Řeknou vykopat jámu... pohled developera.

Vicous cycle. Manažer má moc práce a proto musí pracovat ještě více a nedělá dobrá rozhodnutí.
Viz Weinberg, Zmiňuje to i Carnall

Single loop vs double loop leargnin (upravujeme mental model).
https://en.wikipedia.org/wiki/Double-loop_learning

## Teorie her - aplikace

kniha Mechanism Design and Management:
Mathematical Methods for Smart Organizations
staženo pdf.

TODO: ukázat nějaké aplikace (řešení procesů) z teorie her...


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


## ...


 Další inspirace viz Alistar Cockburn:
https://www.amazon.com/exec/obidos/ASIN/0201699699/ref%3Dase_alistaircockburn
http://alistair.cockburn.us/Books


Další inspirace z Weinberg.

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


## Chyby v SW

co způsobuje chyby v SW a dynamika chyb v SW (weinberg kniha 2).

Simulace šíření chyb, tj. pokud oprava existující chyby způsobý "e" nových chyb.
Pokud se proměnnou "e" rozhodneme měřit, můžeme se dozvědět hodně o kvalitě
systému. Odvození rovnic viz papír.

Hry: Hra s dvojobrázkem "Najdi 16 rozdílů" z Why SW gets into trouble.
Hra kdy každé oddělení firmy kroužkuje v tabulce od Crosby. Ukáže se, na jakém stupni firma je a jak se to liší mezi odděleními.

