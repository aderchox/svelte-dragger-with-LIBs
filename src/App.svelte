<script>
  import { onMount } from "svelte";
  import '/node_modules/dragula/dist/dragula.min.css';
  import dragula from "dragula";
  import Drg from "./Drg.svelte";

  let drgwrapper;
  
  onMount(() => {
    const drake = dragula([...drgwrapper.querySelectorAll(".row")], {
      revertOnSpill: true,
    });
    drake.on("drag", function(event){
      console.log("dragging");
    })
  });

</script>

<div class="drgwrapper" bind:this="{drgwrapper}">
  <div class="row">
    <h2>Form's first row</h2>
  </div>
 <div class="row">
  <div class="drg">1</div>
  <div class="drg">2</div>
  <div class="drg">3333333333333333333</div>
  <Drg>4</Drg>
 </div>
 <div class="row">
  <div class="drg">1</div>
  <div class="drg">2</div>
  <div class="drg">3</div>
  <div class="drg">4</div>
 </div>
 <div class="row">
  <div class="drg">1</div>
  <div class="drg">2</div>
  <div class="drg">3</div>
  <div class="drg">4</div>
 </div>
 <div class="row">
  <div class="drg">1</div>
  <div class="drg">2</div>
  <div class="drg">3</div>
  <div class="drg">4</div>
 </div>
</div>

<style>
  :global(.gu-transit){
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: "alpha(opacity=0)";
  }
  .drgwrapper {
    padding-block: 10px;
    width: 700px;
  }
  .drgwrapper .row {
    display: flex;
    gap: 5px;
    border: 1px solid #7c68ee4d;
    padding: 5px;
    margin-block: 5px;
  }
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
