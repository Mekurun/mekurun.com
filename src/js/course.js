/**
 * SlideController class.
 */
class SlideController {
  /**
   * SliderController constructor.
   *
   * @param {{ progressBarNum: HTMLDivElement, progressBar: HTMLDivElement, progressBarCover: HTMLDivElement, lastPage: number, currentPage?: number, backButton: HTMLButtonElement, nextButton: HTMLButtonElement, slideLeft: HTMLDivElement, slideRight: HTMLDivElement, slide: HTMLDivElement, slideCover: HTMLDivElement, fullScreenButton: HTMLDivElement, exitFullScreenButton: HTMLDivElement}} options
   */
  constructor(options) {
    // console.log(options);

    /**
     * 現在のページ。
     */
    this.currentPage =
      typeof options.currentPage === "undefined" ? 1 : options.currentPage;

    /**
     * スライドの最後のページ。
     */
    this.lastPage = options.lastPage;

    /**
     * スライドの進捗バー全体
     */
    this.progressBarCover = options.progressBarCover;

    /**
     * スライドの進行状況。
     */
    this.progressBarNum = options.progressBarNum;

    /**
     * スライドのプログレスバー。
     */
    this.progressBar = options.progressBar;

    /**
     * もどるボタン。
     */
    this.backButton = options.backButton;

    /**
     * すすむボタン。
     */
    this.nextButton = options.nextButton;

    /**
     * スライドの左側
     */
    this.slideLeft = options.slideLeft;

    /**
     * スライドの右側
     */
    this.slideRight = options.slideRight;

    /**
     * スライド。
     */
    this.slide = options.slide;

    /**
     * スライドカバー
     */
    this.slideCover = options.slideCover;

    /**
     * 全画面ボタン
     */
    this.fullScreenButton = options.fullScreenButton;

    /**
     * 全画面解除ボタン
     */
    this.exitFullScreenButton = options.exitFullScreenButton;
  }

  /**
   * コントローラーを起動します。
   */
  boot() {
    // クエリ。
    const query = new URLSearchParams(location.search);

    if (query.has("p")) {
      // p クエリが指定されていたら現在のページを更新。

      const page = query.get("p");

      if (this.isValidPageString(page)) {
        this.currentPage = parseInt(page);
      } else {
        this.deletePageQuery();
      }
    }

    this.slide.style.position = "absolute";

    this.resetPageIfInvalid();
    this.updateUI();
    this.showSlide(this.currentPage);

    this.slideLeft.addEventListener("click", () => this.flipSlide(-1));
    this.slideRight.addEventListener("click", () => this.flipSlide(1));

    this.backButton.addEventListener("click", () => this.flipSlide(-1));
    this.nextButton.addEventListener("click", () => this.flipSlide(1));

    this.progressBarCover.addEventListener("click", (event) =>
      this.changeSlideByBar(event)
    );
    this.progressBarCover.addEventListener("mousemove", (event) =>
      this.previewProgressBar(event)
    );
    this.progressBarCover.addEventListener("mouseleave", () =>
      this.updateProgressBar()
    );

    this.fullScreenButton.addEventListener("click", () =>
      this.fullScreenSwitch()
    );
    this.exitFullScreenButton.addEventListener("click", () =>
      this.fullScreenSwitch()
    );

    document.addEventListener("fullscreenchange", () => this.exitHandler());

    document.addEventListener("webkitfullscreenchange", () =>
      this.exitHandler()
    );

    document.addEventListener("mozfullscreenchange", () => this.exitHandler());

    document.addEventListener("MSFullscreenChange", () => this.exitHandler());

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        this.flipSlide(1);
        return;
      }

