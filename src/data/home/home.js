// eslint-disable-next-line import/no-unresolved
import ImageProfile from '../../assets/img/albert-einstein.jpg';

// eslint-disable-next-line import/prefer-default-export
export const HOME_DATA = {
  FULL_NAME: 'Albert Einstein',
  // to choose your profile image, just put the location it is in the import of "ImageProfile"
  IMAGE_PROFILE() {
    return ImageProfile;
  },
  DESCRIPTION: 'Lorem ipsum dolor sit amet, '
    + 'consectetur adipiscing elit, '
    + 'sed do eiusmod tempor incididunt ut '
    + 'labore et dolore magna aliqua. Ut enim ad '
    + 'minim veniam, quis nostrud exercitation '
    + 'ullamco laboris nisi ut aliquip ex ea commodo '
    + 'consequat. Duis aute irure dolor in reprehenderit '
    + 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
};
