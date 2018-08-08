function pareINI(string) {
  var currentSection = {name: null, fields: []}
  var categories = [currentSection]

  string.split(/\r?\n/).forEach(function(line) {
    var match
    if (/^\s*(;.*)?$/.test(line)) {
      return;
    }else if(match = line.match(/^\[(.*)\]$/)) {
      currentSection = {name: match[1], fields: []}
      categories.push(currentSection)
    }else if (match = line.match(/^(\w+)=(.*)$/)) {
      currentSection.fields.push({name: match[1],
                                  value: match[2]})
    }else {
      throw new Error("line '" + line + "' is invalid.")
    }
  })
  return categories
}