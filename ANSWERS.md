- [ ] Why would you use class component over function components (removing hooks from the question)?

You would use class components because something is already written with classes, or because your employer wants you to, or because you prefer them, etc.  Classes are basically interchangable with functional components since functional components now have hooks.  Before that, classes were necessary in React programming to get the desired functionality.  So, with this change, using or not using classes more or less comes down to preference.

- [ ] Name three lifecycle methods and their purposes.

* Birth/Mounting Phase - This phase occurs when the component is being built and rendered.  This is the time to initialize needed data.
* Growth/Updating Phase - This phase occurs when the component has already been loaded but needs to be updated for any reason.
* Death/Un-Mounting Phase - This phase occurs when the component is being removed from the screen because it's no longer needed at that time.

- [ ] What is the purpose of a custom hook?

You would create a custom hook so that code can be reused within an application or by another application.  There is generally no hard-coded data so the hook can be used anywhere it's needed.  A custom hook can have the same reusability as a normal hook if it's written correctly.

- [ ] Why is it important to test our apps?

Testing can take out much of the stress of writing new features or just making changes. It's important to test our apps because things can break unknowingly or in odd ways.  Writing tests can make it easier to spot and fix bugs that might come up, even years into the future.  Even just weeks away from an app can make it difficult to understand all of the inner workings, even when an app was written by you.  This goes doubly so if the app was written by someone else.  