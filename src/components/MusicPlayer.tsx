import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Using a royalty-free romantic instrumental from a reliable source
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      setIsLoaded(true);
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented, user needs to interact
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2024/11/29/audio_3a5fe2e2ea.mp3"
        preload="auto"
      />
      <motion.button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 1 }}
        aria-label={isMuted ? "Play music" : "Mute music"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;