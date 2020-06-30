/**
 * SlideController class.
 */
class SlideController {
  /**
   * SliderController constructor.
   *
   * @param {{ progressBarNum: HTMLDivElement, progressBar: HTMLDivElement, lastPage: number, currentPage?: number, backButton: HTMLButtonElement, nextButton: HTMLButtonElement, slide: HTMLDivElement }} options
   */
  constructor(options) {
    console.log(options);

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
     * スライド。
     */
    this.slide = options.slide;
  }

  /**
   * コントローラーを起動します。
   */
  boot() {
    // クエリ。
    const query = new URLSearchParams(location.search);

    if (query.has("page")) {
      // page クエリが指定されていたら現在のページを更新。
      this.currentPage = parseInt(query.get("page"));
    }

    this.slide.style.position = "absolute";

    this.resetPageIfInvalid();
    this.updateUI();
    this.showSlide(this.currentPage);

    this.backButton.addEventListener("click", () => this.flipSlide(-1));
    this.nextButton.addEventListener("click", () => this.flipSlide(1));

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
    url.searchParams.set("page", this.currentPage);
    history.pushState(null, null, url.toString());
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
    this.progressBarNum.style.width = `calc(${
      this.lastPage.toString().length * 2 + 1
    }em + 4px)`;
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
    slide.style.display = "none";
  }

  /**
   * 無効な page クエリならそのクエリを削除。
   */
  resetPageIfInvalid() {
    if (!this.isValidPage(this.currentPage)) {
      const url = new URL(location);
      url.searchParams.delete("page");
      history.replaceState(null, null, url.toString());
    }
  }

  /**
   * page が有向なページの数字か返します。
   *
   * @param {number} page ページ。
   */
  isValidPage(page) {
    return page >= 1 && page <= this.lastPage;
  }
}

window.bootCourseSlideController = (options) => {
  const controller = new SlideController(
    Object.assign(
      {
        nextButton: document.getElementById("buttonNext"),
        backButton: document.getElementById("buttonBack"),
        progressBarNum: document.getElementById("progress-number"),
        progressBar: document.getElementById("progress-container"),
        slide: document.getElementsByClassName("slide")[0],
      },
      options
    )
  );
  controller.boot();
};
