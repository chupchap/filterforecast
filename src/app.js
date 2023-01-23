import { LightningElement } from "lwc";


export default class App extends LightningElement {
  showFilter = true;
  showForecast = false;
  title = "Forecast";
  showFeatures = true;

  get options() {
        return [
            { label: 'Value 1', value: 'value1' },
            { label: 'Value 2', value: 'value2' },
            { label: 'Value 3', value: 'value3' },
            { label: 'Value 4', value: 'value4' },
            { label: 'Value 5', value: 'value5' },
            { label: 'Value 6', value: 'value6' },
            { label: 'Value 6', value: 'value7' },
            { label: 'Value 7', value: 'value8' },            
        ];}

  handle_Record_Submit(event){
        event.preventDefault();
        const fields = event.detail.fields;
 
        // Validating a lightning-combobox field 
        // to validate lightning-combobox (all lightning-combobox) tag in the form.
 
        const All_Compobox_Valid = [...this.template.querySelectorAll('lightning-combobox')]
            .reduce((validSoFar, input_Field_Reference) => {
                input_Field_Reference.reportValidity();
                return validSoFar && input_Field_Reference.checkValidity();
            }, true);
 
        if(All_Compobox_Valid){
            // This means all required fields or other validations on combobox fields are entered correctly.
            // you can assign field value to any field using the fields constant that is assigned above.
            // once assighed submit the lightning-record-edit-form with fields.
            
            this.showForecast = true;
            this.showFilter = false;
        }
        else{
            // show toast error message if required
            /*
            const event = new ShowToastEvent({
                title : 'Error',
                message : 'Please select a value to filter the forecast',
                variant : 'error'
            });
            this.dispatchEvent(event);
            */
        }
    }

  filterhidebutton(event) {
        this.showFilter = true;
        this.showForecast = false;

    }

  filteforecastbutton(event) {
      this.showForecast = true;
      this.showFilter = false;
    }

}
