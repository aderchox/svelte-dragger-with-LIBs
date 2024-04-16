<script>
  import { ctxmenu } from "ctxmenu";
  import { afterUpdate, onMount } from "svelte";
  import Drg from "./Drg.svelte";
  import DrgRow from "./DrgRow.svelte";
  import Sortable from "sortablejs";
  // import AddDrgRowButton from "./AddDrgRowButton.svelte";
  import LayoutLockButton from "./LayoutLockButton.svelte";

  let rowsWrapper;
  let isDragging = false;
  let menuDefinition = [
    {
      text: "Delete",
      action: undefined,
    },
  ];
  let isLayoutLocked = false;
  let dynamicaDrgRows = [];

  onMount(() => {
    Sortable.create(rowsWrapper, {
      // class of the drop placeholder
      ghostClass: "drgrow-sortable-ghost",
      // class of the item following the mouse (the transparent clone being dragged)
      dragClass: "drgrow-sortable-drag",
      animation: 300,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      handle: ".handle",
      onStart: () => {
        // To lock hover effect of all rows during the dragging
        isDragging = true;
        ctxmenu.hide();
      },
      onEnd: () => {
        isDragging = false;
      },
      onChoose: (e) => {
        e.item.classList.add("chosen");
      },
      onUnchoose: (e) => {
        e.item.classList.remove("chosen");
      },
    });

    rowsWrapper.addEventListener("contextmenu", (event) => {
      const targetElem = document.elementFromPoint(event.x, event.y);
      if (targetElem.classList.contains("drg")) {
        ctxmenu.show(menuDefinition, event, {
          onBeforeShow: (menuDef, event) => {
            isDragging = true;
            return menuDef.map((item) => {
              if (item.text.toLowerCase() === "delete") {
                item.action = () =>
                  targetElem.parentElement.removeChild(targetElem);
              }
              return item;
            });
          },
          onHide: () => {
            isDragging = false;
            // console.log("isDragging changed to: ", isDragging);
          },
        });
      } else {
        ctxmenu.hide();
      }
    });
  });

  function addDrgRow() {
    const newDrgRow = new DrgRow({
      target: rowsWrapper,
      props: {
        // NOTE - Changes to `isLayoutLocked` will not be explicit assignment and are considered mutation of this prop here, so requires explicit assignment in afterUpdate.
        lockHover: isLayoutLocked,
      },
    });
    dynamicaDrgRows.push(newDrgRow);
  }

  afterUpdate(() => {
    // Fixes the issue mentioned in addDrgRow.
    // NOTE - Doing this requires setting a compiler option `accessors: true` in the svelte.config.js.
    dynamicaDrgRows.forEach((drgRow) => (drgRow.lockHover = isLayoutLocked));
  });
</script>

<LayoutLockButton bind:isLocked={isLayoutLocked} />
<div class="rowsWrapper" bind:this={rowsWrapper}>
  <DrgRow lockHover={isLayoutLocked || isDragging}>
    <h2>Form's first row</h2>
  </DrgRow>
  <DrgRow lockHover={isLayoutLocked || isDragging}>
    <Drg lockHover={isLayoutLocked}>1</Drg>
    <Drg lockHover={isLayoutLocked}>2</Drg>
    <Drg lockHover={isLayoutLocked}>3333333333333333333</Drg>
    <Drg lockHover={isLayoutLocked}>4</Drg>
  </DrgRow>
  <DrgRow lockHover={isLayoutLocked || isDragging}>
    <Drg lockHover={isLayoutLocked}>11</Drg>
    <Drg lockHover={isLayoutLocked}>22</Drg>
    <Drg lockHover={isLayoutLocked}>33</Drg>
    <Drg lockHover={isLayoutLocked}>44</Drg>
  </DrgRow>
  <DrgRow lockHover={isLayoutLocked || isDragging}>
    <Drg lockHover={isLayoutLocked}>111</Drg>
    <Drg lockHover={isLayoutLocked}>222</Drg>
    <Drg lockHover={isLayoutLocked}>333</Drg>
    <Drg lockHover={isLayoutLocked}>444</Drg>
  </DrgRow>
  <DrgRow lockHover={isLayoutLocked || isDragging}>
    <Drg lockHover={isLayoutLocked}>1111</Drg>
    <Drg lockHover={isLayoutLocked}>2222</Drg>
    <Drg lockHover={isLayoutLocked}>3333</Drg>
    <Drg lockHover={isLayoutLocked}>4444</Drg>
  </DrgRow>
</div>
<button on:click={addDrgRow} class="addDrgRow">(+) Add New Row</button>

<style>
  :global(.gu-transit) {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: "alpha(opacity=0)";
  }
  .rowsWrapper {
    padding-block: 10px;
    width: 700px;
  }
  :global(.drgrow-sortable-drag) {
    opacity: 0;
  }
  .addDrgRow {
    user-select: none;
  }
  /* :global(.drgrow-sortable-ghost) {
    background-color: #eee;
    border-radius: 5px;
  } */
</style>
