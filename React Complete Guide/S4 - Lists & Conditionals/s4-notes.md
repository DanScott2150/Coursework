(Builds on code written in prior section - updates for this section will be made to S3/s3-project/ folder)


Always update state immutably. Create a copy and then update the copy.

Example from project:
        state = {
            persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Steph', age: 26 },
            ],
            showPersons: false
        }

        [...]

        deletePersonHandler = (personIndex) => {
            const persons = this.state.persons;
            persons.splice(personIndex, 1);
            this.setState({persons: persons});
        }

    ^^ Bad because 'const persons' is creating a reference/pointer to this.state.persons. This still works in this case, but can cause app to become buggy/unpredrictable as its scales larger.

    Can solve by using the ES6 spread operator:

        deletePersonHandler = (personIndex) => {
            const persons = [...this.state.persons];
            persons.splice(personIndex, 1);
            this.setState({persons: persons});
        }

    ^^ const persons is now a separate array that you can safely modify. Spread operator creates a new array, and then pulls out each value from this.state.persons.

    To render something conditionally, best practice to put JSX for it into a variable, and then show variable conditionally.

    If rendering a list, can use .map() method to loop through array. ie:
        <div>
            {this.state.persons.map(person => {
                return <Person name={person.name} />
            })}
        </div>

Useful resources & links:
    Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html
    Lists & Keys: https://reactjs.org/docs/lists-and-keys.html