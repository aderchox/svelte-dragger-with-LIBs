# Svelte + Dragula

## TODOS:

- [ ] A 4 x 4 grid of squares, swapped around by dragging with dragula


## ISSUES:

- [x] ".handle" is a direct child of "drgRow" too and Dragula moves it too! (👉 Fixed it by adding two different layers: drgRow and drgRowContainer. Possible alternative solution I could _probably_ use: isContainer method in the config of Dragula.)
- [ ] Cannot use ".handle" to move "drgRowContainer"s up and down.
- [ ] Dragging "drg"s ends :hover state of "drgRowContainer".
- [ ] Hovering over context menu ends :hover state of "drgRowContainer".