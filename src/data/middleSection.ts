interface MiddleSection {
  id: number;
  heading: string;
  info: string;
  imgUrlDesktop: string;
  imageUrlMob: string;
  buttonText: string;
}

export const middleSectionItems: MiddleSection[] = [
  {
    id: 1,
    heading: 'Transform your brand',
    info: ' We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing fro you.',
    imgUrlDesktop: 'egg-sec',
    imageUrlMob: 'egg-sec-mob',
    buttonText: 'Learn More',
  },
  {
    id: 2,
    heading: 'stand out to the right audience',
    info: 'using a collaborative formula of designers, researchers, photographers,videographers,and copywriters well build and extend your brand in digital places.',
    imgUrlDesktop: 'stand-out',
    imageUrlMob: 'stand-out-mob',
    buttonText: 'Learn More',
  },
];
