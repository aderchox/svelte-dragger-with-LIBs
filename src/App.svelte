<script>
  import { ctxmenu } from "ctxmenu";
  import { onMount } from "svelte";
  import "dragula/dist/dragula.min.css";
  import dragula from "dragula";
  import Drg from "./Drg.svelte";
  import DrgRow from "./DrgRow.svelte";

  let drgwrapper;
  let menuDefinition = [
    {
      text: "Delete",
      action: undefined,
    },
  ];

  onMount(() => {
    const fieldsDrake = dragula([...drgwrapper.querySelectorAll(".row")], {
      revertOnSpill: true,
    });
    fieldsDrake.on("drag", function (event) {
      console.log("field dragging");
    });

    drgwrapper.addEventListener("contextmenu", (event) => {
      const targetElem = document.elementFromPoint(event.x, event.y);
      if (targetElem.classList.contains("drg")) {
        ctxmenu.show(menuDefinition, event, {
          onBeforeShow: (menuDef, event) => {
            return menuDef.map((item) => {
              if (item.text.toLowerCase() === "delete") {
                item.action = () =>
                  targetElem.parentElement.removeChild(targetElem);
              }
              return item;
            });
          },
        });
      } else {
        ctxmenu.hide();
      }
    });
  });
</script>

<div class="drgwrapper" bind:this={drgwrapper}>
  <DrgRow>
    <h2>Form's first row</h2>
  </DrgRow>
  <DrgRow>
    <Drg>1</Drg>
    <Drg>2</Drg>
    <Drg>3333333333333333333</Drg>
    <Drg>4</Drg>
  </DrgRow>
  <DrgRow>
    <Drg>11</Drg>
    <Drg>22</Drg>
    <Drg>33</Drg>
    <Drg>44</Drg>
  </DrgRow>
  <DrgRow>
    <Drg>111</Drg>
    <Drg>222</Drg>
    <Drg>333</Drg>
    <Drg>444</Drg>
  </DrgRow>
  <DrgRow>
    <Drg>1111</Drg>
    <Drg>2222</Drg>
    <Drg>3333</Drg>
    <Drg>4444</Drg>
  </DrgRow>
</div>

<style>
  :global(.gu-transit) {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: "alpha(opacity=0)";
  }
  .drgwrapper {
    padding-block: 10px;
    width: 700px;
  }
</style>
