var gpio = require('rpi-gpio');

const targetGpio = 17;
const LED_PIN = 40; // 40番ピン（GPIO40ではない、GPIO21）
const LED_BLINK_DELAY_MS = 1000;  // 1秒毎にLチカ
const gpioToPinMap = {
  //gpio:pin
  2:3,
  3:5,
  4:7,
  5:29,

  6:31,
  7:26,
  8:24,
  9:21,
  10:19,

  11:23,
  12:32,
  13:33,
  14:8,
  15:10,

  16:37,
  17:11,
}
var ledOn = true;

gpio.setup(gpioToPinMap(targetGpio), gpio.DIR_OUT, () => {

  // LED_BLINK_DELAY_MS毎にLED ON/OFF
  setInterval(() => {
    if(ledOn) {
      // LED ピンをlowに設定
      gpio.write(LED_PIN, false);
      ledOn = false;
    } else {
      // LED ピンをhighに設定
      gpio.write(LED_PIN, true);
      ledOn = true;
    }
  },LED_BLINK_DELAY_MS);
});