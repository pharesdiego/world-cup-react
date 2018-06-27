const random = _ => parseInt(255 - (Math.random() * 100), 10)

const rgba = _ => {
  const R = random(),
        G = random(),
        B = random();

  return `rgba(${R}, ${G}, ${B}, 0.50)`
}

export const gradient = _ => `linear-gradient(45deg, ${rgba()}, ${rgba()}), url(./overlay.png)`;