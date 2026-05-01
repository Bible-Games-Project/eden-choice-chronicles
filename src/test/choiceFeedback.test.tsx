import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import GameScene from "@/components/GameScene";
import { shuffleChoices } from "@/lib/shuffleChoices";
import { StoryChoice } from "@/data/stories/creation";
import { creationScenes } from "@/data/stories/creation";
import { adamEveScenes } from "@/data/stories/adamEve";
import { cainAbelScenes } from "@/data/stories/cainAbel";
import { noahScenes } from "@/data/stories/noah";
import { babelScenes } from "@/data/stories/babel";
import { abrahamScenes } from "@/data/stories/abraham";
import { abrahamEgyptScenes } from "@/data/stories/abrahamEgypt";
import { abrahamLotScenes } from "@/data/stories/abrahamLot";
import { sodomScenes } from "@/data/stories/sodom";
import { sacrificeIsaacScenes } from "@/data/stories/sacrificeIsaac";
import { rebekahScenes } from "@/data/stories/rebekah";
import { jacobEsauScenes } from "@/data/stories/jacobEsau";
import { jacobsDreamScenes } from "@/data/stories/jacobsDream";
import { jacobWrestlesScenes } from "@/data/stories/jacobWrestles";
import { josephSoldScenes } from "@/data/stories/josephSold";
import { josephPotipharScenes } from "@/data/stories/josephPotiphar";
import { josephPrisonScenes } from "@/data/stories/josephPrison";
import { josephDreamsScenes } from "@/data/stories/josephDreams";
import { josephBrothersEgyptScenes } from "@/data/stories/josephBrothersEgypt";
import { josephReconcilesScenes } from "@/data/stories/josephReconciles";
import { birthMosesScenes } from "@/data/stories/birthMoses";
import { mosesFleesScenes } from "@/data/stories/mosesFlees";
import { burningBushScenes } from "@/data/stories/burningBush";

const GREEN_BG = "rgba(74, 222, 128, 0.35)";
const RED_BG = "rgba(248, 113, 113, 0.30)";

const allStories = {
  creation: creationScenes,
  adamEve: adamEveScenes,
  cainAbel: cainAbelScenes,
  noah: noahScenes,
  babel: babelScenes,
  abraham: abrahamScenes,
  abrahamEgypt: abrahamEgyptScenes,
  abrahamLot: abrahamLotScenes,
  sodom: sodomScenes,
  sacrificeIsaac: sacrificeIsaacScenes,
  rebekah: rebekahScenes,
  jacobEsau: jacobEsauScenes,
  jacobsDream: jacobsDreamScenes,
  jacobWrestles: jacobWrestlesScenes,
  josephSold: josephSoldScenes,
  josephPotiphar: josephPotipharScenes,
  josephPrison: josephPrisonScenes,
  josephDreams: josephDreamsScenes,
  josephBrothersEgypt: josephBrothersEgyptScenes,
  josephReconciles: josephReconcilesScenes,
  birthMoses: birthMosesScenes,
  mosesFlees: mosesFleesScenes,
  burningBush: burningBushScenes,
};

describe("answer correctness flags", () => {
  it("marks every answer in every story with explicit isCorrect", () => {
    Object.entries(allStories).forEach(([storyName, scenes]) => {
      Object.values(scenes).forEach((scene) => {
        scene.choices.forEach((choice) => {
          expect(typeof choice.isCorrect, `${storyName}:${scene.id}:${choice.text}`).toBe("boolean");
        });
      });
    });
  });

  it("keeps correctness attached to choices after shuffling", () => {
    const choices = creationScenes.start.choices;
    const shuffled = shuffleChoices(choices, "creation:start:feedback-test");

    expect(shuffled).toHaveLength(choices.length);
    shuffled.forEach((choice) => {
      const original = choices.find((candidate) => candidate.text === choice.text);
      expect(choice.isCorrect).toBe(original?.isCorrect);
    });
  });
});

describe("clicked answer feedback", () => {
  const renderChoiceScene = (choices: StoryChoice[]) => {
    render(
      <GameScene
        title="Feedback Test"
        text="Choose carefully."
        choices={choices}
        onChoice={() => {}}
        onComplete={() => {}}
        stepCount={1}
      />,
    );
  };

  it("turns the clicked correct button green regardless of position", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const choices: StoryChoice[] = [
      { text: "Wrong first", nextScene: "x", isCorrect: false, sentiment: "negative" },
      { text: "Correct second", nextScene: "x", isCorrect: true, sentiment: "positive" },
      { text: "Wrong third", nextScene: "x", isCorrect: false, sentiment: "negative" },
    ];

    vi.useFakeTimers();
    renderChoiceScene(choices);
    vi.advanceTimersByTime(4_000);

    const clicked = screen.getByRole("button", { name: "Correct second" });
    await user.click(clicked);

    await waitFor(() => expect(clicked).toHaveStyle({ backgroundColor: GREEN_BG }));
    expect(screen.getByRole("button", { name: "Wrong first" })).not.toHaveStyle({ backgroundColor: RED_BG });
    expect(screen.getByRole("button", { name: "Wrong third" })).not.toHaveStyle({ backgroundColor: RED_BG });
    vi.useRealTimers();
  });

  it("turns the clicked incorrect button red regardless of position", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const choices: StoryChoice[] = [
      { text: "Correct first", nextScene: "x", isCorrect: true, sentiment: "positive" },
      { text: "Wrong second", nextScene: "x", isCorrect: false, sentiment: "negative" },
      { text: "Correct third", nextScene: "x", isCorrect: true, sentiment: "positive" },
    ];

    vi.useFakeTimers();
    renderChoiceScene(choices);
    vi.advanceTimersByTime(4_000);

    const clicked = screen.getByRole("button", { name: "Wrong second" });
    await user.click(clicked);

    await waitFor(() => expect(clicked).toHaveStyle({ backgroundColor: RED_BG }));
    expect(screen.getByRole("button", { name: "Correct first" })).not.toHaveStyle({ backgroundColor: GREEN_BG });
    expect(screen.getByRole("button", { name: "Correct third" })).not.toHaveStyle({ backgroundColor: GREEN_BG });
    vi.useRealTimers();
  });
});