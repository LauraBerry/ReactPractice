import React from 'react';

class Hello extends React.Component
{
    constructor(props)//sets all initial state stuff
    {
        super(props);
        this.state={};
    }
    render() //compiles the code it is give as a display item.
    {
        return (
            <div> 
                <h1>Hello World</h1>
            </div>
            //code goes here
        );
    }
}
export default Hello; 
//this means a class from outside of this class can call this class
