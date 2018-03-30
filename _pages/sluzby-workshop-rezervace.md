---
layout: page
title: 'Rezervace'
permalink: /workshop-extremniho-programovani-rezervace
parent: /workshop-extremniho-programovani
---

Registrace na [workshop eXtrémního programování](/workshop-extremniho-programovani).
Zaváděcí cena jen 800Kč. Rezervace místa je platná 7 dní a vaše účast bude
závazně potvrzena až po připsání platby.

Pokyny k platbě vám budou zaslány obratem.

Další termíny, místa a programovací jazyky [na vyžádání](/kontakt).

<form id="contact" action="https://formspree.io/lukas@lukasbednarik.cz" method="POST">
  <fieldset>
    <input placeholder="Jméno" type="text" name="name" tabindex="1" required>
  </fieldset>
  <fieldset>
    <input placeholder="Email" type="email" name="_replyto" tabindex="2" required>
  </fieldset>
  <fieldset>
    <input placeholder="Telefon" type="tel" name="phone" tabindex="3" required>
  </fieldset>
  <fieldset>
    <label class="btncontainer">27. 4. 2018 (Java)
      <input type="radio" name="date" tabindex="4" value="27. 4. 2018 (Java)" checked>
      <span class="checkmark"></span>
    </label>
    <label class="btncontainer">6. 9. 2018 (C++)
      <input type="radio" name="date" tabindex="5" value="6. 9. 2018 (C++)">
      <span class="checkmark"></span>
    </label>
  </fieldset>
  <fieldset>
    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="_next" value="/rezervace-potvrzena" />
    <input type="hidden" name="_language" value="cs" />
    <button name="submit" type="submit" id="contact-submit" data-submit="Rezervuji..." tabindex="6">Rezervovat místo!</button>
  </fieldset>
</form>

