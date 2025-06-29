<script lang="ts">
  import BackspaceOutline from "virtual:icons/mdi/backspace-outline";

  let previousValue: string = "";
  let currentValue: string = "0";
  let operation: string | null = null;
</script> 

<div class="flex flex-col gap-2 rounded-md shadow-sm bg-base-100 w-[380px] h-fit p-4">
  <div id="display" class="rounded-md bg-base-200 w-full h-fit p-2 inset-shadow-sm overflow-hidden text-right select-none">
    <div class="text-gray-400 text-sm h-6">
      {previousValue} {operation}
    </div>
    <div class="text-4xl font-semibold truncate">
      {currentValue}
    </div>
  </div>

  <div class="grid grid-cols-4 gap-2">
    <button class="btn btn-xl">C</button>
    <button class="btn btn-xl">&percnt;</button>
    <button class="btn btn-xl">
      <BackspaceOutline />
    </button>
    <button class="btn btn-xl">&divide;</button>
    <button class="btn btn-xl">7</button>
    <button class="btn btn-xl">8</button>
    <button class="btn btn-xl">9</button>
    <button class="btn btn-xl">&times;</button>
    <button class="btn btn-xl">4</button>
    <button class="btn btn-xl">5</button>
    <button class="btn btn-xl">6</button>
    <button class="btn btn-xl">&minus;</button>
    <button class="btn btn-xl">1</button>
    <button class="btn btn-xl">2</button>
    <button class="btn btn-xl">3</button>
    <button class="btn btn-xl">&plus;</button>
    <button class="btn btn-xl">&pm;</button>
    <button class="btn btn-xl">0</button>
    <button class="btn btn-xl">.</button>
    <button class="btn btn-xl btn-primary">&equals;</button>
  </div>
</div>