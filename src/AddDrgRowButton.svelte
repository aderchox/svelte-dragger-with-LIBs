<script>
  import { onMount } from "svelte";
  import DrgRow from "./DrgRow.svelte";

  export let rowsWrapper;
  let gg;

  function clickHandler() {
    new DrgRow({
      target: rowsWrapper,
    });
  }
</script>

<button on:click={clickHandler}>(+) Add New Row</button>

<style>
</style>
