<script>
  export let lockHover = false;
</script>

<div class="drg" class:lockHover>
  <slot>A Form Field</slot>
</div>

<style>
  .drg {
    flex: 1;
    padding: 20px;
    border: 1px solid #8080807e;
    margin-block-end: 10px;
  }
  .drg:hover:not(.lockHover) {
    border: 3px solid #5183807e;
    /* To keep the content in the same place after increasing border's width on hover. */
    margin: -2px;
    margin-block-end: 8px;
    cursor: grab;
  }
  .drg:active {
    /* ANCHOR - Not needed anymore (?) */
    /* Don't select content while dragging. */
    /* user-select: none; */
  }
  :global(.ctxmenu) {
    width: 200px;
    border: 1px solid black;
    padding: 10px;
    position: absolute;
  }
</style>
