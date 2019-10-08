module.exports = {
    transform: {
        '^.+\\.[t|j]sx?$': ['babel-jest', { rootMode: 'upward' }]
    },
}
