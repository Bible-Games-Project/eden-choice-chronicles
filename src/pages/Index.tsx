import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import GameScene from "@/components/GameScene";
import { scenes, Choice } from "@/data/scenes";
import { sceneImages } from "@/data/sceneImages";
import { sceneSprites } from "@/data/spriteConfig";
import { useSceneAudio } from "@/hooks/useSceneAudio";
import startImg from "@/assets/scenes/start.jpg";

const Index = () => {
  const [currentScene, setCurrentScene] = useState("start");
  const [stepCount, setStepCount] = useState(1);
  const [started, setStarted] = useState(false);

  const scene = scenes[currentScene];

  const handleChoice = useCallback((choice: Choice) => {
    setCurrentScene(choice.nextScene);
    setStepCount((s) => s + 1);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentScene("start");
    setStepCount(1);
    setStarted(false);
  }, []);

  if (!started) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${startImg})` }}
        />
        <div className="absolute inset-0 bg-foreground/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-md px-4"
        >
          <h1 className="font-display text-3xl md:text-5xl text-primary-foreground tracking-wide mb-4">
            In the Beginning
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gold" />
          </div>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            You are Adam. The first man.<br />
            Paradise awaits.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStarted(true)}
            className="font-display text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-lg border border-gold bg-gold/20 backdrop-blur-sm text-gold hover:bg-gold hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            Enter the Garden
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <GameScene
      title={scene.title}
      text={scene.text}
      choices={scene.choices}
      isFinal={scene.isFinal}
      onChoice={handleChoice}
      onRestart={handleRestart}
      stepCount={stepCount}
      backgroundImage={sceneImages[currentScene]}
      sprites={sceneSprites[currentScene]}
    />
  );
};

export default Index;
