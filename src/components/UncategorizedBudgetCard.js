import React from "react";
import BudgetCard from "./BudgetCard";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetContext";

function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if (amount === 0) {
    return null;
  }
  return (
    <div>
      <BudgetCard amount={amount} name="Uncategorized" gray {...props} />
    </div>
  );
}

export default UncategorizedBudgetCard;
