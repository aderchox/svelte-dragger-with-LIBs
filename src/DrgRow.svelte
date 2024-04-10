<script>
  import { onMount } from "svelte";
  import { debounce } from "./lib/util";

  let row;
  let showControls = false;

  onMount(() => {
    row.addEventListener("mouseover", () => {
      // console.log("hovered");
      setTimeout(() => {
        if (row.matches(":hover")) {
          row.classList.add("hovered");
        }
      }, 400);
    });

    let debouncedUnHover = debounce(() => {
      row.classList.remove("hovered");
    }, 400);
    row.addEventListener("mouseleave", () => {
      debouncedUnHover();
    });
  });
</script>

<div class="row" bind:this={row}>
  {#if showControls}
    <div class="handle">:::</div>
  {/if}
  <slot>Draggable Row</slot>
</div>

<style>
  .row {
    display: flex;
    gap: 5px;
    border: 1px solid #7c68ee4d;
    padding: 5px;
    margin-block: 5px;
    position: relative;
    transition: margin 400ms;
  }
  .row:global(.hovered) {
    margin-block: 30px;
  }
  .handle {
    position: absolute;
    top: 0;
    right: 10px;
    cursor: grab;
  }
</style>
