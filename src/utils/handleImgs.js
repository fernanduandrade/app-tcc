export const splitImgs = (imgLinks) => {
  console.log(imgLinks);
  return imgLinks.split(',');
}

export const randomImg = (imgs) => {
  console.log('aaaa', imgs);
  return imgs[Math.floor(Math.random()*imgs.length)];
}