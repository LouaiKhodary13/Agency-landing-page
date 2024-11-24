interface testimonialsList {
  id: number;
  img: string;
  info: string;
  name: string;
  position: string;
}

const testimonialsListItems: testimonialsList[] = [
  {
    id: 1,
    img: '/assets/image-emily.jpg',
    info: 'We put our trust in SunnySide and they delivered,making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    position: 'Marketing Director',
  },
  {
    id: 2,
    img: '/assets/image-thomas.jpg',
    info: 'SunnySide enthusiasm coupled with their keen interest in our brands success made it a satisfying and enjoyable experience',
    name: 'Thomas S.',
    position: 'Chief Operating Officer',
  },
  {
    id: 3,
    img: '/assets/image-jennie.jpg',
    info: 'Incredible end result! Our sales increased over 400% when we worked with SunnySide. Highly recommended!',
    name: 'Jennie F.',
    position: 'Business Owner',
  },
];

export default testimonialsListItems;
