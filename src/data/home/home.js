// eslint-disable-next-line import/no-unresolved
import ImageProfile from '@/assets/img/albert-einstein.jpg';
import vuejs from '@/assets/img/services/vuejs.png';
import python from '@/assets/img/services/python.png';
import php from '@/assets/img/services/php.png';

export const HOME_DATA = {
  // FIRST CARD DATA
  FULL_NAME: 'Albert Einstein',
  // to choose your profile image, just put the location it is in the import of "ImageProfile"
  IMAGE_PROFILE: ImageProfile,
  FIRST_DESCRIPTION: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  ],
};

export const SERVICES = {
  // If you want it to have a second card, answer true, if not, answer false
  SECOND_CARD_VISIBLE: true,
  SECOND_TITLE: 'Services for you',
  SECOND_CARD_DATA: [
    {
      IMG: vuejs,
      TITLE: 'Vue.js',
      DESCRIPTION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      IMG: python,
      TITLE: 'Python',
      DESCRIPTION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      IMG: php,
      TITLE: 'PHP',
      DESCRIPTION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ],
};
