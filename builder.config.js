module.exports = {
    appId: 'education.lumi.lumi',
    productName: 'Lumi',
    asar: false,
    icon: 'electron/assets/lumi.icns',
    files: [
        'build/**/*',
        'node_modules/**/*',
        'reporter-client/build/static/js/**/*',
        'scorm-client/**/*',
        'package.json',
        'h5p/**/*',
        'electron/**/*',
        'locales/**/*'
    ],
    mac: {
        category: 'education.lumi.lumi',
        gatekeeperAssess: false,
        entitlements: 'electron/mac/entitlements.mac.plist',
        entitlementsInherit: 'electron/mac/entitlements.mac.plist',
        fileAssociations: {
            ext: 'h5p',
            name: 'H5P'
        },
        target: ['zip', 'dmg'],
        hardenedRuntime: true
    },
    afterSign: 'scripts/notarize.js',
    win: {
        icon: 'electron/assets/lumi.png',
        target: ['nsis'],
        fileAssociations: {
            ext: 'h5p',
            name: 'H5P'
        }
    },
    nsis: {
        oneClick: false,
        perMachine: true,
        allowElevation: true,
        allowToChangeInstallationDirectory: true,
        runAfterFinish: false
    },
    linux: {
        category: 'Utility',
        target: ['AppImage', 'snap', 'deb', 'pacman']
    },
    dmg: {
        sign: false
    },
};
