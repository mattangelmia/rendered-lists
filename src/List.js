import React from 'react';
import Header from './Header';

export default function List(props) {
  return <div>
<Header header={props.header}/>
      <div style={{paddingTop: '20%'}}>
      {
props.course.map((part, i)=>

    <li key={i}>
        {part.name}, {part.exercises}
    </li>
 
)
}
</div>    


  </div>;
}
