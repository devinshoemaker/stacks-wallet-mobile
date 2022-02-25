// /* eslint-disable @typescript-eslint/no-explicit-any */
// import InterUiMedium from '../assets/fonts/Inter-Medium.woff2';
// import InterUiRegular from '../assets/fonts/Inter-Regular.woff2';
// import InterUiSemiBold from '../assets/fonts/Inter-SemiBold.woff2';
// import OpenSauceSansMedium from '../assets/fonts/opensaucesans-medium-webfont.woff2';
// import OpenSauceSansRegular from '../assets/fonts/opensaucesans-regular-webfont.woff2';

// function getFontAssetPath(name: string) {
//   return `url(${name})`;
// }

// export async function loadFonts(): Promise<void> {
//   const interRegular = new FontFace('Inter', getFontAssetPath(InterUiRegular), {
//     weight: '400',
//   });
//   const interMedium = new FontFace('Inter', getFontAssetPath(InterUiMedium), {
//     weight: '500',
//   });
//   const interSemiBold = new FontFace('Inter', getFontAssetPath(InterUiSemiBold), {
//     weight: '600',
//   });
//   const openSauceRegular = new FontFace('Open Sauce', getFontAssetPath(OpenSauceSansRegular), {
//     weight: '400',
//   });

//   const openSauceMedium = new FontFace('Open Sauce', getFontAssetPath(OpenSauceSansMedium), {
//     weight: '500',
//   });

//   await Promise.all([
//     interRegular.load(),
//     interMedium.load(),
//     interSemiBold.load(),
//     openSauceRegular.load(),
//     openSauceMedium.load(),
//   ]);

//   (document as any).fonts.add(interRegular);
//   (document as any).fonts.add(interMedium);
//   (document as any).fonts.add(interSemiBold);
//   (document as any).fonts.add(openSauceRegular);
//   (document as any).fonts.add(openSauceMedium);
// }
