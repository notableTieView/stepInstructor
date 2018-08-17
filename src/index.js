import React from 'react'
import ReactDom from 'react-dom'
//import AwesomeSearch from './containers/AwesomeSearch'



ReactDom.render(
  <React.Fragment>
    wurst
  </React.Fragment>,
  document.getElementById('root')
)

/*
Wie erkenne ich was State ist?
searchTerm -> State
sourceList -> kein State (wird über Props übergeben)
filteredList -> wird aus searchTerm und sourceList berechnet

Werden Daten über Props übergeben? D.h. z. B. an die äussere Komponente?
Sind Daten unveränderlich?
Können Daten aus anderen Daten berechnet werden?
Wenn eine der Fragen ja? dann kein State
Ziel: möglichst wenig State!

State muss immer in eine Komponente gepackt werden die über den Komponenten liegt, die den State verwenden
*/
