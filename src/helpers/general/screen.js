/**
 * Detect if the screen is smaller than the specified breakpoint
 * @param windowSize
 * @param breakpoint
 * @returns {boolean}
 */
export default function narrowScreen(windowSize = {}, breakpoint = 500) {
  return windowSize.x < breakpoint;
}
