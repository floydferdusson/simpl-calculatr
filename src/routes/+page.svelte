<script lang="ts">
  import CalculatorButton from "$lib/components/CalculatorButton.svelte";
  import { OPERATORS, type CalculatorInput } from "$lib/constants/calculator";
  import BackspaceOutline from "virtual:icons/mdi/backspace-outline";

  let previousValue: string = "";
  let currentValue: string = "0";
  let operation: CalculatorInput | null = null;
  let overwrite: boolean = true;
  let lastRight: string | null = null;

  const handleClearAll = (): void => {};
  const handlePercentage = (): void => {};
  const handleDelete = (): void => {};

  const handleOperation = (op: CalculatorInput): void => {
    if (operation && !overwrite) {
      calculate();
    }
    operation = op;
    previousValue = currentValue;
    overwrite = true;
  };
  
  const handleNumberInput = (num: CalculatorInput): void => {
    if (currentValue === "0" || overwrite) {
      currentValue = num.toString();
      overwrite = false;
    } else {
      currentValue += num;
    }
    lastRight = null;
  };

  const handlePlusMinus = (): void => {};
  const handleDecimal = (): void => {};

  const handleEquals = (): void => {
    if (!operation || !previousValue) return;
    if (!lastRight) {
      lastRight = currentValue;
    }
    calculate();
    previousValue = currentValue;
  };
  
  const calculate = (): void => {
    if (!operation) return;
    const left = parseFloat(previousValue);
    const right = parseFloat(lastRight || currentValue);
    let result: number = 0;
    switch (operation) {
      case OPERATORS.ADD: 
        result = left + right;
        break;
      case OPERATORS.SUBTRACT: 
        result = left - right;
        break;
      case OPERATORS.MULTIPLY: 
        result = left * right;
        break;
      case OPERATORS.DIVIDE: 
        result = right !== 0 
          ? left / right
          : Infinity
        break;
    }
    currentValue = Number.isFinite(result) 
      ? `${result}` 
      : "Error"; 
    overwrite = true;
  };
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
    <CalculatorButton onClick={handleClearAll} value={OPERATORS.CLEAR_ALL} />
    <CalculatorButton onClick={handlePercentage} value={OPERATORS.PERCENTAGE} />
    <CalculatorButton onClick={handleDelete} value={OPERATORS.BACKSPACE}>
      <BackspaceOutline />
    </CalculatorButton>
    <CalculatorButton onClick={handleOperation} value={OPERATORS.DIVIDE} />
    <CalculatorButton onClick={handleNumberInput} value={7} />
    <CalculatorButton onClick={handleNumberInput} value={8} />
    <CalculatorButton onClick={handleNumberInput} value={9} />
    <CalculatorButton onClick={handleOperation} value={OPERATORS.MULTIPLY} />
    <CalculatorButton onClick={handleNumberInput} value={4} />
    <CalculatorButton onClick={handleNumberInput} value={5} />
    <CalculatorButton onClick={handleNumberInput} value={6} />
    <CalculatorButton onClick={handleOperation} value={OPERATORS.SUBTRACT} />
    <CalculatorButton onClick={handleNumberInput} value={1} />
    <CalculatorButton onClick={handleNumberInput} value={2} />
    <CalculatorButton onClick={handleNumberInput} value={3} />
    <CalculatorButton onClick={handleOperation} value={OPERATORS.ADD} />
    <CalculatorButton onClick={handlePlusMinus} value={OPERATORS.TOGGLE_SIGN} />
    <CalculatorButton onClick={handleNumberInput} value={0} />
    <CalculatorButton onClick={handleDecimal} value={OPERATORS.DECIMAL} />
    <CalculatorButton 
      className="btn-primary"
      onClick={handleEquals} 
      value={OPERATORS.EQUALS} 
    />
  </div>
</div>