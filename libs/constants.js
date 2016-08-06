export const emojiMarkMap = {
	'awful': 1,
	'bad': 2,
	'neutral': 3,
	'good': 4,
	'amazing': 5,
}

export const mouthClassNameMap = {
  'awful': colored => {
    return !!colored
      ? [ 'awful', 'mouth-opened-colored' ]
      : [ 'awful', 'mouth-opened-inactive' ];
  },
  'good': colored => {
    return !!colored
      ? [ 'good', 'good-colored' ]
      : [ 'good', 'good-inactive' ];
  },
  'neutral': colored => {
    return !!colored
      ? [ 'neutral', 'neutral-colored' ]
      : [ 'neutral', 'neutral-inactive' ];
  },
  'bad': colored => {
    return !!colored
      ? [ 'bad', 'bad-colored' ]
      : [ 'bad', 'bad-inactive' ];
  },
  'amazing': colored => {
    return !!colored
      ? [ 'amazing', 'mouth-opened-colored' ]
      : [ 'amazing', 'mouth-opened-inactive' ];
  }
}
