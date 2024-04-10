// 3.2

// import React, { useState, useEffect } from 'react';
import Problem1_clock from './Problem1_clock';
import Problem2_clock from './Problem2_clock';
import Problem3_Highlight from './Problem3_Highlight';
import FeedbackForm from './Problem4_FeedbackForm';
import Form from './Problem5_RedundentState';
import Form2 from './Problem6_RedundentState';
import Menu from './Problem7_DuplicationInState';
import Menu2 from './Problem8_DuplicationInState';
import Menu3 from './Problem9_DuplicationInState';
import TravelPlan from './Problem10_AvoidDeeplyNestedState';
import TravelPlan2 from './Problem11_AvoidDeeplyNestedState';
import MailClient from './Problem4_ Implement multiple selection';
import Overview_problem1 from './Overview_problem1';

function App() {
  return (
    <>
      <b style={{ textAlign: "center" }}><h1>Choosing the State Structure</h1></b>
      <hr />
      <h1>3.2:Problem 1</h1>
      <p>Challenge 1 of 4: Fix a component that’s not updating
        This Clock component receives two props: color and time. When you select a different color in the select box, the Clock component receives a different color prop from its parent component. However, for some reason, the displayed color doesn’t update. Why? Fix the problem.</p>
      <Problem1_clock />
      <p>Solution
        The issue is that this component has color state initialized with the initial value of the color prop. But when the color prop changes, this does not affect the state variable! So they get out of sync. To fix this issue, remove the state variable altogether, and use the color prop directly.</p>
      <hr />
      <h1>3.2:Problem 2</h1>
      <p>Challenge 2 of 4: Fix a broken packing list
        This packing list has a footer that shows how many items are packed, and how many items there are overall. It seems to work at first, but it is buggy. For example, if you mark an item as packed and then delete it, the counter will not be updated correctly. Fix the counter so that it’s always correct.</p>
      <Problem2_clock />
      <p>Solution
        Although you could carefully change each event handler to update the total and packed counters correctly, the root problem is that these state variables exist at all. They are redundant because you can always calculate the number of items (packed or total) from the items array itself. Remove the redundant state to fix the bug</p>
      <hr />
      <h1>3.2:Problem 3</h1>
      <p>Challenge 3 of 4: Fix the disappearing selection
        There is a list of letters in state. When you hover or focus a particular letter, it gets highlighted. The currently highlighted letter is stored in the highlightedLetter state variable. You can “star” and “unstar” individual letters, which updates the letters array in state.

        This code works, but there is a minor UI glitch. When you press “Star” or “Unstar”, the highlighting disappears for a moment. However, it reappears as soon as you move your pointer or switch to another letter with keyboard. Why is this happening? Fix it so that the highlighting doesn’t disappear after the button click.</p>
      <Problem3_Highlight />
      <p>Solution
        The problem is that you’re holding the letter object in highlightedLetter. But you’re also holding the same information in the letters array. So your state has duplication! When you update the letters array after the button click, you create a new letter object which is different from highlightedLetter. This is why highlightedLetter === letter check becomes false, and the highlight disappears. It reappears the next time you call setHighlightedLetter when the pointer moves.

        To fix the issue, remove the duplication from state. Instead of storing the letter itself in two places, store the highlightedId instead. Then you can check isHighlighted for each letter with letter.id === highlightedId, which will work even if the letter object has changed since the last render.</p>
      <hr />
      <h1>3.2:Problem 4</h1>
      <p>Challenge 4 of 4: Implement multiple selection
        In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.

        Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.</p>
      <MailClient />
      <p>Solution
        Instead of a single selectedId, keep a selectedIds array in state. For example, if you select the first and the last letter, it would contain [0, 2]. When nothing is selected, it would be an empty [] array.</p>
      <hr />
      <h1>3.2:Problem 4</h1>
      <FeedbackForm />
      <hr />
      <h1>3.2:Problem 5</h1>
      <Form />
      <br />
      <h1>3.2:Problem 6</h1>
      <Form2 />
      <hr />
      <h1>3.2:Problem 7</h1>
      <Menu />
      <br />
      <h1>3.2:Problem 8</h1>
      <Menu2 />
      <hr />
      <h1>3.2:Problem 9</h1>
      <Menu3 />
      <hr />
      <h1>3.2:Problem 10</h1>
      <TravelPlan />
      <hr />
      <br />
      <h1>3.2:Problem 11</h1>
      <TravelPlan2 />
      <hr />
      <br />
      <h1>3.2- Choosing the State Structure-Chapter Overview</h1>
      <Overview_problem1/>
    </>

  )
}

export default App;
