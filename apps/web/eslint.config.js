import sharedConfig from "@workspace/eslint-config";

export default [
    ...sharedConfig,

    // App-specific overrides for `web`
    {
        files: ["**/*.tsx", "**/*.jsx"],
        rules: {
            "react/jsx-key": "error", // Enforce `key` prop in React elements
        },
    },
];
