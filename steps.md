# DESCRIZIONE DEL GIOCO

Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
LA partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba

## MILESTONE 1

Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella

## MILESTONE 2

Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti

## MILESTONE 3

Quando l'utente clicca su una cella, verrifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

## MILESTONE 4

Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto l punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il messaggio e scriviamo un messaggio appropriato.

## MILESTONE 5

Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

<br>
<br>

- Inizio

- MILESTONE 1
- Creo una struttura in HTML per visualizzare lo score in pagina
- Recupero l'elemento dal DOM
- Creo una variabile per lo scoore
- Incrementoo lo score al click
- Verifico se la cell è già stata cliccata
- MILESTONE 2
- Preparo i dati iniziali delle bombe
  - Totale delle bombe
- Preparo il Punteggio massimo
- Creo una Arrow funzione per generare l'array di bombe (generateBombs)
- Creo una variabile per l'array di bombe (usando la funzione precedente generateBombs)
- MILESTONE 3
- Preparo una classe con css per la bomba con (background-color: red;)
- Verifico se l'utente ha cliccato una bomba
  - Se si, la cell diventa rossa e stampo in console un messaggio con lo score.
  - Altrimenti incremento lo score
- MILESTONE 4
- Verifico se l'utente ha vinto
  - Se si, stampo in console un messaggio con lo score.
- MILESTONE 5
- Se l'utente ha vinto scrivo un messaggio in pagina
- Se l'utente ha perso scrivo un messaggio in pagina
- Mi assicuro che la partita è terminata.
- Fine
