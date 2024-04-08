<script>



</script>

<div class="drg">
    <slot>A Form Field</slot>
</div>

<style>
      .drg {
    flex: 1;
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