module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    parser: "babel-eslint",
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "FileReaderSync": "readonly",
        "FileReader": "readonly",
        "navigator": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "react/jsx-props-no-spreading": 0,
        "import/prefer-default-export": 1,
        "react/destructuring-assignment": 1,
        "react/jsx-filename-extension": [
            2,
            { "extensions": [".js", ".jsx"] }
        ],
        "no-const-assign": 1,
        "no-this-before-super": 1,
        "no-undef": 1,
        "no-unreachable": 1,
        "no-unused-vars": [2, { "argsIgnorePattern": "^_" }],
        "constructor-super": 1,
        "valid-typeof": 1,
        "global-require": 0,
        "no-console": 0,
        "max-len": 1,
        "no-alert": 0,
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
        "react/prop-types": 1,
        "react/state-in-constructor": 0
    },
    "plugins": [
        "react",
        "import",
        "react-hooks"
    ],
};
