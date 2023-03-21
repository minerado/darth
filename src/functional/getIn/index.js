const getIn = (map, arr) =>
  arr.length === 0
    ? undefined
    : arr.reduce((acc, k, _, arr) => {
        const value = acc && acc[k]

        if (value === undefined) {
          arr = null

          return
        }

        return value
      }, map)

module.exports = getIn
