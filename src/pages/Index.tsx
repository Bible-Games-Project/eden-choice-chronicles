import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import GameScene from "@/components/GameScene";
import { scenes, Choice } from "@/data/scenes";

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-lg"
        >
          <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-wide mb-4">
            In the Beginning
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-gold" />
          </div>
          <p className="font-body text-xl text-muted-foreground mb-10 leading-relaxed">
            An interactive journey through the Garden of Eden. You are Adam, the first man.
            Explore paradise, name the creatures, and face the choice that changed everything.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStarted(true)}
            className="font-display text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-lg bg-eden text-secondary-foreground hover:bg-eden/90 transition-colors duration-300 cursor-pointer"
          >
            Enter the Garden
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-16 px-4">
      <GameScene
        title={scene.title}
        text={scene.text}
        choices={scene.choices}
        isFinal={scene.isFinal}
        onChoice={handleChoice}
        onRestart={handleRestart}
        stepCount={stepCount}
      />
    </div>
  );
};

export default Index;
