# Svelte + Sortable Dragger

## TODOS:

- [x] A 4 x 4 grid of squares, swapped around by dragging
- [x] Allow locking row controls (ie, hovering on rows will neither epxand them, no show their controls)
- [x] Allow adding new rows
- [ ] Allow deleting rows (with confirmation)
- [ ] Allow resizing fields
- [ ] Add the two optional headings: rowHeading, and rowSubHeading
- [ ] Allow adding predefined field cells to rows (eg, text field, select, etc.)
- [ ] Give a raw export (stripped from layouting helper visuals) of the output layout with UIDs for fields

## ISSUES:

- [x] ".handle" is a direct child of "drgRow" too and Dragula moves it too! (👉 Fixed it by adding two different layers: drgRow and drgRowContainer. Possible alternative solution I could _probably_ use: isContainer method in the config of Dragula.)
- [x] Cannot use ".handle" to move "drgRowContainer"s up and down.
- [x] Dragging "drg"s ends :hover state of "drgRowContainer".
- [x] Hovering over context menu ends :hover state of "drgRowContainer".
- [x] An open context menu must get closed when a dragging starts
- [x] Either leaving the ".rowsWrapper" must close the context menu, or clicking somewhere other than the menu (even if outside ".rowsWrapper") must close it. (Sounds like I need some global store to coordinate the states of the context menu and the drag area.) (// TODO - fixed without a store for now, but a store would be neater.)
