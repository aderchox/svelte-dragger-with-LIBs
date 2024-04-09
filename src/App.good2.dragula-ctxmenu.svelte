<script>
	import { ctxmenu } from 'ctxmenu';
  import { onMount } from "svelte";
  import '/node_modules/dragula/dist/dragula.min.css';
  import dragula from "dragula";
  import Drg from "./Drg.svelte";

  let drgwrapper;
  let menuDefinition = [
    {
      "text": "Delete",
      action: undefined
    }
  ]
  
  onMount(() => {
    // const rowsDrake = dragula([drgwrapper], {
    //   revertOnSpill: true,
    // });
    // rowsDrake.on("drag", function(event){
    //   console.log("row dragging")
    // });
    const fieldsDrake = dragula([...drgwrapper.querySelectorAll(".row")], {
      revertOnSpill: true,
    });
    fieldsDrake.on("drag", function(event){
      console.log("field dragging");
    })
    ctxmenu.attach(".drgwrapper", menuDefinition, {
      onBeforeShow: (menuDef, event) => {
        let targetElem = document.elementFromPoint(event.x, event.y);
        let newMapDef;
        if(targetElem.classList.contains("drg")){
          newMapDef = menuDef.map(item => {
            if(item.text.toLowerCase() === "delete") {
              item.action = () => targetElem.parentElement.removeChild(targetElem);
            }
            return item;
          })
        } else {
          newMapDef = [
            {
              text: "Powered by Adera."
            }
          ]
        }
        return newMapDef;
      }
    });

    return () => {
      ctxmenu.delete(".drgwrapper");
    }
  });

</script>

<div class="drgwrapper" bind:this="{drgwrapper}">
  <div class="row">
    <h2>Form's first row</h2>
  </div>
  <div class="row">
    <Drg>1</Drg>
    <Drg>2</Drg>
    <Drg>3333333333333333333</Drg>
    <Drg>4</Drg>
  </div>
  <div class="row">
    <Drg>11</Drg>
    <Drg>22</Drg>
    <Drg>33</Drg>
    <Drg>44</Drg>
  </div>
  <div class="row">
    <Drg>111</Drg>
    <Drg>222</Drg>
    <Drg>333</Drg>
    <Drg>444</Drg>
  </div>
  <div class="row">
    <Drg>1111</Drg>
    <Drg>2222</Drg>
    <Drg>3333</Drg>
    <Drg>4444</Drg>
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
</style>
