<script>
  // The name "class" is a JavaScript reserved keyword, so may not be used here.
  export let className;
  export let message;
</script>

<span class={className}>{message}</span>

<style>
  span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
