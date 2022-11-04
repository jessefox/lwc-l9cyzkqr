import { LightningElement, api } from 'lwc';

export default class ApprovalRequest extends LightningElement {
  @api discount;
  @api amount;

  handleRequestApprovalClick() {
    let allValid = this.template.querySelector('lightning-input').reduce((isValid, input) => {
      if (input.name === 'discount' || input.name === 'amount') {
        //input.reportValidity();
        return isValid && input.checkValidity();
      }
    }, true);
  }

  handleSaveClick() {

  }
}