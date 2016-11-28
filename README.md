![ca screenshot](src/img/ca-cover.png "Campusambulanz Screenshot")

# CAMPUSAMBULANZ (FH Potsdam)

Willkommen im Campusambulanz Repository der Fachhochschule Potsdam. Jedes Jahr bewerben sich viele Designinteressierte an der Fachhochschule und stellen in einer Eignungsprüfung ihr Talent und Können unter beweis. So ein Tag ist natürlich mit viel Stress verbunden. Deshalb gibt es die Campusambulanz, eine Gruppe aus Erstsemestern, die dir den Tag der Eignungsprüfung so angenehm wie möglich gestalten wollen.

Dieses Repository richtet sich in erster Linie an das aktuelle Campusambulanz Webseiten Team. Wenn ihr mehr erfahren, und gleichzeitig das Ergebnis dieses Repositories sehen wollt, schaut doch mal vorbei auf [www.fhp-campusambulanz.de](http://www.fhp-campusambulanz.de/)


## Anforderungen
- [node.js](https://nodejs.org/en/)
- [gulp.js](http://gulpjs.com/)

## Installation
Installiere zunächst node.js und folge dann dieser Anleitung.

```sh
# klone dieses Repository
git clone https://github.com/Campusambulanz/ca-website.git

# wechsel in das Repository Verzeichnis
cd ca-website

# installiere gulp global
npm gulp install -g

# installiere alle erforderlichen node module
npm install

```

## Start
Wenn alle benötigten node Module installiert wurden, kannst du nun das Projekt mittels gulp starten:

```sh
# einmalig (in deinem repository wird nun ein /build verzeichnis erstellt)
gulp init

# danach (gulp beobachtet jetzt nur noch Veränderungen)
gulp serve

```

## Struktur
![ca structure](src/img/ca-structure.png "Campusambulanz Struktur")




## Inhalte ändern
Einfache Änderungen können in der **admin.jade** gemacht werden. In dieser sind alle nötigen Schritte erklärt:
– Termine ändern
– Sponsoren ändern
– einzelne Sections ein- oder ausblenden

Diese Aufgaben kann jede/r auch ohne HTML- oder Programmierkenntnisse ausführen. Für komplexere inhaltliche oder gestalterische Änderungen wendet euch bitte an das aktuelle oder vorherige Campusambulanz.

## Fehler?
Diese Website wurde von Studenten der FHP erstellt, nicht von Developern mit langjähriger Erfahrung. Daher sind wir uns bewusst, dass Fehler und Bugs auftauchen können. Wenn ihr in Zukunft Fehler entdeckt, zögert nicht, diese in Frage zu stellen und zu verbessern.

## Hilfe!
Du kommst überhaupt nicht weiter? Schreib uns einfach an, oder erstelle ein 'Help-Wanted' Issue – bestimmt eilt dir ein ehemaliger Campussanitäter zur Hilfe.


## Autoren
- [Laurids Düllmann @vicegold](http://github.com/vicegold) – Original Design und Layout (Team 2012)
- [Lennart Hildebrandt @lennerd](http://github.com/lennerd) – Original Frontend (Team 2012)
- [Ben Schmitt @benschmitt](http://github.com/benschmitt) – Original Frontend (Team 2012)
- Michael Dietz – Original Logo (Team 2012)
- [Corvin Weber](http://corvinweber.de/) – Original Texte (Team 2012)
- [Thomas Otto](http://thomas-otto.net/) – Original Texte (Team 2012)
- [Jonas Köpfer – @topada](http://github.com/topada) – Redesign, Responsive Design, Jade (Team 2016)
- [Dennis @dnsos](http://github.com/dnsos) – Redesign, Responsive Design (Team 2016)
- [Donatus Wolf @doniwolf](http://github.com/doniwolf) – Redesign Lead, Communication, Project Management (Team 2016)

## Lizenz
The MIT License (MIT)
Copyright (c) 2016 Campusambulanz FH Potsdam

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
