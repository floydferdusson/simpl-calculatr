
<script lang="ts">
  import type { CalculatorInput } from "$lib/constants/calculator";

  export let value: CalculatorInput;
  export let onClick: (value: CalculatorInput) => void;
  export let className: string = "";
</script>

<button class="btn btn-xl {className}" on:click={() => onClick(value)} >
  {#if $$slots.default}
    <slot />
  {:else}
    {value}
  {/if}
</button>
