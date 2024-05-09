const SliderArrow = () => {
  return (
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
      <a href="#slide4" className="btn btn-circle mr-5">
        ❮
      </a>
      <a href="#slide2" className="btn btn-circle">
        ❯
      </a>
    </div>
  );
};

export default SliderArrow;
