# Svelte + Dragula

## TODOS:

- [x] A 4 x 4 grid of squares, swapped around by dragging with dragula
- [ ] Add the two optional headings: rowHeading, and rowSubHeading


## ISSUES:

- [x] ".handle" is a direct child of "drgRow" too and Dragula moves it too! (👉 Fixed it by adding two different layers: drgRow and drgRowContainer. Possible alternative solution I could _probably_ use: isContainer method in the config of Dragula.)
- [x] Cannot use ".handle" to move "drgRowContainer"s up and down.
- [x] Dragging "drg"s ends :hover state of "drgRowContainer".
- [ ] Hovering over context menu ends :hover state of "drgRowContainer".