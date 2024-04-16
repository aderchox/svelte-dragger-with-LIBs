<script>
  export let isLocked = false;
</script>

<button on:click={() => (isLocked = !isLocked)}>
  {#if isLocked}
    Unlock Layout
  {:else}
    Lock Layout
  {/if}
</button>

<style>
  button {
    user-select: none;
  }
</style>
