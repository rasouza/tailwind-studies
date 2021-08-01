interface Biography {
  publisher: string;
}

interface Image {
  url: string;
}

export interface Hero {
  id: string;
  name: string;
  image: Image;
  biography: Biography;
}
