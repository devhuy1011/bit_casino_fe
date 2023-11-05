import React, { Children } from 'react';
import styled from 'styled-components';

const IndicatorStyle = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const IndicatorStyleButton = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  position: relative;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Wrapper = ({ customStyle, ...props }) => {    
	let wrapper = (
		<IndicatorStyle 
		// customStyle={customStyle}
		>
			{Children.toArray(props.children)}
		</IndicatorStyle>
	);
	if (props.wrapper === 'button'){
		wrapper = (
			<IndicatorStyleButton>
				{Children.toArray(props.children)}
			</IndicatorStyleButton>
		);
	}
	return wrapper;
}

export default Wrapper;
