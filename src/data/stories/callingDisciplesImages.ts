import shoreDawn from "@/assets/scenes/calling-disciples/shore-dawn.jpg";
import boatShore from "@/assets/scenes/calling-disciples/boat-shore.jpg";
import openWater from "@/assets/scenes/calling-disciples/open-water.jpg";
import deepWater from "@/assets/scenes/calling-disciples/deep-water.jpg";
import netsShore from "@/assets/scenes/calling-disciples/nets-shore.jpg";
import pathHills from "@/assets/scenes/calling-disciples/path-hills.jpg";

export const callingDisciplesImages: Record<string, string> = {
  start: shoreDawn,
  curse_consequence: shoreDawn,
  leave_consequence: shoreDawn,
  teaching: boatShore,
  refuse_consequence: boatShore,
  catch: openWater,
  refuse_cast_consequence: openWater,
  argue_consequence: openWater,
  miracle: deepWater,
  boast_consequence: deepWater,
  call: netsShore,
  hesitate_consequence: netsShore,
  bargain_consequence: netsShore,
  follow: pathHills,
};
