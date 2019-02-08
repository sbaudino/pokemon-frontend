
# Pokemon test

Hello. This is the Immfly frontend code test.
While cloning this repository, you will get the base project. If you have enough frontend skills, you will be able to run it locally. First time, you should see this webpage:

<img align="center" src="https://imgur.com/H5GFwW3.png" style="border: 1px solid black" />

## Features to implement


### Style the main list
You have to style the main list like in this image:
<img align="center" src="https://imgur.com/HNu1wmq.png" style="border: 1px solid black" />
Notice that when user hovers a pokemon, its background becomes gray.



### Pokemon detail page
Add the possibility to click on a pokemon and go to the detail page, like in this image:
<img align="center" src="https://imgur.com/1Mbh6mK.png" style="border: 1px solid black" />

Notice that the pokemon detail url is different. It is ``/pokemon/:name``. In the **charizard** example is ``/pokemon/charizard``.

#### Api endpoint
The api endpoint to get the pokemon detail information is ``https://pokeapi.co/api/v2/pokemon/:name``. 

For example:
* **Charizard**: ``https://pokeapi.co/api/v2/pokemon/charizard`` 
* **Bulbasaur**: ``https://pokeapi.co/api/v2/pokemon/bulbasaur`` 

## Demo
You can watch/download the video showing how the app finally should work: <a href="https://mega.nz/#!2JNVlIzb!kmmubCQEUQV0RgZ9dExTC64P_9eDNBPE8zgNNS-b0do" target="_blank">demo</a>.

## We want to see
- React knowledge
- Css skills
- ECMAScript6 skills
- Clean code
- How you code

## You should
- **Use redux** (the project is already working with it).
- Use **flex** in the css style.
- **Keep responsiveness**. As the video shows, the pokemon list should adapt to the screen size and show three pokemons per row on large width screen size, two pokemon per row on medium width screen size and one pokemon per row on mobile width sizes. (You have a file named mixins.scss, in which you can use the existing medias in order to configure the responsiveness).


## Bonus
- Add **tests**.
- Use the existing **color palette** (``palette.scss``), **font-sizes** (``font-sizes.scss``), **media queries** (``mixins.scss``) and **padding sizes** (``variables.scss``).
- Follow existing **linter**. This project follows the *StandardJS* code style. There is a script task on the ``package.json`` named standard (``npm run standard``) that fixes automatically your code style faults.

## You should not
- Install another package.
- Use bootstrap.
- Do dirty things, like send via props a lot of data.


Once you finish the test, throw a Pull Request to the master branch on this repository.