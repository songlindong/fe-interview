function toUnixPath(path) {
    return path.replace(/\\/g, '/')
}

module.exports = toUnixPath