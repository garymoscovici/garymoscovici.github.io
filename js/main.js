(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  const mainVideo = document.querySelector("#main-video");
  const videoTitle = document.querySelector("#video-title");
  const videoDesc = document.querySelector("#video-desc");
  const videoThumbsContainer = document.querySelector("#video-thumbs");

  function renderVideos(videos) {
    if (!videoThumbsContainer || !mainVideo) return;

    if (!Array.isArray(videos) || !videos.length) {
      videoThumbsContainer.innerHTML = "<div class=\"no-videos\">No videos yet. Add items to data/videos.json.</div>";
      mainVideo.style.display = "none";
      if (videoTitle) videoTitle.textContent = "";
      if (videoDesc) videoDesc.textContent = "";
      return;
    }

    mainVideo.style.display = "";
    videoThumbsContainer.innerHTML = "";

    videos.forEach((video, index) => {
      const btn = document.createElement("button");
      btn.className = "video-thumb";
      if (index === 0) btn.classList.add("active");
      btn.setAttribute("data-video-id", video.id);
      btn.setAttribute("data-title", video.title || "");
      btn.setAttribute("data-desc", video.desc || "");

      const img = document.createElement("img");
      img.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
      img.alt = video.title ? `${video.title} thumbnail` : "Video thumbnail";

      btn.appendChild(img);
      videoThumbsContainer.appendChild(btn);

      btn.addEventListener("click", () => {
        mainVideo.setAttribute(
          "src",
          `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`
        );
        if (videoTitle) videoTitle.textContent = video.title || "";
        if (videoDesc) videoDesc.textContent = video.desc || "";

        videoThumbsContainer.querySelectorAll(".video-thumb").forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    const first = videos[0];
    mainVideo.setAttribute(
      "src",
      `https://www.youtube.com/embed/${first.id}?rel=0&modestbranding=1`
    );
    if (videoTitle) videoTitle.textContent = first.title || "";
    if (videoDesc) videoDesc.textContent = first.desc || "";
  }

  if (mainVideo && videoThumbsContainer) {
    const source = videoThumbsContainer.getAttribute("data-source") || "data/videos.json";
    fetch(source)
      .then((res) => res.json())
      .then((videos) => renderVideos(videos))
      .catch(() => {
        renderVideos([]);
      });
  }

  const galleries = document.querySelectorAll(".image-gallery");
  galleries.forEach((gallery) => {
    const mainImage = gallery.querySelector(".gallery-main img");
    const thumbs = gallery.querySelectorAll("[data-full-src]");

    if (!mainImage || !thumbs.length) return;

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const fullSrc = thumb.getAttribute("data-full-src");
        const alt = thumb.getAttribute("data-alt") || "Artwork";

        mainImage.classList.remove("is-zooming");
        void mainImage.offsetWidth;
        mainImage.src = fullSrc;
        mainImage.alt = alt;
        mainImage.classList.add("is-zooming");

        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  });
})();
