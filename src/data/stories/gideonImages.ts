import winepress from "@/assets/scenes/gideon/winepress-hiding.jpg";
import oak from "@/assets/scenes/gideon/oak-of-ophrah.jpg";
import threshing from "@/assets/scenes/gideon/threshing-floor.jpg";
import spring from "@/assets/scenes/gideon/spring-harod.jpg";
import valleyNight from "@/assets/scenes/gideon/midian-valley-night.jpg";
import torches from "@/assets/scenes/gideon/torches-ridge.jpg";
import dawn from "@/assets/scenes/gideon/dawn-victory.jpg";

export const gideonImages: Record<string, string> = {
  start: winepress,
  curse_consequence: winepress,
  flee_consequence: winepress,
  angel_call: oak,
  dismiss_consequence: oak,
  weak_consequence: oak,
  fleece_test: threshing,
  demand_consequence: threshing,
  ignore_consequence: threshing,
  army_reduction: spring,
  refuse_consequence: spring,
  hide_consequence: spring,
  night_attack: valleyNight,
  charge_consequence: valleyNight,
  wait_consequence: valleyNight,
  victory: torches,
  boast_consequence: torches,
  crown_consequence: torches,
  ending_faithful: dawn,
};
