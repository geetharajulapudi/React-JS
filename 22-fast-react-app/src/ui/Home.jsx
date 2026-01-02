import image from "./image.png";
function Home() {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-yellow-600 uppercase">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <img
        // mx-auto(margin x-axis) setting the horizontal margins to auto
        className="aspect-retro  max-w-100 mx-auto"
        src={image}
        alt="user"
      ></img>
      <iframe
        className="aspect-video mx-auto mt-10 "
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      ></iframe>
      {/* <div class="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div> */}
      
    </div>
  );
}

export default Home;
