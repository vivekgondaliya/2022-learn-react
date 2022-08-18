import React from 'react'
import { Menu, Header } from 'semantic-ui-react'

const HeaderComponent = () => (
  <div>
    <Menu fluid widths={3} >
			<Menu.Item/>

			<Menu.Item>
				<Header as='h1' inverted color='blue' style={{"margin" : "15px 0px"}}>
					Contact Manager
				</Header>
			</Menu.Item>

			<Menu.Item/>
		</Menu>
  </div>
)

export default HeaderComponent