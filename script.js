const slider = document.getElementById("pricing-slider");
const cardPrice = document.getElementById("card-price");
const pageViews = document.getElementById("card-header-title");
const customSwitch = document.getElementById("montly-yearly");

const pricingVals = [8, 12, 16, 24, 36];
const pageViewVals = ["10k", "50k", "100k", "500k", "1M"];
cardPrice.textContent = "$ " + parseFloat(pricingVals[slider.value]).toFixed(2);
pageViews.textContent = pageViewVals[slider.value] + " pageviews";

function calculatePrice(checked) {
  let finalPrice = 0;
  const discount = 25;
  if (checked) {
    finalPrice = (parseInt(pricingVals[slider.value]) * discount) / 100;
  } else {
    finalPrice = parseInt(pricingVals[slider.value]);
  }
  cardPrice.textContent = "$ " + parseFloat(finalPrice).toFixed(2);
}

slider.oninput = function () {
  calculatePrice(customSwitch.checked);
  pageViews.textContent = pageViewVals[slider.value] + " pageviews";
};

customSwitch.onchange = function () {
  calculatePrice(customSwitch.checked);
};
