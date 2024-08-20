



<script setup lang="ts">
import { computed } from 'vue'; // Import computed from Vue
import ApplicationItem from './ApplicationItem.vue';
import type { ApiSchema } from '@/types';

// Define properties
const props = defineProps<{
  applications: ApiSchema['BrokerApplicationDto'][];
  newLoanAmount: number; // Add new loan amount as a prop
}>();

// Compute total and average loan amount
const totalLoanAmount = computed(() => {
  return props.applications.reduce((total, application) => {
    // Convert application.loanAmount from string to integer
    const loanAmount = parseInt(application.loanAmount, 10);
    return total + loanAmount;
  }, 0);
});

const averageLoanAmount = computed(() => {
  return props.applications.length > 0 ? totalLoanAmount.value / props.applications.length : 0;
});

// Convert to integers
const totalLoanAmountInt = computed(() => Math.floor(totalLoanAmount.value));
const averageLoanAmountInt = computed(() => Math.floor(averageLoanAmount.value));

// Compare new loan amount to average
const newLoanComparison = computed(() => {
  return props.newLoanAmount > averageLoanAmount.value
    ? 'Above Average'
    : 'Below Average';
});

// Log values
console.log('Total Loan Amount (Int):', totalLoanAmountInt.value);
console.log('Average Loan Amount (Int):', averageLoanAmountInt.value);
console.log('New Loan Amount Comparison:', newLoanComparison.value);
</script>

<template>
  <BCard>
    <template #title>Applications</template>
    <table class="application-table">
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Property details</th>
        <th>Customer details</th>
        <th>Loan stage</th>
        <th>Loan Amount</th>
      </tr>
      <ApplicationItem v-for="application in props.applications" :key="application.id" :application="application" />
    </table>
    
    <!-- Display average loan amount -->
    <div class="average-loan-amount">
      <input type="number" :value="averageLoanAmountInt.toFixed(0)" id="average_loan_amount" placeholder="Enter average loan amount" />
      <strong>Average Loan Amount: </strong> {{ averageLoanAmountInt.toFixed(0) }}
    </div>
    
    <!-- Display comparison of new loan amount -->
    <div class="new-loan-comparison">
      <strong>New Loan Amount is: </strong> {{ newLoanComparison }}
    </div>
  </BCard>
</template>

<style lang="scss" scoped>
/* Existing styles */
.b-card {
  height: 100%;

  @media (max-width: 991px) {
    background-color: transparent;
    box-shadow: none;

    :deep(.p-card-body) {
      padding: 0.5rem 0;
    }

    :deep(.p-card-content) {
      padding: 0;
    }
  }
}

.column-header {
  font-weight: 500;
  font-size: 80%;
}

.application-table {
  width: 100%;
}
.application-table th {
  text-align: left;
  padding: 0.5rem 0.5rem;
  font-size: $font-md;
  text-align: left;
}

/* Style for average loan amount */
.average-loan-amount {
  margin-top: 1rem;
  font-size: $font-md;
}

/* Style for new loan comparison */
.new-loan-comparison {
  margin-top: 1rem;
  font-size: $font-md;
}
</style>











