export const splitImgs = (imgLinks) => {
  return imgLinks.split(',');
}

export const randomImg = (imgs) => {
  return imgs[Math.floor(Math.random()*imgs.length)];
}