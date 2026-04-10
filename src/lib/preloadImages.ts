export function preloadImages(urls: Array<string | undefined | null>): Promise<void[]> {
  const uniqueUrls = [...new Set(urls.filter(Boolean) as string[])];

  return Promise.all(
    uniqueUrls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          let settled = false;

          const finish = () => {
            if (settled) return;
            settled = true;
            resolve();
          };

          img.onload = finish;
          img.onerror = finish;
          img.decoding = "async";
          img.src = url;

          if (img.complete) {
            finish();
          }
        })
    )
  );
}