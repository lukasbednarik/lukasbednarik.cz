# Howto

Inside root directory run:

```
bundle install
jekyll build && jekyll serve --incremental
```

# Development

## Tests

- [Analyze page speed](https://developers.google.com/speed/pagespeed/insights/)
- [HTML validity checker](https://validator.w3.org)
- [Broken link checker](https://www.drlinkcheck.com/)
- Test page on various display sizes: Press Ctrl+Shift+M in Firefox
- Broken view - check Google Analytics page - there are some checks...

## Notes

- Iconic font generator: https://glyphter.com/
- Grafika: Pinta opacity: 205 na černé, parallax effekt 222.

# TODO

## High Priority

- Blog: obrázek u článků po levé straně jako malé čtverečky. Obrázky zobrazit i u článků na indexu.
- ! Sticky menu (zelené pozadí. použít stejný design jako mobile menu, ale užší pruh a uvnitř třídy "container", takže je vše na středu.)
- Znovu vrátit reference, až jich bude víc. Edit navigation.html a index.html.

- ??? Je font OK? Poslední dobou na mě působí divně.

## Medium Priority

- Blog: excerpt na blogu 3 řádkový text. Mělo by to být podobně dlouhé.
- Blog: Podobné příspěvky – lépe upoutat pozornost. Třeba zmenšená verze z \blog/
- Blog: pagination
    - archive tags nejsou paginated. Malá priorita.
    - Blog pagination - title stránky je "Page 3 of 5 for Blog". Chci to česky.
    - pagination není responzive jako to na starém blogu. Chci to udělat podobně.
    - Větší margin-top pro pagination.

## Low priority

Spíše nápady. Možná to ani nechci realizovat.

- Bug: Například u článku "Zkušenosti z mobování" jsou další doporučené články. Jeden z nich se tam zobrazuje 2x.
  Myslím, že se mezi články kryje více tagů a proto se to vypíše 2x.
- Na stránky workshopů přidat odkaz na reference, jakmile referencí bude víc.
