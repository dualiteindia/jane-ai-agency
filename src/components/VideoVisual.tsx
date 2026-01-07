import assets from "../data/assets.json";

const VideoVisual = () => {
  return (
    <div className="relative w-full aspect-[2/1] md:aspect-[2.4/1] rounded-[2rem] overflow-hidden bg-gray-200 isolate">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Using a high-quality abstract gradient video as placeholder */}
        <source src={assets.pexels.videos.abstract_gradient} type="video/mp4" />
        {/* Fallback gradient if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-pink-400 to-blue-400" />
      </video>

      {/* 
        Dot Grid Overlay 
        We create a radial gradient pattern that mimics holes.
        The 'white' parts of the gradient will be the dots.
        Wait, in the reference, the dots are white, and the background is the video?
        OR the dots are holes revealing the video?
        
        Looking at the reference: It's a colorful rectangle with white dots on top.
        So we place the video, then overlay a grid of white dots.
      */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.85) 30%, transparent 31%)",
          backgroundSize: "30px 30px", // Adjust spacing of dots
          backgroundPosition: "center",
        }}
      />

      {/* 
        Alternative Interpretation: 
        If the dots are supposed to be the video (holes in a white mask), 
        we would invert the logic. But the reference shows a colorful rectangle 
        with white dots. The dots look like they are floating on the video.
        
        Let's refine the opacity. The dots in the image are quite opaque white.
      */}
    </div>
  );
};

export default VideoVisual;
