class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    return {
      ...rawObject,
      valueOf() {
        return rawObject.age;
      },
    };
  }

  getEnhancedObject2(rawObject) {
    return {
      ...rawObject,
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`;
      },
    };
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    return {
      ...rawObject,
      [Symbol.toPrimitive](coercionType) {
        const types = {
          number: rawObject.age,
          string: `[name="${rawObject.name}",age=${rawObject.age}]`,
        };

        return types[coercionType] || types.string;
      },
    };
  }
}

module.exports = ObjectMethodsService;
