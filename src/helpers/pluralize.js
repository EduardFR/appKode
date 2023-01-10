const pluralize = (n, one, few, many) => {
  const selectedRule = new Intl.PluralRules("ru-RU").select(n);

  switch (selectedRule) {
    case "one": {
      return one;
    }
    case "few": {
      return few;
    }
    default: {
      return many;
    }
  }
};

export default pluralize;
