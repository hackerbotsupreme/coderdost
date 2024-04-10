import React from 'react'
import Overview_problem1_1 from './Overview_problem1_1'
import Overview_problem1_2 from './Overview_problem1_2'
import Overview_problem1_3 from './Overview_problem1_3'
import Overview_problem1_4 from './Overview_problem1_4'
import Overview_problem1_6 from './Overview_problem1_6'
import Overview_problem1_7 from './Overview_problem1_7'
import Overview_problem1_8 from './Overview_problem1_8'
const Overview_problem1 = () => {
    return (
        <>
            <h1>Group related state </h1>
            You might sometimes be unsure between <br />
            using a single or multiple state variables. <br />
            Should you do this?<br />
            <code>
                const [x, setX] = useState(0);
                const [y, setY] = useState(0);
                Or this?

                const [position, setPosition] = useState({ });
            </code>
            Technically, you can use either of these approaches. <br />
            But if some two state variables always change together,<br />
            it might be a good idea to unify them into a single<br />
            state variable. Then you won’t forget to always keep<br />
            /them in sync, like in this example where moving the<br />
            cursor updates both coordinates of the red dot:<br />
            <Overview_problem1_1 />
            Another case where you’ll group data into an object <br />
            or an array is when you don’t know how many pieces <br />
            of state you’ll need. For example, it’s helpful when<br />
            you have a form where the user can add custom fields.<br /><br /><br />

            <h1>Avoid contradictions in state </h1>
            While this code works, it leaves the door open for <br />
            “impossible” states. For example, if you forget to <br />
            call setIsSent and setIsSending together, you may <br />
            end up in a situation where both isSending and isSent<br />
            are true at the same time. The more complex your <br />
            component is, the harder it is to understand what happened.<br /><br />

            Since isSending and isSent should never be true <br />
            at the same time, it is better to replace them with<br />
            one status state variable that may take one of <br />
            three valid states: 'typing' (initial), 'sending', and 'sent':<br /><br />

            <Overview_problem1_2 />

            You can still declare some constants for readability:<br />

            const isSending = status === 'sending';<br />
            const isSent = status === 'sent';<br /><br />
            But they’re not state variables, so you don’t need to <br />
            worry about them getting out of sync with each other.<br />

            <h1>Avoid redundant state </h1>
            If you can calculate some information from the component’s <br />
            props or its existing state variables during rendering,<br />
            you should not put that information into that component’s state.<br /><br />
            <Overview_problem1_3 />
            This form has three state variables: firstName, lastName, <br />
            and fullName. However, fullName is redundant. You can <br />
            always calculate fullName from firstName and lastName <br />
            during render, so remove it from state.<br /><br />


            <Overview_problem1_4 />
            Here, fullName is not a state variable. Instead, <br />
            it’s calculated during render:<br /><br />

            const fullName = firstName + ' ' + lastName;<br /><br />
            As a result, the change handlers don’t need to do <br />
            anything special to update it. When you call <br />
            setFirstName or setLastName, you trigger a re-render,<br />
            and then the next fullName will be calculated from the fresh data.<br /><br />

            <h1>Don’t mirror props in state </h1>
            see on site<br /><br /><br />

            <h1>Avoid duplication in state </h1>

            <Overview_problem1_6 />
            Currently, it stores the selected item as an object in <br />
            the selectedItem state variable. However, this is not <br />
            great: the contents of the selectedItem is the same <br />
            object as one of the items inside the items list. <br />
            This means that the information about the item itself <br />
            is duplicated in two places.<br /><br /><br />

            Why is this a problem? Let’s make each item editable:<br />
            <Overview_problem1_7 />

            Notice how if you first click “Choose” on an item and <br />
            then edit it, the input updates but the label at the <br />
            bottom does not reflect the edits. This is because <br />
            you have duplicated state, and you forgot to update selectedItem.<br />

            Although you could update selectedItem too, an easier <br />
            fix is to remove duplication. In this example, instead <br />
            of a selectedItem object (which creates a duplication <br />
            with objects inside items), you hold the selectedId <br />
            in state, and then get the selectedItem by searching <br />
            the items array for an item with that ID:<br /><br /><br /><br />
            <Overview_problem1_8 />

            The state used to be duplicated like this:<br />
            But after the change it’s like this:<br /><br />
            The duplication is gone, and you only keep the essential state!<br /><br />

            Now if you edit the selected item, the message below <br />
            will update immediately. This is because setItems <br />
            triggers a re-render, and items.find(...) would <br />
            find the item with the updated title. You didn’t <br />
            need to hold the selected item in state, because<br />
            only the selected ID is essential. The rest could<br />
            be calculated during render.<br /><br /><br />

            <h1>Avoid deeply nested state<br />
            </h1>
            Imagine a travel plan consisting of planets, <br />
            continents, and countries. You might be tempted <br />
            to structure its state using nested objects and <br />
            arrays, like in this example:<br /><br /><br />

            Now let’s say you want to add a button to delete <br />
            a place you’ve already visited. How would you go <br />
            about it? Updating nested state involves making <br />
            copies of objects all the way up from the part <br />
            that changed. Deleting a deeply nested place would <br /><br />
            involve copying its entire parent place chain. <br />
            Such code can be very verbose.<br />

            If the state is too nested to update easily, <br />
            consider making it “flat”. Here is one way you <br />
            can restructure this data. Instead of a tree-like <br />
            structure where each place has an array of its <br />
            child places, you can have each place hold <br />
            an array of its child place IDs. Then store <br />
            a mapping from each place ID to the corresponding place.<br /><br /><br />

            Now that the state is “flat” (also known as<br />
            “normalized”), updating nested items becomes easier.<br /><br />

            In order to remove a place now, you only need <br />
            to update two levels of state:<br /><br />

            The updated version of its parent place should<br />
            exclude the removed ID from its childIds array.<br />
            The updated version of the root “table” object <br />
            should include the updated version of the parent place.<br /><br /><br />

            You can nest state as much as you like, but making <br />
            it “flat” can solve numerous problems. It makes <br />
            state easier to update, and it helps ensure you <br />
            don’t have duplication in different parts of <br />
            a nested object.<br /><br /><br />

            Recap<br />
            If two state variables always update together, consider merging them into one.<br />
            Choose your state variables carefully to avoid creating “impossible” states.<br />
            Structure your state in a way that reduces the chances that you’ll make a mistake updating it.<br />
            Avoid redundant and duplicate state so that you don’t need to keep it in sync.<br />
            Don’t put props into state unless you specifically want to prevent updates.<br />
            For UI patterns like selection, keep ID or index in state instead of the object itself.<br />
            If updating deeply nested state is complicated, try flattening it.<br /><br /><br /><br />


        </>
    )
}

export default Overview_problem1