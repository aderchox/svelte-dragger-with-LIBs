<script>
  import { onMount } from "svelte";

  let drg;
  let ctxmenuOpen = false;
  onMount(() => {
    document.addEventListener("click", (event) => {
      let targetElement = event.target;
      let ctxmenu = document.body.querySelector(".ctxmenu");
      if (!ctxmenu.contains(targetElement)) {
        ctxmenu.parentElement.removeChild(ctxmenu);
        ctxmenuOpen = false;
      }
    });

    drg.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      console.log(event.x, event.y);
      let ctxmenu = document.createElement("div");
      ctxmenu.classList.add("ctxmenu");
      let ctxmenuItem = document.createElement("span");
      ctxmenuItem.classList.add("ctxmenuItem");
      ctxmenuItem.textContent = "Delete";
      ctxmenu.append(ctxmenuItem);
      document.body.append(ctxmenu);
      ctxmenu.style.left = event.x + "px";
      ctxmenu.style.top = event.y + "px";
    });
  });
</script>

<div class="drg" bind:this={drg}>
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
  :global(.ctxmenu) {
    width: 200px;
    border: 1px solid black;
    padding: 10px;
    position: absolute;
  }
</style>
