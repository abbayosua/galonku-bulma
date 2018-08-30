import React from "react";
import 'bulma/css/bulma.css';
import { Container, Footer, Content, Columns, Column, Icon, Contents } from "bloomer";

const Header = () => (

  // <div className="hero-foot">
  //   <nav className="tabs">
  //     <div className="container">
  //     Copyright AndromedaOrg Team@2018
  //     </div>
  //   </nav>
  // </div>
  <div>
<Footer id='footer' hasTextColor='dark'>
    <Container>
        <Content>
            <Columns>
                <Column isFull>
                    <p>
                      Made with Laziness by Abba Yosua
                    </p>
                </Column>
            </Columns>
            <Content isSize='small'>
                <p>This is just a side project behind the real Galonku Project</p>
                <p>This project is a "plan b" when the semantic is f*ck up</p>
            </Content>
        </Content>
    </Container>
</Footer>
  </div>
)

export default Header;