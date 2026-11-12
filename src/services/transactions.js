import sourceTransactions from '../data/transactions.json';

// Keep future endpoint integration isolated here. Never mutate the imported data.
export async function loadTransactions() {
  return sourceTransactions.map((transaction) => ({ ...transaction }));
}
