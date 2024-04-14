<script>
  import { ctxmenu } from "ctxmenu";
  import { onMount } from "svelte";
  import Drg from "./Drg.svelte";
  import DrgRow from "./DrgRow.svelte";
  import Sortable from "sortablejs";

  let drgwrapper;
  let isDragging = false;
  let menuDefinition = [
    {
      text: "Delete",
      action: undefined,
    },
  ];

  onMount(() => {
    Sortable.create(drgwrapper, {
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

    drgwrapper.addEventListener("contextmenu", (event) => {
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
</script>

<div class="drgwrapper" bind:this={drgwrapper}>
  <DrgRow lockHover={isDragging}>
    <h2>Form's first row</h2>
  </DrgRow>
  <DrgRow lockHover={isDragging}>
    <Drg>1</Drg>
    <Drg>2</Drg>
    <Drg>3333333333333333333</Drg>
    <Drg>4</Drg>
  </DrgRow>
  <DrgRow lockHover={isDragging}>
    <Drg>11</Drg>
    <Drg>22</Drg>
    <Drg>33</Drg>
    <Drg>44</Drg>
  </DrgRow>
  <DrgRow lockHover={isDragging}>
    <Drg>111</Drg>
    <Drg>222</Drg>
    <Drg>333</Drg>
    <Drg>444</Drg>
  </DrgRow>
  <DrgRow lockHover={isDragging}>
    <Drg>1111</Drg>
    <Drg>2222</Drg>
    <Drg>3333</Drg>
    <Drg>4444</Drg>
  </DrgRow>
</div>

<style>
  :global(.gu-transit) {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: "alpha(opacity=0)";
  }
  .drgwrapper {
    padding-block: 10px;
    width: 700px;
  }
  :global(.drgrow-sortable-drag) {
    opacity: 0;
  }
  /* :global(.drgrow-sortable-ghost) {
    background-color: #eee;
    border-radius: 5px;
  } */
</style>
