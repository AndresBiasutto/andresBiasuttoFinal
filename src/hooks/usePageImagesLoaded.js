import { useEffect, useState } from "react";
import imgUrls from "../data/imgUrls";
import logo from "../assets/icons/logo.png";

const collectImageUrls = (value, urls = new Set()) => {
  if (typeof value === "string") {
    urls.add(value);
    return urls;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectImageUrls(item, urls));
    return urls;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectImageUrls(item, urls));
  }

  return urls;
};

const waitForImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();

    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;

    if (image.complete) {
      resolve();
    }
  });

const waitForDomImages = () => {
  const images = Array.from(document.images);

  if (!images.length) {
    return Promise.resolve();
  }

  return Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }

          const handleLoad = () => {
            image.removeEventListener("load", handleLoad);
            image.removeEventListener("error", handleLoad);
            resolve();
          };

          image.addEventListener("load", handleLoad, { once: true });
          image.addEventListener("error", handleLoad, { once: true });
        })
    )
  );
};

const usePageImagesLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      const urls = [...collectImageUrls(imgUrls), logo];

      await Promise.all([Promise.all(urls.map(waitForImage)), waitForDomImages()]);

      if (isMounted) {
        setIsLoaded(true);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  return isLoaded;
};

export default usePageImagesLoaded;
