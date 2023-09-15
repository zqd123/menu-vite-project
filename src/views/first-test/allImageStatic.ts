export interface Image {
  url: string;
  isPerfTest?: boolean;
  selectedColor?: string;
  isTrue?: boolean;
  children?: Image[];
}

export const testImages: Image[] = [
  {
    url: "src/assets/first-test/t1.0",
    children: [
      {
        url: "src/assets/first-test/t1.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t1.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t1.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t1.4",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/t1.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t1.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/t2.0",
    children: [
      {
        url: "src/assets/first-test/t2.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t2.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t2.3",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/t2.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t2.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/t2.6",
        isTrue: false,
      },
    ],
  },
];
export const images: Image[] = [
  {
    url: "src/assets/first-test/1.0",
    children: [
      {
        url: "src/assets/first-test/1.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/1.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/1.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/1.4",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/1.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/1.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/2.0",
    children: [
      {
        url: "src/assets/first-test/2.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/2.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/2.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/2.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/2.5",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/2.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/3.0",
    children: [
      {
        url: "src/assets/first-test/3.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/3.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/3.3",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/3.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/3.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/3.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/4.0",
    children: [
      {
        url: "src/assets/first-test/4.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/4.2",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/4.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/4.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/4.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/4.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/5.0",
    children: [
      {
        url: "src/assets/first-test/5.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/5.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/5.3",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/5.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/5.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/5.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/6.0",
    children: [
      {
        url: "src/assets/first-test/6.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/6.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/6.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/6.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/6.5",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/6.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/7.0",
    children: [
      {
        url: "src/assets/first-test/7.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/7.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/7.3",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/7.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/7.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/7.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/8.0",
    children: [
      {
        url: "src/assets/first-test/8.1",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/8.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/8.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/8.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/8.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/8.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/9.0",
    children: [
      {
        url: "src/assets/first-test/9.1",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/9.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/9.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/9.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/9.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/9.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/10.0",
    children: [
      {
        url: "src/assets/first-test/10.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/10.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/10.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/10.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/10.5",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/10.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/11.0",
    children: [
      {
        url: "src/assets/first-test/11.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/11.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/11.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/11.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/11.5",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/11.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/12.0",
    children: [
      {
        url: "src/assets/first-test/12.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/12.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/12.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/12.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/12.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/12.6",
        isTrue: true,
      },
    ],
  },
  {
    url: "src/assets/first-test/13.0",
    children: [
      {
        url: "src/assets/first-test/13.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/13.2",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/13.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/13.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/13.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/13.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/14.0",
    children: [
      {
        url: "src/assets/first-test/14.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/14.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/14.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/14.4",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/14.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/14.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/15.0",
    children: [
      {
        url: "src/assets/first-test/15.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/15.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/15.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/15.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/15.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/15.6",
        isTrue: true,
      },
    ],
  },
  {
    url: "src/assets/first-test/16.0",
    children: [
      {
        url: "src/assets/first-test/16.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/16.2",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/16.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/16.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/16.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/16.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/17.0",
    children: [
      {
        url: "src/assets/first-test/17.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/17.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/17.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/17.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/17.5",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/17.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/18.0",
    children: [
      {
        url: "src/assets/first-test/18.1",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/18.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/18.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/18.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/18.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/18.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/19.0",
    children: [
      {
        url: "src/assets/first-test/19.1",
        isTrue: true,
      },
      {
        url: "src/assets/first-test/19.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/19.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/19.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/19.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/19.6",
        isTrue: false,
      },
    ],
  },
  {
    url: "src/assets/first-test/20.0",
    children: [
      {
        url: "src/assets/first-test/20.1",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/20.2",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/20.3",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/20.4",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/20.5",
        isTrue: false,
      },
      {
        url: "src/assets/first-test/20.6",
        isTrue: true,
      },
    ],
  },
];
