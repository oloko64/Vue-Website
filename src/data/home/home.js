// eslint-disable-next-line import/no-unresolved
import ImageProfile from '../../assets/img/albert-einstein.jpg';
import vuejs from '../../assets/img/services/vuejs.png';
import python from '../../assets/img/services/python.png';
import php from '../../assets/img/services/php.png';

// eslint-disable-next-line import/prefer-default-export
export const HOME_DATA = {
  // FIRST CARD DATA
  FULL_NAME: 'Albert Einstein',
  // to choose your profile image, just put the location it is in the import of "ImageProfile"
  IMAGE_PROFILE() {
    return ImageProfile;
  },
  FIRST_DESCRIPTION: [
    // eslint-disable-next-line no-multi-str
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    // eslint-disable-next-line no-multi-str
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    // eslint-disable-next-line no-multi-str
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  ],
  // If you want it to have a second card, answer true, if not, answer false
  SECOND_CARD: true,
  // SECOND CARD DATA
  SECOND_TITLE: 'Services for you',
  SERVICES_IMG: [
    vuejs,
    python,
    php,
  ],
  // To add your image to the array, you need to import at the beginning of this file.
  SERVICES_TITLE: [
    'Vue.js',
    'Python',
    'PHP',
  ],
  SERVICES_DESCRIPTION: [
    // eslint-disable-next-line no-multi-str
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    // eslint-disable-next-line no-multi-str
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    // eslint-disable-next-line no-multi-str
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  ],
};
