import { LightningElement } from "lwc";

export default class App extends LightningElement {
  showFilter = true;
  showForecast = false;
  title = "Forecast";
  showFeatures = true;
    filterhidebutton(event) {
        this.showFilter = true;
        this.showForecast = false;

    }

    filteforecastbutton(event) {
      this.showForecast = true;
      this.showFilter = false;
    }

}
