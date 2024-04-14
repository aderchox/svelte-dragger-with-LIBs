<script>
  // TODO - A row without any Drgs must self-remove.
  import { Sortable } from "sortablejs";
  import { onMount } from "svelte";
  import { debounce } from "./lib/util";

  // When hover is locked, stop making any changes to the styles due to whether hovering or unhovering.
  export let lockHover;
  let drgRowContainer;
  let drgRow;
  // Show controls, specially the handle with the class ".handle".
  let showControls = false;
  let debouncedUnHover = () => {};

  // When hover state terminates (user moves mouse outside the hover area), if an unhover handler is skipped due to lockHover being true (referring to the conditional inside debouncedUnHover), then debouncedUnhover will not re-trigger automatically once again when lockHover turns off (normally, it just gets triggered due to pointerleave).
  $: !lockHover && debouncedUnHover();

  onMount(() => {
    drgRowContainer.addEventListener("pointerover", () => {
      // console.log("hovered");
      setTimeout(() => {
        if (!lockHover && drgRowContainer.matches(":hover")) {
          drgRowContainer.classList.add("hovered");
          showControls = true;
        }
      }, 400);
    });

    // REVIEW - Once context menu is used, eg, "Delete", this function re-triggers a few times. (Turning lockHover into a global state is probably a better option.)
    debouncedUnHover = debounce(() => {
      setTimeout(() => {
        // console.log("debouncedUnHover - condition check");
        if (!lockHover && !drgRowContainer.matches(":hover")) {
          // console.log("debouncedUnHover - applied");
          drgRowContainer.classList.remove("hovered");
          showControls = false;
        }
      }, 300);
    }, 300);
    drgRowContainer.addEventListener("pointerleave", () => {
      debouncedUnHover();
    });

    Sortable.create(drgRow, {
      // Needed in order to be able to drag items cross-rows, ie, from one row to another.
      group: "drg-row-group",
      animation: 300,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    });
  });
</script>

<div class="drgRowContainer" bind:this={drgRowContainer}>
  {#if showControls}
    <div class="handle">:::</div>
  {/if}
  <div class="drgRow" bind:this={drgRow}>
    <slot>Draggable Row</slot>
  </div>
</div>

<style>
  .drgRowContainer {
    /* Border rule was moved to the hover state. */
    /* border: 1px solid #7c68ee4d; */
    padding: 5px;
    margin-block: 5px;
    position: relative;
    transition: margin 400ms;
  }
  .drgRowContainer:global(.hovered) {
    border: 1px solid #7c68ee4d;
    margin-block: 30px;
  }
  /* Sortable is giving this ".chosen" class to it when it gets chosen. */
  .drgRowContainer:global(.chosen) {
    border: #cdc6f8 3px solid;
    /* margins to compensate for the 1px -> 3px increase in order to prevent scaling of the item. */
    margin-block: 28px;
    margin-inline: -1px;
  }
  .drgRow {
    display: flex;
    gap: 5px;
  }
  .handle {
    position: absolute;
    top: -25px;
    right: 10px;
    cursor: grab;
    background-color: #7c68ee4d;
    width: 36px;
    text-align: center;
    user-select: none;
  }
</style>
