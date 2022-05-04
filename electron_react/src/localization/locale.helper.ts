import { InitOptions } from 'i18next';
import path from 'path';

export interface ILanguageEntity {
  localized: string;
  english: string;
  disabled?: boolean;
}

export abstract class LocaleHelper {
  private static languageMap = new Map<string, ILanguageEntity>([
    ['en', { english: 'English', localized: 'English' }],
    ['ru', { english: 'Русский', localized: 'Russian' }],
    ['de', { english: 'Deutsche', localized: 'German' }],
  ]);

  public static GetLanguages(): Map<string, ILanguageEntity> {
    return LocaleHelper.languageMap;
  }

  public static GetBaseOptions(): InitOptions {
    // On Mac, the folder for resources isn't
    // in the same directory as Linux/Windows;
    // https://www.electron.build/configuration/contents#extrafiles
    const isMac = process.platform === 'darwin';
    const isDev = process.env.NODE_ENV === 'development';
    let prependPath = !isDev ? process.resourcesPath : '.';
    if (isMac && !isDev) {
      prependPath = path.join(process.resourcesPath, '..');
    }

    return {
      backend: {
        loadPath: `${prependPath}/assets/locales/{{lng}}/{{ns}}.json`,
        addPath: `${prependPath}/assets/locales/{{lng}}/{{ns}}.missing.json`,
      },
      saveMissing: true,
      saveMissingTo: 'current',
      lng: 'en',
      fallbackLng: false, // set to false when generating translation files locally
      supportedLngs: [...LocaleHelper.languageMap.keys()],
      ns: 'translation',
    };
  }

  // static whitelistMap = {
  //   af: 'Afrikaans', // Afrikaans
  //   ar: 'عربى', // Arabic
  //   am: 'አማርኛ', // Amharic
  //   bg: 'български', // Bulgarian
  //   ca: 'Català', // Catalan
  //   cs: 'čeština', // Czech
  //   da: 'Dansk', // Danish
  //   de: 'Deutsche', // German
  //   el: 'Ελληνικά', // Greek
  //   en: 'English',
  //   es: 'Español', // Spanish
  //   et: 'Eestlane', // Estonian
  //   fa: 'فارسی', // Persian
  //   fi: 'Suomalainen', // Finnish
  //   fil: 'Pilipino', // Filipino
  //   fr: 'Français', // French
  //   gu: 'ગુજરાતી', // Gujarati
  //   he: 'עברית', // Hebrew
  //   hi: 'हिंदी', // Hindi
  //   hr: 'Hrvatski', // Croatian
  //   hu: 'Magyar', // Hungarian
  //   id: 'Indonesia', // Indonesian
  //   it: 'Italiano', // Italian
  //   ja: '日本語', // Japanese
  //   kn: 'ಕನ್ನಡ', // Kannada
  //   ko: '한국어', // Korean
  //   lt: 'Lietuvis', // Lithuanian
  //   lv: 'Latvietis', // Latvian
  //   ml: 'മലയാളം', // Malayalam
  //   mr: 'मराठी', // Marathi
  //   ms: 'Melayu', // Malay
  //   nl: 'Nederlands', // Dutch
  //   no: 'norsk', // Norwegian
  //   pl: 'Polskie', // Polish
  //   pt: 'Português', // Portuguese
  //   ro: 'Română', // Romanian
  //   ru: 'Pусский', // Russian
  //   sk: 'Slovenský', // Slovak
  //   sr: 'Српски', // Serbian
  //   sv: 'Svenska', // Swedish
  //   sw: 'Kiswahili', // Swahili
  //   ta: 'தமிழ்', // Tamil
  //   te: 'తెలుగు', // Telugu
  //   th: 'ไทย', // Thai
  //   tr: 'Türk', // Turkish
  //   uk: 'Українська', // Ukranian
  //   vi: 'Tiếng Việt', // Vietnamese
  //   zh_CN: '简体中文', // Chinese
  // };
}
