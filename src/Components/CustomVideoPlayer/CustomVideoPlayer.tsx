import { useRef, useState, useEffect } from "react";
import * as Slider from "@radix-ui/react-slider";
import { toPersianNumber } from "../../Utils/ToPersianNumber";

interface Props {
  id: number | null;
  src: string;
  playOrPause: "Play" | "Pause";
  setPlayOrPause: React.Dispatch<React.SetStateAction<"Play" | "Pause">>;
}

const CustomVideoPlayer = ({ src, id, playOrPause, setPlayOrPause }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [showControls, setShowControls] = useState<boolean>(true);

  const clickOnVideo = () => {
    setShowControls((prev) => !prev);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setPlayOrPause("Play");
    } else {
      video.pause();
      setIsPlaying(false);
      setPlayOrPause("Pause");
    }
    setShowControls(true);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setProgress(video.currentTime);
    setDuration(video.duration);
  };

  const handleSeek = (val: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = val[0];
    setProgress(val[0]);
  };

  const handleVolumeChange = (val: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = val[0];
    setVolume(val[0]);
    setIsMuted(val[0] === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (video.muted) {
      setVolume(0);
    } else {
      setVolume(1);
    }
  };

  const changeRate = (value: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = value;
    setPlaybackRate(value);
  };

  const toggleFullScreen = () => {
    const videoContainer = containerRef.current;
    if (!videoContainer) return;

    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    if (playOrPause === "Play") {
      videoRef.current?.play();
      setShowControls(true);
      setIsPlaying(true);
      setIsMuted(false);
      setDuration(0);
      setVolume(1);
      setPlaybackRate(1);
      setProgress(0);

      const timer = setTimeout(() => {
        setShowControls(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      videoRef.current?.pause();
      setShowControls(true);
      setIsPlaying(false);
    }
  }, [playOrPause]);

  return (
    <div ref={containerRef} className="relative bg-black/95 w-full h-full">
      <video
        key={id}
        src={src}
        onClick={clickOnVideo}
        ref={videoRef}
        onEnded={() => (setIsPlaying(false), setPlayOrPause("Pause"))}
        onTimeUpdate={handleTimeUpdate}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {showControls && (
        <button
          type="button"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50
          h-14 w-14 flex items-center justify-center"
          onClick={togglePlay}
        >
          <i
            className={`bi ${
              isPlaying ? "bi-pause-fill" : "bi-play-fill"
            } text-white leading-none text-2xl`}
          ></i>
        </button>
      )}

      {showControls && (
        <div className="absolute w-full bottom-6 px-5">
          {" "}
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={[progress]}
            max={duration}
            step={0.1}
            onValueChange={handleSeek}
          >
            <Slider.Track className="relative bg-white w-full h-0.5 rounded-md">
              <Slider.Range className="absolute bg-[#FF6905] h-full"></Slider.Range>
            </Slider.Track>

            <Slider.Thumb className="block w-3.5 h-3.5 bg-white border-4 border-[#FF5106] rounded-full" />
          </Slider.Root>
        </div>
      )}

      {showControls && (
        <div className="absolute w-full bottom-11 px-4">
          <i
            className="bi bi-fullscreen text-[17px] text-white px-1"
            onClick={toggleFullScreen}
          ></i>
        </div>
      )}

      {showControls && (
        <div className="absolute w-full bottom-0.5 px-5 flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <Slider.Root
              className="relative flex items-center select-none touch-none"
              value={[volume]}
              max={1}
              step={0.05}
              onValueChange={handleVolumeChange}
            >
              <Slider.Track className="relative h-0.5 w-10 bg-white/80">
                <Slider.Range className="absolute bg-[#FF5106] h-full"></Slider.Range>
              </Slider.Track>

              <Slider.Thumb
                className="block w-2.5 h-2.5 bg-white border-[3px] border-[#FF5106]
                 rounded-full"
              ></Slider.Thumb>
            </Slider.Root>

            <i
              className={`bi ${
                !isMuted ? "bi-volume-up" : "bi-volume-mute"
              } text-white text-lg leading-none`}
              onClick={toggleMute}
            ></i>
          </div>

          <select
            value={playbackRate}
            onChange={(event) => changeRate(Number(event.target.value))}
            name="playbackRate"
            className="text-xs bg-transparent text-white outline-none"
          >
            <option
              className="bg-gray-100 dark:bg-blackColor text-primaryBlackColor dark:text-white font-bold"
              value={0.5}
            >
              {toPersianNumber(0.5)}
            </option>
            <option
              className="bg-gray-100 dark:bg-blackColor text-primaryBlackColor dark:text-white font-bold"
              value={1}
            >
              {toPersianNumber(1)}
            </option>
            <option
              className="bg-gray-100 dark:bg-blackColor text-primaryBlackColor dark:text-white font-bold"
              value={1.5}
            >
              {toPersianNumber(1.5)}
            </option>
            <option
              className="bg-gray-100 dark:bg-blackColor text-primaryBlackColor dark:text-white font-bold"
              value={2}
            >
              {toPersianNumber(2)}
            </option>
          </select>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
