<script setup lang="ts">
import { computed } from 'vue';
import { api } from '@/api';
import { useModal } from '@/composables/useModal';
import { useToast } from '@/composables/useToast';
import type { ApiSchema } from '@/types';
import { ref } from 'vue';

// Define properties with default value
const props = defineProps<{
  applications?: ApiSchema['BrokerApplicationDto'][]; // Optional with default value
  newLoanAmount: number; // Add new loan amount as a prop
}>();

// Default to an empty array if applications is undefined
const applications = computed(() => props.applications || []);

// Compute total and average loan amount
const totalLoanAmount = computed(() => {
  return applications.value.reduce((total, application) => {
    // Convert application.loanAmount from string to integer
    const loanAmount = parseInt(application.loanAmount, 10) || 0;
    return total + loanAmount;
  }, 0);
});

const averageLoanAmount = computed(() => {
  return applications.value.length > 0 ? totalLoanAmount.value / applications.value.length : 0;
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
console.log('2Total Loan Amount (Int):', totalLoanAmountInt.value);
console.log('Average Loan Amount (Int):', averageLoanAmountInt.value);
console.log('New Loan Amount Comparison:', newLoanComparison.value);

const modal = useModal<boolean>();
const toast = useToast();

const formData = ref({
  applicantName: '',
  applicantEmail: '',
  applicantMobilePhoneNumber: '',
  applicantAddress: '',
  annualIncomeBeforeTax: 0,
  incomingAddress: '',
  incomingDeposit: 0,
  incomingPrice: 0,
  incomingStampDuty: 0,
  loanAmount: 0,
  loanDuration: 0,
  monthlyExpenses: 0,
  outgoingAddress: '',
  outgoingMortgage: 0,
  outgoingValuation: 0,
  savingsContribution: 0,
});

const submitApplication = async () => {
  try {
    const dataToSend = { ...formData.value };
    console.log('Data being sent to API:', JSON.stringify(dataToSend));
    const response = await api.applications.post(dataToSend);
    console.log('API response:', response);
    console.log('Applicant Name:', formData.value.applicantName);
    console.log('Applicant Email:', formData.value.applicantEmail); 
    console.log('Applicant Mobile Phone Number:', formData.value.applicantMobilePhoneNumber); 
    console.log('Applicant Address:', formData.value.applicantAddress); 
    console.log('Incoming Address:', formData.value.incomingAddress);   
    console.log('Form data being sent:', JSON.stringify(formData.value));

    if (response.success) {
      toast.success('Application Saved Successfully.');
    } else {
      toast.error('Error occurred while saving application');
      // Reset form data if needed
    }
  } catch (error) {
    toast.error('An error occurred while submitting the application');
    console.error(error);
  }
  modal.confirm(false);
};

// Method to handle loan amount change and compare with average
const handleLoanAmountChange = (event: Event) => {
  console.log('Change event triggered');
  const input = document.getElementById("loan_amount").querySelector("input");
  // const input = event.target as HTMLInputElement;

  console.log(input);
  // const loanAmount = parseInt(input.value);
  let loanAmount = input.value;
  loanAmount = loanAmount.replace(/,/g, "");
  // Make sure you are getting the right averageLoanAmountInt
  const averageLoanAmountInt = parseFloat(document.getElementById("average_loan_amount")?.value || "0");
  console.log("Average Loan Amount (Int):", averageLoanAmountInt);

  if (loanAmount > averageLoanAmountInt) {
    toast.success('Loan amount is above average.');
  } else {
    toast.success('Loan amount is below average.');
  }
};


</script>
 

<template>
  <div class="action-section">
    <BCard align-title="center" align-footer="center" align-content="center">
      <template #title>Submit loan application2</template>
      <BSvgIcon name="dashboard-loan" />
      <template #footer>
        <BButton variant="primary" label="Submit application" icon-pos="right" icon="pi pi-chevron-right"
          @click="modal.showModal()" />
      </template>
    </BCard>


      <BModal :visible="modal.isVisible.value" :confirm="modal.confirm">

      <template #header>Submit loan application1</template>

      <form @submit.prevent="submitApplication">
        <!-- Need to change with v-for after change state with object -->
        <label for="applicant_name">Name</label>
<BTextInput v-model="formData.applicantName" id="applicant_name" type="text" required />
     

    
        <label for="applicant_email">Email</label>
        <BTextInput v-model="formData.applicantEmail" id="applicant_email" type="email" required />

        <label for="applicant_mobile_phone_number">Mobile Phone Number</label>
        <BTextInput v-model="formData.applicantMobilePhoneNumber" id="applicant_mobile_phone_number" type="tel"
          required />

        <label for="applicant_address">Applicant Address</label>
        <BTextInput v-model="formData.applicantAddress" id="applicant_address" required />
        <label for="annual_income_before_tax">Annual Income Before Tax</label>
        <BNumberInput v-model="formData.annualIncomeBeforeTax" id="annual_income_before_tax" required />
        <label for="incoming_address">Incoming Address</label>
        <BTextInput v-model="formData.incomingAddress" id="incoming_address" required />
        <label for="incoming_deposit">Incoming deposit</label>
        <BNumberInput v-model="formData.incomingDeposit" id="incoming_deposit" required />

        <label for="incoming_price">Incoming Price</label>
        <BNumberInput v-model="formData.incomingPrice" id="incoming_price" required />
        <label for="incoming_stamp_duty">Incoming Stamp Duty</label>
        <BNumberInput v-model="formData.incomingStampDuty" id="incoming_stamp_duty" required />
        <label for="loan_amount">Loan Amount</label>
        <BNumberInput v-model="formData.loanAmount" id="loan_amount" required @input="handleLoanAmountChange" />


        <label for="loan_duration">Loan Duration</label>
        <BNumberInput v-model="formData.loanDuration" id="loan_duration" required />
        <label for="monthly_expenses">Monthly Expenses</label>
        <BNumberInput v-model="formData.monthlyExpenses" id="monthly_expenses" required />
        <label for="outgoing_address">Outgoing Address</label>
        <BTextInput v-model="formData.outgoingAddress" id="outgoing_address" required />
        <label for="outgoing_mortgage">Outgoing Mortgage</label>
        <BNumberInput v-model="formData.outgoingMortgage" id="outgoing_mortgage" required />
        <label for="outgoing_valuation">Outgoing Valuation</label>
        <BNumberInput v-model="formData.outgoingValuation" id="outgoing_valuation" required />
        <label for="savings_contribution">Savings Contribution</label>
        <BNumberInput v-model="formData.savingsContribution" id="savings_contribution" required />
        <BButton type="submit" variant="primary" label="Submit"></BButton>
      </form>

      <template #footer>
        
        <BButton label="Cancel" @click="modal.confirm(false)"></BButton>
      </template>
    </BModal>


    



  </div>
</template>


<style lang="scss" scoped>
.application-item {
  padding: 1rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}
</style>



<style lang="scss" scoped>
.action-section {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  align-items: stretch;
  container-type: inline-size;

  >* {
    flex: 1 1 100%;
  }

  @container (min-width: 900px) {
    >* {
      flex: 1 1 calc((100% - 2rem) / 3);
    }
  }
}

.b-card {
  height: 100%;
}

.b-icon {
  width: 5rem;
  height: 5rem;
}
</style>
