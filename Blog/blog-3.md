# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

In TypeScript, Type guards are essential for safely handling different types in a code by narrowing down the possible types of a variable at runtime. This is useful while working with union types, where a variable might hold different types of values. By using type guards, it can be ensured that accessing properties or methods that are valid for the specific type of the variable. So, runtime errors can be reduced and code readability can also be improved.

## Various Types of Type Guards and Their Use Cases

+ **'typeof' Type Guards**

The 'typeof' operator is used to check primitive types like string, number, boolean, symbol, undefined, and bigint. This type guard is useful for simple checks on basic types.

```
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String value:", value);
    } else {
        console.log("Number value:", value);
    }
}
```

**Use Case**: 'typeof' is used when dealing with primitive types that need to be handled differently.

+ **'instanceof' Type Guards**

The 'instanceof' operator checks whether an object is an instance of a specific class or constructor function. It is typically used when dealing with objects created from classes.

```
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function handlePet(pet: Dog | Cat) {
    if (pet instanceof Dog) {
        pet.bark();
    } else if (pet instanceof Cat) {
        pet.meow();
    }
}
```

**Use Case**: Use 'instanceof' when you need to differentiate between instances of different classes.

+ **'in' Type Guards**

The 'in' operator checks if a particular property exists in an object. This is useful when working with objects of different shapes within a union type, where each object might have unique properties.

```
 type NormalUser  = {
    name: string;
   }
   type AdminUser  = {
    name: string;
    role: "admin"
   }

   const getUser = (user: NormalUser | AdminUser) => {
    if('role' in user) {
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }else{
        console.log(`My name is ${user.name}`);
    }
   }
```

**Use Case**: 'in' is used when checking for the presence of a property, especially when working with union types of objects with distinct properties.

+ **User-Defined Type Guards**

User-defined type guards involve creating a custom function that narrows the type by returning a boolean value and using the parameter is Type syntax. This is helpful for complex type-checking logic.

```
interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swim();
    } else {
        animal.fly();
    }
}
``` 

**Use Case**: User-defined type guards is used for complex conditions, where a simple check with 'typeof', 'in', or 'instanceof' is insufficient.


Type guards in TypeScript helps preventing runtime errors, improve code clarity, and are useful in various scenarios depending on the complexity and nature of the type being checked.