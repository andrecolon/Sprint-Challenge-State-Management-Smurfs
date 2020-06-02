1. What problem does the context API help solve? Pass data/state from child to parent componenent. Removes the untidy prop drilling and passing props through components that may not need them.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions = holds the event that will be called in by the reducer
Store = holds the data and changed data to be used 
Reducer = manages the state 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state -is global state/data that will be used throughout the application and move between components
Component state is local state/data that is specific to that component

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
>>>>>>>>>>>>>>>>> Answer this
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I've yet to understand the power of Redux however managing the state  appears to be more robust for redux than Context.
Context api has an "easy to swallow" set of functions and processes that do not escape the mind. The concepts are easy to grasp.  
I also notice Context Api is not without flaw as you cann reuse the  
