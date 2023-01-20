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

  filterhidebutton(event) {
        this.showFilter = true;
        this.showForecast = false;

    }

  filteforecastbutton(event) {
      this.showForecast = true;
      this.showFilter = false;
    }

}
