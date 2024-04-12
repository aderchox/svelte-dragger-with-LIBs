<!-- Issue: The cursor changes to the "forbidden" icon when dragging starts, and I couldn't fix it. Now I'll try libraries like "Dragula" for this. -->

<script>
  import { onMount } from "svelte";

  let drgwrapper;

  onMount(() => {
    let drgs = drgwrapper.querySelectorAll(".drg");
    drgs.forEach((drg) => {
      drg.addEventListener("dragstart", function (event) {
        console.log("dragging");

        // event.preventDefault();

        event.dataTransfer.setDragImage(document.createElement("img"), 0, 0);

        // event.dataTransfer.effectAllowed = "move";
        // event.dataTransfer.dropEffect = "move";

        // drgwrapper.classList.add("has_dragging");

        //   const drgClone = drg.cloneNode();
      });
      drg.addEventListener("dragend", function (event) {
        drgwrapper.classList.remove("has_dragging");
      });
    });
  });
</script>

<div class="drgwrapper" bind:this={drgwrapper}>
  <div class="drg drg1" draggable="true">111111111111111111111</div>
  <div class="drg drg2" draggable="true">2222222222222222222</div>
  <div class="drg drg3" draggable="true">3333333333333333333</div>
</div>

<style>
  /* :global(.drgwrapper.has_dragging) {
    cursor: grabbing;
  } */

  .drg {
    padding: 20px;
    border: 1px solid #8080807e;
    margin-block-end: 10px;
    cursor: grab;
  }
  .drg:hover {
    border: 3px solid #5183807e;
    /* To keep the content in the same place after increasing border's width on hover. */
    margin: -2px;
    margin-block-end: 8px;
  }
  .drg:active {
    /* Don't select content while dragging. */
    user-select: none;
  }
</style>