      if (event.key === "ArrowLeft") {
        this.flipSlide(-1);
        return;
      }
    });
  }

  /**
   * スライドを flip 分めくります。
   *
   * @param {number} flip めくる数。
   */
  flipSlide(flip) {
    document.activeElement.blur();
    const prevPage = this.currentPage;
    const nextPage = this.currentPage + flip;

    if (!this.isValidPage(nextPage)) {
      // 次のスライドが存在しなければ処理を終了。
      return;
    }

    this.currentPage = nextPage;
    this.updateUI();
    this.hideSlide(prevPage);
    this.showSlide(nextPage);

    const url = new URL(location);
    url.searchParams.set("p", this.currentPage);
    history.replaceState(null, null, url.toString());
  }

  /**
   * 指定されたページのスライド要素を返します。
   *
   * @param {number} page ページ。
   */
  getSlide(page) {
    return document.getElementById(`page-${page}`);
  }

  /**
   * UI の状態を更新します。
   */
  updateUI() {
    this.updateButtons();
    this.updateProgressBar();
  }

  /**
   * ボタンの状態を更新します。
   */
  updateButtons() {
    this.backButton.disabled = this.currentPage === 1;
    this.nextButton.disabled = this.currentPage === this.lastPage;
  }

  /**
   * プログレスバーを更新します。
   */
  updateProgressBar() {
    this.progressBar.style.width = `${
      (this.currentPage / this.lastPage) * 100
    }%`;

    this.progressBarNum.innerHTML = this.currentPage + " / " + this.lastPage;
  }

  /**
   * 指定されたページのスライドを表示します。
   */
  showSlide(page) {
    const slide = this.getSlide(page);
    slide.style.display = "block";
  }

  /**
   * 指定されたページのスライドを隠します。
   */
  hideSlide(page) {
    const slide = this.getSlide(page);
    slide.style.display = "";
  }

  /**
   * クリックされた場所分スライドをすすめます
   */
  changeSlideByBar(mouse) {
    const barwidth = this.progressBarCover.clientWidth;
    const mouseX = mouse.offsetX;
    const page = Math.ceil((mouseX / barwidth) * this.lastPage);
    this.flipSlide(page - this.currentPage);
  }

  /**
   * プログレスバーにマウスオーバーしたらプレビュー表示
   */
  previewProgressBar(mouse) {
    const barwidth = this.progressBarCover.clientWidth;
    const mouseX = mouse.offsetX;
    const page = Math.ceil((mouseX / barwidth) * this.lastPage);
    this.progressBar.style.width = page * (barwidth / this.lastPage) + "px";
  }

  /**
   * 無効な page クエリならそのクエリを削除して現在のページを1にリセット。
   */
  resetPageIfInvalid() {
    if (!this.isValidPage(this.currentPage)) {
      this.deletePageQuery();
      this.currentPage = 1;
    }
  }

  /**
   * page クエリを URL から削除します。
   */
  deletePageQuery() {
    const url = new URL(location);
    url.searchParams.delete("p");
    history.replaceState(null, null, url.toString());
  }

  /**
   * page が有向なページの数字か返します。
   *
   * @param {number} page ページ。
   */
  isValidPage(page) {
    return typeof page === "number" && page >= 1 && page <= this.lastPage;
  }

  /**
   * page が有向なページの文字列か返します。
   *
   * @param {string} page ページ文字列。
   */
  isValidPageString(page) {
    return /^[0-9]+$/.test(page);
  }

  isFullScreen() {
    if (
      (document.FullscreenElement !== undefined &&
        document.FullscreenElement !== null) ||
      (document.webkitFullscreenElement !== undefined &&
        document.webkitFullscreenElement !== null) ||
      (document.msFullscreenElement !== undefined &&
        document.msFullscreenElement !== null)
    ) {
      return true;
    } else {
      return false;
    }
  }

  fullScreenSwitch() {
    this.slideCover.classList.toggle("slideFull");
    if (this.isFullScreen()) {
      document.exitFullscreen();
    } else {
      this.slideCover.requestFullscreen();
    }
    window.updateSlideSize();
  }

  /**
   * フルスクリーン解除時の処理
   */
  exitHandler() {
    if (!this.isFullScreen()) {
      this.slideCover.classList.remove("slideFull");
      window.updateSlideSize();
    }
  }
}

window.bootCourseSlideController = (options) => {
  const controller = new SlideController(
    Object.assign(
      {
        nextButton: document.getElementById("buttonNext"),
        backButton: document.getElementById("buttonBack"),
        slideRight: document.getElementById("slideRight"),
        slideLeft: document.getElementById("slideLeft"),
        progressBarNum: document.getElementById("progress-number"),
        progressBarCover: document.getElementById("progress-bar"),
        progressBar: document.getElementById("progress-container"),
        slide: document.getElementsByClassName("slide")[0],
        slideCover: document.getElementById("slidesCover"),
        fullScreenButton: document.getElementById("buttonFullScreen"),
        exitFullScreenButton: document.getElementById("buttonExitFullScreen"),
      },
      options
    )
  );
  controller.boot();
};

window.updateSlideSize = () => {
  let windowH = window.innerHeight;
  let windowW = window.innerWidth;
  let slides = document.getElementById("slides");
  let navbar = document.getElementById("navbar");
  let slideHeight = windowH - (60 + 30 + 30 + navbar.clientHeight);
  let slideWidth = slideHeight * (16 / 9);
  let slideCover = document.getElementById("slidesCover");
  slides.removeAttribute("style");
  if (slideCover.classList.contains("slideFull")) {
    if (windowH * (16 / 9) < windowW) {
      if (windowW > 730) {
        slides.style.height = windowH + "px";
      }
      slides.style.width = windowH * (16 / 9) + "px";
    } else {
      if (windowW > 730) {
        slides.style.height = windowW * (9 / 16) + "px";
      }
      slides.style.width = windowW + "px";
    }
  } else {
    if (slideWidth < windowW - 40) {
      if (windowW > 730) {
        slides.style.height = slideHeight + "px";
      }
      slides.style.width = slideWidth + "px";
      if (slideWidth > 800) {
        navbar.style.width = slideWidth + "px";
      } else {
        navbar.style.width = "";
      }
    } else {
      if (windowW > 730) {
        slides.style.height = (windowW - 40) * (9 / 16) + "px";
      }
      slides.style.width = windowW - 40 + "px";
      navbar.style.width = "";
    }
  }
};
