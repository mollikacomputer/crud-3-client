
const BannerItem = (props) => {
    return (
      <div id={props.slide} className="carousel-item relative w-full h-full ">
        <img src={props.img} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 w-1/3 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 ml-4">
            <h2 className="text-6xl"> {props.title} </h2>
            <p>
              {props.body}
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover more</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href={props.prevArrow} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={props.nextArrow} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;