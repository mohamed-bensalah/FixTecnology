function DarkVariantExample() {
  return (
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/image/moto_g5_plus_5.jpg"
            alt="Los Angeles"
            class="d-block w-100"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="/image/best-mobile-repairing-institute-mumbai-990x500-1-990x500.jpg"
            alt="Chicago"
            class="d-block w-100"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="/image/piece-detachee_smartphone.png"
            alt="New York"
            class="d-block w-100"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="/image/best-mobile-repairing-institute-mumbai-990x500-1-990x500.jpg"
            alt="New York"
            class="d-block w-100"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="/image/piece-detachee_smartphone.png"
            alt="New York"
            class="d-block w-100"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="/image/mobile-repairing-course-mumbai-hindi-990x500.jpg"
            alt="New York"
            class="d-block w-100"
          ></img>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default DarkVariantExample;
