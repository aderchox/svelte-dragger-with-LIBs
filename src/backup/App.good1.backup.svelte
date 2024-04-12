<script>
  import { onMount } from "svelte";
  import "/node_modules/dragula/dist/dragula.min.css";
  import dragula from "dragula";

  let drgwrapper;

  onMount(() => {
    const drake = dragula([drgwrapper], {
      revertOnSpill: true,
    });
    drake.on("drag", function (event) {
      console.log("dragging");
    });
  });
</script>

<div class="drgwrapper" bind:this={drgwrapper}>
  <div class="drg drg1" draggable="true">111111111111111111111</div>
  <div class="drg drg2" draggable="true">2222222222222222222</div>
  <div class="drg drg3" draggable="true">3333333333333333333</div>
</div>

<style>
  .drgwrapper {
    padding-block: 10px;
  }
  :global(.gu-transit) {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: "alpha(opacity=0)";
  }
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
