import { LightningElement, api } from 'lwc';

export default class PaymentPlan extends LightningElement {
  @api balance;
  downPayment = 0;;
  firstPayDate = new Date().toISOString();
  remainingAmount;
  frequencyOptions = [
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Bi-Weekly', value: 'Bi-Weekly' },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Bi-Monthly', value: 'Bi-Monthly' },
    { label: 'Day of Month', value: 'Day of Month' }
  ]

}