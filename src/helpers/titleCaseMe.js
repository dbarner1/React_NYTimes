function titleCaseMe(string) {
    if(string) {
      return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
}

export {titleCaseMe};
