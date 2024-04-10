import StatusBar from "./Problem1"
import SaveButton from "./Problem2"
import Online from "./Problem3"
import Form from "./Problem4"
import ChatRom from "./Problem5"
import ChatRoom2 from "./Problem6"
import StatusBar2 from "./Problem7"
import StatusBar3 from "./Problem8"
import Show from "./Problem9"
import Welcome2 from "./Problem10"
import Welcome3 from "./Problem11"
import Welcome4 from "./Problem12"
import Canvas from "./Problem13"
// import Counter from "./Problem14"

function App() {
  return (
    <>
      <b style={{ textAlign: "center" }}><h1>Reusing Logic with Custom Hooks</h1></b>
      <hr />
      <h1>4.8-Problem 1:Custom Hooks: Sharing logic between components </h1>
      <StatusBar />
      <p>Try turning your network on and off, and notice how this StatusBar updates in response to your actions.
        Now imagine you also want to use the same logic in a different component. You want to implement a Save button that will become disabled and show “Reconnecting…” instead of “Save” while the network is off.
        To start, you can copy and paste the isOnline state and the Effect into SaveButton</p>
      <br />
      <SaveButton />
      <br />
      <hr />
      <h1>4.8-Problem 2:Custom Hooks: Extracting your own custom Hook from a component  </h1>
      <Online />
      <hr />
      <h1>4.8-Problem 3:Custom Hooks let you share stateful logic, not state itself </h1>
      <Form />
      <hr />
      <h1>4.8-Problem 4: Passing reactive values between Hooks </h1>
      <ChatRom />
      <hr />
      <h1>4.8-Problem 5:Passing event handlers to custom Hooks </h1>
      <ChatRoom2 />
      <br />
      <hr />
      <h1>4.8-Problem 6:Custom Hooks help you migrate to better patterns </h1>
      <StatusBar2 />
      <br />
      <hr />
      <h1>4.8-Problem 7:</h1>
      <p>In the above example, useOnlineStatus is implemented with a pair of useState and useEffect. However, this isn’t the best possible solution. There is a number of edge cases it doesn’t consider. For example, it assumes that when the component mounts, isOnline is already true, but this may be wrong if the network already went offline. You can use the browser navigator.onLine API to check for that, but using it directly would not work on the server for generating the initial HTML. In short, this code could be improved.
      
        Luckily, React 18 includes a dedicated API called useSyncExternalStore which takes care of all of these problems for you. Here is how your useOnlineStatus Hook, rewritten to take advantage of this new API:</p>
      <StatusBar3 />
      <hr />
      <h1>4.8-Problem 8:There is more than one way to do it </h1>
      <Show />
      <br />
      To make the component more readable, you might extract the logic into a useFadeIn custom Hook:
      <Welcome2 />
      You could keep the useFadeIn code as is, but you could also refactor it more. For example, you could extract the logic for setting up the animation loop out of useFadeIn into a custom useAnimationLoop Hook:
      <Welcome3 />
      Effects let you connect React to external systems. The more coordination between Effects is needed (for example, to chain multiple animations), the more it makes sense to extract that logic out of Effects and Hooks completely like in the sandbox above. Then, the code you extracted becomes the “external system”. This lets your Effects stay simple because they only need to send messages to the system you’ve moved outside React.
      The examples above assume that the fade-in logic needs to be written in JavaScript. However, this particular fade-in animation is both simpler and much more efficient to implement with a plain CSS Animation:
      <Welcome4 />
      <br />
      <hr />
      <h1>4.8-Problem 9:Challenge 5 of 5: Implement a staggering movement </h1>
      <p>In this example, the usePointerPosition() Hook tracks the current pointer position. Try moving your cursor or your finger over the preview area and see the red dot follow your movement. Its position is saved in the pos1 variable.

        In fact, there are five (!) different red dots being rendered. You don’t see them because currently they all appear at the same position. This is what you need to fix. What you want to implement instead is a “staggered” movement: each dot should “follow” the previous dot’s path. For example, if you quickly move your cursor, the first dot should follow it immediately, the second dot should follow the first dot with a small delay, the third dot should follow the second dot, and so on.

        You need to implement the useDelayedValue custom Hook. Its current implementation returns the value provided to it. Instead, you want to return the value back from delay milliseconds ago. You might need some state and an Effect to do this.

        After you implement useDelayedValue, you should see the dots move following one another.</p>
      <Canvas />
      <p>Solution
        Here is a working version. You keep the delayedValue as a state variable. When value updates, your Effect schedules a timeout to update the delayedValue. This is why the delayedValue always “lags behind” the actual value.</p>
      <p>It is not getting displayed here so try it out </p>
      <hr />
      <h1>Challenge 4 of 5: Fix a resetting interval </h1>
      <p>In this example, there are two separate intervals.

        The App component calls useCounter, which calls useInterval to update the counter every second. But the App component also calls useInterval to randomly update the page background color every two seconds.

        For some reason, the callback that updates the page background never runs. Add some logs inside useInterval.Do the logs match what you expect to happen? If some of your Effects seem to re-synchronize unnecessarily, can you guess which dependency is causing that to happen? Is there some way to remove that dependency from your Effect?

        After you fix the issue, you should expect the page background to update every two seconds.</p>
      {/* <Counter/> */}
      <p>Solution
Inside useInterval, wrap the tick callback into an Effect Event, as you did earlier on this page.

This will allow you to omit onTick from dependencies of your Effect. The Effect won’t re-synchronize on every re-render of the component, so the page background color change interval won’t get reset every second before it has a chance to fire.

With this change, both intervals work as expected and don’t interfere with each other:</p>
      <hr />
    </>
  )
}

export default App
