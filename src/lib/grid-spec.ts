/** Figma measurements — Homepage / web (1512×1227, node 365:1289) */

export const homepage = {
  frameWidth: 1512,
  intro: {
    top: 172,
    left: 483,
    width: 475,
    textWidth: 542,
  },
  divider: {
    top: 362,
    leftCorner: 397.66,
    rightCorner: 1109.66,
    get width() {
      return this.rightCorner - this.leftCorner;
    },
  },
  projects: {
    top: 417,
    left: 483,
    width: 534,
  },
  textGap: 11,
  sectionGap: 30,
  projectItemGap: 6,
  projectsPaddingTop: 55, // 417 - 362
} as const;

export const contentMaxWidth = `${homepage.projects.width / 16}rem`; // 33.375rem
export const introTextMaxWidth = `${homepage.intro.textWidth / 16}rem`; // 33.875rem
export const dividerMaxWidth = `${homepage.divider.width / 16}rem`; // 44.5rem
