import './Video.css';

function Video({ title, channel = "Coder Dost", views, time }) {
  return (
    <>
      <div className='container'>
        <div className="pic">
          {/* // width/height */}
          {/* "http://placeimg.com/160/90/1"
          remember we can change the dimension of the picture directly from its url also 
          like 
          "http://placeimg.com/130/170/1" */}
          <img src="http://placeimg.com/160/90/1" alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}
// export {Video,Thumb}
// when we need to export more than one component we use object shorthand to do that 
// and we can not sent more than one component by default 
// and that is why we removed the default .

export default Video;
// why we use fragmwnts in react ?
// first note that , every element/html tag in jsx is received as js object at the end and 
// in order to render , we need only one js object otherwise it will return error 
// which means we need to wrap all the tags in another tag which can logically be refered as parent 
// tag , and that is why we use parent tags .


// We use fragments in React for a specific reason.
//  It’s important to note that every element or HTML tag in JSX ultimately translates into
//  a JavaScript object. To render these elements, we need a single JavaScript object; otherwise, 
// an error will occur. This requirement means we have to encapsulate all tags within another tag, 
// which can logically be referred to as the parent tag. That’s where fragments come into play. Fragments 
// allow us to group a list of children without adding extra nodes to the DOM. This way, we can satisfy the 
// requirement of having a single parent object without unnecessarily complicating our layout structure.
//  Therefore, the use of fragments is a common practice in React development


// why we do not use <div></div> as a parent because creating an extra div can disorient your layout .
//  also why whould we like to create an unneccesary div . 
// so react has given us <></> this empty tag which are called fragments . 
// which makes the code follw the rule and also vanished . 
// so ultimately we taking benefits of react without creating an extra div .
// and that's why fragments are important and use it when you can not find parent  
// then you can make a common parent using this . 

// refurbished 
// “We avoid using <div></div> as a parent element because introducing an 
// extra div can disrupt the layout. There’s also no need to create an unnecessary div.
//  React provides us with <></>, known as fragments, which allow us to adhere to coding standards
//  without leaving a trace in the DOM. This way, we can leverage the benefits of React without adding
//  an extra div. That’s why fragments are crucial. Use them when you can’t find a common parent, and you 
// can establish one using fragments.”