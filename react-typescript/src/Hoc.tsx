import React, { Component} from 'react';

const initialState = {
    name: 'Marbo',
    message: 'TypeScript HOC are cool!'
  }

//Defining the type of state
type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
    class HOC extends Component<{}, State> {
        //Read only variable as state type
        readonly state: State = initialState;

        render() {
            return (
                 <WrappedComponent 
                    name={this.state.name} 
                    message={this.state.message}/>
            )
        }
      }
      return HOC;
  }

export default messageHoc;