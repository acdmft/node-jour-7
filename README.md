exercises on node of the day 7

## 01 - File System

- Créez un fichier `jour07.txt` contenant le code suivant :
[
	{
		"name": "Jane Doe",
		"email": "jane.doe@example.com"
	},
	{
		"name": "John Smith",
		"email": "john.smith@example.com"
	}
]

- Dans le fichier `js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console

## 02 - Map Double

- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
- Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
- Affichez les valeurs de `double` dans la console

## 03 - Map Names

- Créez une variable `longNames` contenant la valeur suivante :


[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

- Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :


// Résultat attendu :
[
	{
		name: "Jane Doe"
	},
	{
		name: "John Smith"
	}
]


- Affichez les valeurs de `shortNames` dans la console

## 04 - Filter Numbers

- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
- Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
- Affichez les valeurs de `numbers` dans la console

## 05 - Filter Even

- Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
- Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
- Affichez les valeurs de `even` dans la console

## 06 - Cakes

- Créez une variable `cakes` contenant la valeur suivante :

[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

- À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
- Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console

// resultat attendu
[
	
	{
		name: "brownie",
		flavor: "chocolate",
		status: "sold out !"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "sold out !"
	},
]


var cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]

var chocolateCakes = cakes.filter(

    function (element) {
        var isCakeChocolate = element.flavor === "chocolate";

        return isCakeChocolate;
    }

).map(

    function (element) {
        element.status = "sold out!";

        return element;
    }

)

console.log("Just chocolate and sold out", chocolateCakes)
