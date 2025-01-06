// eslint-disable-next-line import/no-anonymous-default-export
export default {
    '**/*.{js,jsx,ts,tsx}': (filenames) => [
        `npx eslint --fix ${filenames
            .map((filename) => `"${filename}"`)
            .join(' ')}`,
    ],
    '**/*.(md|json)': (filenames) =>
        `npx prettier --write ${filenames
            .map((filename) => `"${filename}"`)
            .join(' ')}`,
    'src/translations/*.(json)': (filenames) => [
        `npx eslint --fix ${filenames
            .map((filename) => `"${filename}"`)
            .join(' ')}`,
    ],
};
