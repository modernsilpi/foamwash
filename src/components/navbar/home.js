import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function Home() {
    return (
        <div style={{background: "rgba(19, 19, 19, 0.6)", width: "100%", height: "720px"}}>
           <p style={{ width: "100%", color: "rgb(235, 245, 250)", paddingTop: "80px", fontSize: "53px", textAlign: "center"}}> Hello vizagites!</p>
           <p style={{ width: "100%", color: "rgb(235, 245, 250)", fontSize: "53px", textAlign: "center"}}> Here is your at the door car wash service!</p>
           <div style={{textAlign: "center"}}> <Button animated='vertical' style={{width: "100px"}}>
      <Button.Content hidden>Book Slot</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button></div> 
        </div>
    );
}

export default Home
