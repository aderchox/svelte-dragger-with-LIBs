<script>
  import { onMount } from "svelte";
  import { debounce } from "./lib/util";

  let drgRowContainer;
  let showControls = false;

  onMount(() => {
    drgRowContainer.addEventListener("mouseover", () => {
      // console.log("hovered");
      setTimeout(() => {
        if (drgRowContainer.matches(":hover")) {
          drgRowContainer.classList.add("hovered");
          showControls = true;
        }
      }, 400);
    });

    let debouncedUnHover = debounce(() => {
      setTimeout(() => {
        if (!drgRowContainer.matches(":hover")) {
          drgRowContainer.classList.remove("hovered");
          showControls = false;
        }
      }, 300);
    }, 300);
    drgRowContainer.addEventListener("mouseleave", () => {
      debouncedUnHover();
    });
  });
</script>

<div class="drgRowContainer" bind:this={drgRowContainer}>
  {#if showControls}
    <div class="handle">:::</div>
  {/if}
  <div class="drgRow">
    <slot>Draggable Row</slot>
  </div>
</div>

<style>
  .drgRowContainer {
    border: 1px solid #7c68ee4d;
    padding: 5px;
    margin-block: 5px;
    position: relative;
    transition: margin 400ms;
  }
  .drgRowContainer:global(.hovered) {
    margin-block: 30px;
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
